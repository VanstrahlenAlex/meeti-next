import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { db } from '../db/index'
import { authSchema } from '../db/schema'
import { AuthEmailService } from "../emails/services/AuthEmailService";

export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: 'pg',
		usePlural: true,
		schema: authSchema
	}),
	emailAndPassword: {
		enabled: true,
		requireEmailVerification: true
	},
	emailVerification : {
		sendOnSignIn: true,
		autoSignInAfterVerification: true,
		sendVerificationEmail: async ({user, url}) => {
			const {name, email} = user;

			if(!name || !email) return;

			await AuthEmailService.sendVerificationEmail({
				name,
				email,
				url
			})
		}
	},
	plugins: [nextCookies()]
})


