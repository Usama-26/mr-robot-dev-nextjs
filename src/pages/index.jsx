import Image from "next/image";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";

const monteserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-primary bg-cover bg-no-repeat max-w-desktop">
      <div className="mx-auto desktop:px-32 lg:px-20 px-5 lg:bg-[#3C64B122] bg-black/20">
        <Navbar />
      </div>
    </main>
  );
}
