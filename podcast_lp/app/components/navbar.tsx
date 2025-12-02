import Image from "next/image";

export default function Navbar(){
    return (
        <nav>
            <div className="sm:w-1/3 justify-center sm:justify-normal flex items-center p-5">
                <Image src={"/michaelPhone.png"} height={100} width={100} alt="michael phone"></Image>
                <div>
                    <h1 className="text-3xl font-bold text-center">The Landing Page</h1>
                    <h2 className="text-xl text-center">A Security Podcast</h2>
                </div>
            </div>
            <hr></hr>
        </nav>
    )
}