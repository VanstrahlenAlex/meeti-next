import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { db } from '../db/index'
import { authSchema } from '../db/schema'

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
	plugins: [nextCookies()]
})


