import Image from "next/image";

export default function Home() {
  return (
    <div className="bgImage">
      <div className="flex justify-center items-center h-screen">
        <div className="flex items-center flex-col bg-white p-10 border-2 border-green-600">
          <h1 className="text-xl sm:text-4xl font-bold">The Landing Page w/ Barry Block</h1>
          <h2 className="text-md sm:text-2xl">Episode #1 - The Malware Episode </h2>
        </div>
      </div>
    </div>  
  );
}
