"use client"

import { Form, FormInput, FormLabel, FormSubmit } from "@/src/shared/components/forms";

export default function ForgotPasswordForm() {
  return (
	<Form>
		<FormLabel htmlFor="email">Correo Electrónico</FormLabel>
		<FormInput type="email" id="email" placeholder="Ingresa tu correo electrónico" />
		<FormSubmit value="Enviar Instrucciones" />
	</Form>
  )
}
