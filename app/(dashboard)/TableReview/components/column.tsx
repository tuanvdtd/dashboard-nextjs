"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MyFormData } from "../types/table";

interface ColumnActions {
    onEdit?: (data: MyFormData) => void;
    onDelete?: (id: string) => void;
}

export const createColumns = (): ColumnDef<MyFormData>[] => {
    const columns: ColumnDef<MyFormData>[] = [
        {
            accessorKey: "title",
            header: "Title",
        },
        {
            accessorKey: "price",
            header: "Price",
        },
        {
            accessorKey: "status",
            header: "Status",
        },
        {
            accessorKey: "id",
            header: "ID",
        },
    ];

    columns.push({
        id: "actions",
        cell: ({ row, table }) => {
            const record = row.original;
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

                        {onEdit && <DropdownMenuItem onClick={() => onEdit(record)}>
                            Edit
                        </DropdownMenuItem>}

                        {onDelete && <DropdownMenuItem onClick={() => onDelete(record.id)}>
                            Delete
                        </DropdownMenuItem>}
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    });

    return columns;
};