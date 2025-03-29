import Image from 'next/image';


export default function HustLogo() {
    return (
        <div
            className=" flex flex-row items-center leading-none gap-3"
        >
            <Image src="/hustlogo.png" alt="logo" width={25} height={25} />
            <p className="text-3xl text-red-700 font-semibold hidden sm:block"  >HustLMS</p>
        </div>
    );
}