// DataTableWrapper.tsx
import DataTable from "./data-table"
import { columns, Course } from "./columns"


async function getData(): Promise<Course[]> {
    // Fetch data from your API here.
    await new Promise((resolve) => setTimeout(resolve, 2000))
    return [
        { id: "1", price: 199000, status: "Published", title: "React Basics" },
        { id: "2", price: 299000, status: "Draft", title: "Advanced TypeScript" },
        { id: "3", price: 149000, status: "Published", title: "Intro to Tailwind" },
        { id: "4", price: 399000, status: "Published", title: "Fullstack with Next.js" },
        { id: "5", price: 99000, status: "Draft", title: "HTML & CSS Fundamentals" },
        { id: "6", price: 250000, status: "Published", title: "Node.js API Development" },
        { id: "7", price: 179000, status: "Draft", title: "UI/UX Design Basics" },
        { id: "8", price: 299000, status: "Published", title: "Firebase for Web Apps" },
        { id: "9", price: 199000, status: "Published", title: "Git & GitHub Mastery" },
        { id: "10", price: 349000, status: "Draft", title: "GraphQL from Scratch" },
        { id: "11", price: 349000, status: "Published", title: "GraphQL from Scratch" },
        { id: "12", price: 349000, status: "Draft", title: "GraphQL from Scratch" },
        { id: "13", price: 349000, status: "Published", title: "GraphQL from Scratch" },
    ]
}

export default async function CoursesTable() {
    const data = await getData()
    return <DataTable columns={columns} data={data} />
}
