'use client';
import { Search } from "lucide-react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function MySearch() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = useDebouncedCallback((term) => {
        const params = new URLSearchParams(searchParams);
        // params.set('page', '1');
        if (term) {
            params.set("search", term);
        } else {
            params.delete("search");
        }
        replace(`${pathname}?${params.toString()}`);
        console.log(term);
    }, 300);

    return (
        <div className="group flex-grow flex items-center border-2 border-gray-300 gap-2 px-3 py-2 shadow-md rounded-full ml-10 max-w-[28%] transition-all duration-200 focus-within:border-blue-500">
            <Search className="text-gray-500" />
            <input
                type="text"
                placeholder="Search for a course"
                className="w-full outline-none  focus:outline-none placeholder: text-gray-500"
                onChange={(e) => { handleSearch(e.target.value); }}
                defaultValue={searchParams.get("search")?.toString()}
            />
        </div>
    );
}
