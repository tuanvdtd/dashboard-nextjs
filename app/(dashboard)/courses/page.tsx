import { Suspense } from "react"
import CourseTable from "./coursesTable"

export default async function DemoPage() {
    return (
        <div className="mx-10 py-10 ">
            <Suspense fallback={<div>Loading...</div>}>
                <CourseTable />
            </Suspense>
        </div>
    )
}
