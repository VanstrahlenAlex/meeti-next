import Heading from '@/src/shared/components/typography/Heading';
import { generatePageTitle } from '@/src/shared/utils/metadata';
import { Metadata } from 'next';
import ForgotPasswordForm from '@/src/features/auth/components/ForgotPasswordForm';
import Link from 'next/link';

export const metadata : Metadata = {
	title: generatePageTitle("Reestablecer Password")
}

export default function ForgotPasswordPage() {
  return (
	<>
		<Heading>¿Olvidaste tu contraseña? Recupera tu acceso a Meeti</Heading>
		<ForgotPasswordForm />

		<nav className="mt-20 flex justify-between ">
			<Link href="/auth/login" className="font-bold">Iniciar sesión</Link>
			<Link href="/auth/create-account" className="font-bold">¿No tienes cuenta? Crea una</Link>
		</nav>
	</>
  )
}
