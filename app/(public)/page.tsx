
import Link from "next/link";
import { Metadata } from "next";
import Hero from "@/src/shared/components/ui/Hero";
import { generatePageTitle } from "@/src/shared/utils/metadata";

export const metadata: Metadata = {
  title: generatePageTitle("Inicio"),
  description: "Inicio",
};

export default function Home() {
  return (
	<>
		<Hero />
	</>
  );
}
