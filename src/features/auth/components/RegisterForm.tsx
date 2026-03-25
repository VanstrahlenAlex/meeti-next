import { Form, FormInput, FormLabel, FormSubmit } from '@/src/shared/components/forms'
import React from 'react'

export default function RegisterForm() {
  return (
	<Form>
		<FormLabel htmlFor="name">Nombre</FormLabel>
		<FormInput type="text" id="name" placeholder="Ingresa tu nombre" />
		<FormLabel htmlFor="email">Correo Electrónico</FormLabel>
		<FormInput type="email" id="email" placeholder="Ingresa tu correo electrónico" />
		<FormLabel htmlFor="password">Contraseña</FormLabel>
		<FormInput type="password" id="password" placeholder="Password - Min 8 caracteres" />
		<FormLabel htmlFor="password_confirmation">Confirmar Contraseña</FormLabel>
		<FormInput type="password" id="password_confirmation" placeholder="Confirmar Contraseña" />
		<FormSubmit value="Registrarse" />
	</Form>
  )
}
