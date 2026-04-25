"use server";

import { SignInInput, SignInSchema, SignUpInput, SignUpSchema } from "../schemas/authSchema";
import { authService } from "../services/AuthService";

export async function signUpAction(input : SignUpInput) {
	const data = SignUpSchema.safeParse(input);

	if(!data.success) {
		return {
			message: 'Error al registrar el usuario',
			error: data.error.issues[0].message,
			success: ''
		}
	}

	const response = await authService.register(data.data);

	return response;
}

export async function signInAction(input: SignInInput) {
	const data = SignInSchema.safeParse(input);

	if(!data.success) {
		return {
			message: 'Error al registrar el usuario',
			error: data.error.issues[0].message,
			success: ''
		}
	}

	const response = await authService.login(data.data);

	return response;
}