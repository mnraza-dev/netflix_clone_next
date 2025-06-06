import Navbar from "@/components/header/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold">Netflix Clone</h1>
          <p className="text-lg">This is a Netflix Clone</p>
        </div>
      </main>
    </div>
  );
}
