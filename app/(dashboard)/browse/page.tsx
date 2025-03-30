'use client';
import MyCard from "@/components/ui/card";
import Tag from "@/components/ui/tag";
import Link from 'next/link'
import dataUser from "@/lib/data"

export default function Page() {
    return (
        <>
            <Tag />
            <div className="text-4xl flex flex-row gap-x-5 gap-y-4 pt-10 pl-20 flex-wrap ">

                {dataUser.map((course, index) => (
                    <Link
                        key={index}
                        href={'/browse/course'}>
                        <MyCard key={index} title={course.title}
                            url={course.url}
                            progress={course.progress}
                            tag={course.tag}
                            chapter={course.chapter} />
                    </Link>
                ))}
            </div>
        </>
    );
}