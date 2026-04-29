import { auth } from "@/src/lib/auth";
import { SignInInput, SignUpInput } from "../schemas/authSchema";
import { authRepository, IAuthRepository } from "./AuthRepository";
import { APIError } from "better-auth";
import { headers } from "next/headers";

class AuthService {

	constructor(private authRepository : IAuthRepository) {
		
	}
	async register(credentials : SignUpInput){
		const { name, email, password } = credentials;
		
		//Revisar si el usuario existe 
		const user = await this.authRepository.userExists(email)
		if(user){
			return {
				error: 'El usuario ya existe, intenté con otro e-mail o inicia sesión',
				success: ''
			}
		}
		//Validación de negocio 

		//Manejar el registro
		await auth.api.signUpEmail({
			body: {
				name,
				email,
				password,
				callbackURL: "/dashboard" //<-- A donde debe redirigirnos
			},
			headers: await headers()
		})

		return {
			error: '',
			success: 'Cuenta creada correctamente, revisa tu e-mail para verificar tu cuenta'
		}
	}

	async login(credentials: SignInInput){
		const { email, password } = credentials;
		
		const user = await this.authRepository.userExists(email)
		if (!user) {
			return {
				error: 'El usuario no existe, intenté con otro e-mail o inicia sesión',
				success: ''
			}
		}

		//Verificar su password y si confirmó su cuenta 
		try {
			await auth.api.signInEmail({
				body: {
					email,
					password,
					callbackURL: "/dashboard" //<-- A donde debe redirigirnos
				},
				headers: await headers()
			})
			return { 
				error: '',
				success: 'Inicio de sesión exitoso'
			}
		} catch (error) {
			if(error instanceof  APIError){
				const messages : Record<number, string> = {
					401: 'Password Incorrecto',
					403: 'Tu cuenta no ha sido confirmada, hemos enviado un email de confirmación',
				}

				const errorMessage = messages[error.statusCode]
				if(errorMessage){
					return {
						error: errorMessage,
						success: ''
					}
				}

				
			}
		}
		return {
			error: '',
			success: ''
		}
	}
}

export const authService = new AuthService(authRepository);




//La lógica de negocio debe estar en el servicio
//La lógica de persistencia debe estar en el repositorio
//La lógica de validación debe estar en el schema