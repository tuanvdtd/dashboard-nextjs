'use client';
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button"
import { MoreHorizontal } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Checkbox } from "@/components/ui/checkbox"
import { DataTableColumnHeader } from "./_components/ColumnHeader"

import { MyFormData } from "./types/table";




interface ColumnActions {
    onEdit?: (data: MyFormData) => void;
    onDelete?: (id: string) => void;
}

export const columns: ColumnDef<MyFormData>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Title" />
        ),
        accessorKey: "title",
    },
    {
        accessorKey: "price",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Price" />
        ),
        cell: ({ row }) => {
            const price = parseFloat(row.getValue("price"))
            const formatted = new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "vnd",
            }).format(price)

            return <div className=" font-medium ">{formatted}</div>
        }
    },
    {
        header: "Status",
        cell: ({ row }) => {
            const status = row.getValue("status") as string;

            const colorMap: Record<string, string> = {
                published: "bg-green-100 text-green-700",
                draft: "bg-red-100 text-red-700",
            };

            const style = colorMap[status.toLowerCase()] || "bg-gray-100 text-gray-700";

            return (
                <span className={`px-2 py-1 rounded-md text-xs font-semibold capitalize ${style}`}>
                    {status}
                </span>
            );
        },
        accessorKey: "status",
    },
    {
        id: "actions",
        cell: ({ row, table }) => {
            const course = row.original
            const { onEdit, onDelete } = table.options.meta as ColumnActions;
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(course.id)}
                        >
                            Copy course ID
                        </DropdownMenuItem>

                        <DropdownMenuItem>View course details</DropdownMenuItem>
                        {onEdit && <DropdownMenuItem onClick={() => onEdit(course)}>
                            Edit
                        </DropdownMenuItem>}

                        {onDelete && <DropdownMenuItem onClick={() => onDelete(course.id)}>
                            Delete
                        </DropdownMenuItem>}
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]