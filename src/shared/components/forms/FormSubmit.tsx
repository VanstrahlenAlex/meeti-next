import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement>

export default function FormSubmit(props: Props) {
  return (
	<button {...props}>
		{props.children}
	</button>
  )
}