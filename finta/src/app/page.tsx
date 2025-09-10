import { Container } from "./components/container";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen relative [background:radial-gradient(125%_100%_at_50%_0%,_#FFF_6.32%,_#E0F0FF_29.28%,_#E7EFFD_68.68%,_#FFF_100%)]">
      <div className="max-w-5xl mx-auto absolute inset-0 h-full w-full pointer-events-none">
        {Array.from({ length: 2 }).map((_, i) => (
          <div
            key={i}
            className={`absolute inset-y-0 ${
              i === 0 ? "left-0" : "right-0"
            } w-px h-full bg-gradient-to-b from-gray-300 via-gray-200 to-gray-50`}
          />
        ))}
      </div>

      <Container>
        <Navbar />
        <Hero />
      </Container>

      <div className="relative w-full">
        <div className="absolute inset-x-0 w-full h-px bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200"></div>
        <div className="max-w-5xl mx-auto p-4">
          <Image src="/hero-ui-v5.webp" alt="Hero Image" width={1000} height={600} className="rounded-xl object-cover border-neutral-200 shadow-md mask-b-from-50% to-100%"/>
        </div>
      </div>
    </div>
  );
}
