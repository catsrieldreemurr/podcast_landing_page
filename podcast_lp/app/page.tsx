import Image from "next/image";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>

      <div className="text-center p-5">
        <h3 className="text-2xl sm:text-4xl font-bold p-5">ABOUT THE LANDING PAGE</h3>
        <p className="text-md sm:text-xl">Hosted by Barry Block, The Landing Page is a beginner-oriented Cyber Security Podcast.</p>
        <p className="text-md sm:text-xl">Every Episode covers a different aspect of Cyber Security, in an effort to make Cyber Security easier to learn.</p>
        <p className="text-md sm:text-xl">Learn more from experts in the field, and have fun along the way.</p>
      </div>

    </div>  
  );
}
