"use client"

import { Form, FormInput, FormLabel, FormSubmit } from "@/src/shared/components/forms";

export default function LoginForm() {
  return (
	<Form>
		<FormLabel htmlFor="email">E-mail</FormLabel>
		  <FormInput type="email" name="email" id="email" placeholder="Ingresa tu E-mail" /> 
		<FormLabel htmlFor="password">Contraseña</FormLabel>
		<FormInput
			type="password"
			name="password"
			id="password"
			placeholder="Ingresa tu contraseña"
		/>
		<FormSubmit value="Iniciar Sesión" />
	</Form>
  )
}
