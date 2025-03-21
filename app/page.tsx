import Link from "next/link"

export default function Home() {
  return (
    <div>
      <h1 className="bg-amber-300 text-6xl cursor-pointer flex justify-center mb-7">Dashboard</h1>
      <Link href="/dashboard" className="flex flex-col justify-center items-center">
        <div className=" relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] 
      border-l-transparent border-r-transparent border-b-black"> </div>
        <p className="text-2xl">Go to Dashboard</p>
      </Link>
    </div>

  );
}
