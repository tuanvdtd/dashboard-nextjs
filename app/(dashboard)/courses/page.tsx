import { Suspense } from "react"
import CourseTable from "./coursesTable"

export default function DemoPage() {
    return (
        <div className="mx-10 py-8 ">
            <Suspense fallback={<div>Loading...</div>}>
                <CourseTable />
            </Suspense>
        </div>
    )
}
