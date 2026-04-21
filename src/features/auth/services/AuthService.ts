import { auth } from "@/src/lib/auth";
import { SignUpInput } from "../schemas/authSchema";

class AuthService {
	async register(credentials : SignUpInput){
		const { name, email, password } = credentials;
		
		//Revisar si el usuario existe 

		//Validación de negocio 

		//Manejar el registro
		await auth.api.signUpEmail({
			body: {
				name,
				email,
				password,
			}
		})

		return {
			error: '',
			success: 'Cuenta creada correctamente, revisa tu e-mail para verificar tu cuenta'
		}
	}
}

export const authService = new AuthService();




//La lógica de negocio debe estar en el servicio
//La lógica de persistencia debe estar en el repositorio
//La lógica de validación debe estar en el schema