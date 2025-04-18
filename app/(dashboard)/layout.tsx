import SideNav from '@/components/ui/dashboard/sidenav';
// import { ClerkProvider, SignedIn, UserButton } from "@clerk/nextjs";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="flex flex-col md:flex-row md:overflow-hidden">
                <div className="w-full flex-none md:w-64 min-h-screen">
                    <SideNav />
                </div>
                <div className="flex-grow  md:overflow-y-auto scrollbar-none  ">
                    {children}
                </div>
            </div>
        </>
    );
}