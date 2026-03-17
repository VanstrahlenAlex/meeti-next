
import Link from "next/link";
import { Metadata } from "next";
import Hero from "@/src/shared/components/ui/Hero";

export const metadata: Metadata = {
  title: "Inicio",
  description: "Inicio",
};

export default function Home() {
  return (
	<>
		<Hero />
	</>
  );
}
