// Code: TopNav component
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import ModeToggle from "./toggle-theme";
import { Search } from "lucide-react";
import HustLogo from "./hust-logo";
import Link from "next/link";

export default function TopNav() {
    return (
        <div className=''>
            <div className="border-b-2 border-gray-200 py-4 pl-5">
                <div className="flex items-center justify-between">
                    <div className="flex-shrink-0">
                        <Link className="cursor-pointer" href="/">
                            <HustLogo />
                        </Link>
                    </div>

                    {/* Phần Search */}
                    <div className="group flex-grow flex items-center border-2 border-gray-300 gap-2 px-3 py-2 shadow-md rounded-full ml-10 max-w-[28%] transition-all duration-200 focus-within:border-blue-500">
                        <Search className="text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search for a course"
                            className="w-full outline-none hidden sm:block focus:outline-none"
                        />
                    </div>

                    {/* Phần avatar */}
                    <div className="flex items-center gap-5 pr-10">
                        {/* Phần chuyển theme */}
                        <ModeToggle />

                        {/* Phần đăng nhập */}
                        <SignedOut>
                            <SignInButton>
                                <button className="bg-gradient-to-b from-purple-500 to-indigo-500 font-semibold text-white px-5 py-[6px] cursor-pointer rounded-md">
                                    Sign In
                                </button>
                            </SignInButton>
                        </SignedOut>

                        <SignedIn>
                            <UserButton
                                appearance={{
                                    elements: {
                                        userButtonAvatarBox: {
                                            width: "40px",
                                            height: "40px",
                                        },
                                    },
                                }}
                            />
                        </SignedIn>
                    </div>
                </div>
            </div>
        </div>
    );
}
