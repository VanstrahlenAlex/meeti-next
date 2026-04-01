"use client";
import {useForm} from 'react-hook-form'
import { Form, FormError, FormInput, FormLabel, FormSubmit } from '@/src/shared/components/forms'
import { SignUpSchema } from '../schemas/authSchema';
import { zodResolver } from '@hookform/resolvers/zod';


export default function RegisterForm() {

	const { register, handleSubmit, formState: { errors } } = useForm({
		resolver: zodResolver(SignUpSchema)
	});

	const onSubmit = () => {
		console.log('Enviando formulario');
	}

  return (
	<Form
		onSubmit={handleSubmit(onSubmit)}
	>
		<FormLabel htmlFor="name">Nombre</FormLabel>
		<FormInput 
			type="text" 
			id="name" 
			placeholder="Ingresa tu nombre"
			{...register('name')}
			/>
		{errors.name && <FormError>{errors.name.message}</FormError>}
		<FormLabel htmlFor="email">Correo Electrónico</FormLabel>
		<FormInput 
			type="email" 
			id="email" 
			placeholder="Ingresa tu correo electrónico"
			{...register('email')}
			/>
		{errors.email && <FormError>{errors.email.message}</FormError>}
		<FormLabel htmlFor="password">Contraseña</FormLabel>
		<FormInput 
			type="password" 
			id="password" 
			placeholder="Password - Min 8 caracteres"
			{...register('password')}
			/>
		{errors.password && <FormError>{errors.password.message}</FormError>}
		<FormLabel htmlFor="password_confirmation">Confirmar Contraseña</FormLabel>
		<FormInput 
			type="password" 
			id="password_confirmation" 
			placeholder="Confirmar Contraseña"
			{...register('passwordConfirmation')}
			/>
		{errors.passwordConfirmation && <FormError>{errors.passwordConfirmation.message}</FormError>}
		<FormSubmit value="Registrarse" />
	</Form>
  )
}
