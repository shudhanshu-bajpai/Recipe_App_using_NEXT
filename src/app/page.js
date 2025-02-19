import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";

export default function Home() {
  return (
    <div className="text-black bg-blue-200 flex justify-center items-center h-screen flex-col font-sans width-full">
      <div className="w-[400px] h-[470px]  bg-white shadow-md rounded-md p-4 flex justify-center items-center flex-col shadow-slate-400 border-1 border-black drop-shadow-md">
      <div className="h-[100px] w-[150px] rounded-full flex justify-center items-start">
        <Image src={logo} alt="logo" width={250} height={250}/>
      </div>
      <h2 className="text-3xl pb-2">Welcome back to</h2>
      {/* <h2 className="text-3xl">to</h2> */}
      <h1 className="text-black mb-10 text-4xl"> <span className="text-green-500">Recipe</span> <span className="text-gray-500">App</span></h1>
      <Link href="/recipes"><button className="bg-blue-400 text-white pt-1 pb-1 pl-2 pr-2 text-[18px] rounded">Explore</button></Link>
      </div>
    </div>
  );
}
