import z from 'zod';

export const BaseAuthSchema = z.object({
	name : z.string().min(3, { error: 'El nombre debe tener al menos 3 caracteres'}),
	email: z.email({ error: 'Correo electrónico inválido'}),
	password: z.string().min(8, { error: 'La contraseña debe tener al menos 8 caracteres'}),
	passwordConfirmation: z.string().min(1, { error: 'La confirmación de la contraseña no puede ir vacío'})
})


export const SignUpSchema = BaseAuthSchema.pick({
	name: true,
	email: true,
	password: true,
	passwordConfirmation: true
})