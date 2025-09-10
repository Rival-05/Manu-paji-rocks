import Image from "next/image";
import { Hero } from "./components/hero";

export default function Home() {
  return (
    <div className="flex justify-center h-screen bg-neutral-900">
      <Hero />
    </div>
  );
}
