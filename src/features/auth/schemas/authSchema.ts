import z from 'zod';

export const BaseAuthSchema = z.object({
	name : z.string().trim().min(3, { error: 'El nombre debe tener al menos 3 caracteres'}),
	email: z.email({ error: 'Correo electrónico inválido'}),
	password: z.string().trim().min(8, { error: 'La contraseña debe tener al menos 8 caracteres'}),
	passwordConfirmation: z.string().trim().min(1, { error: 'La confirmación de la contraseña no puede ir vacío'})
})


export const SignUpSchema = BaseAuthSchema.pick({
	name: true,
	email: true,
	password: true,
	passwordConfirmation: true
}).refine( (data) => data.password === data.passwordConfirmation, {
	error: 'Las contraseñas no coinciden',
	path: ['passwordConfirmation']
} )


export type SignUpInput = z.infer<typeof SignUpSchema>