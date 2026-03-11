
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inicio",
  description: "Inicio",
};

export default function Home() {
  return (
	<>
		<h1>Inicio</h1>
		<Link href="/nosotros">Nosotros</Link>
	</>
  );
}
