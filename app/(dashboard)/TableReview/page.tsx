"use client";

import { useState } from "react";
import { createColumns } from "./components/column";
import { DataTable } from "./components/data-table";
import { MyFormData } from "./types/table";
import UserForm from "./components/form";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

const initialData: MyFormData[] = [
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
];

export default function TablePage() {
    const [data, setData] = useState<MyFormData[]>(initialData);
    const [editingUser, setEditingUser] = useState<MyFormData | null>(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const columns = createColumns();

    const handleCreate = (newRecord: Omit<MyFormData, "id">) => {
        const record = { ...newRecord, id: String(data.length + 1) };
        setData([...data, record]);
        setIsDialogOpen(false);
    };

    const handleUpdate = (updatedUser: MyFormData) => {
        setData(data.map((record) => (record.id === updatedUser.id ? updatedUser : record)));
        setIsDialogOpen(false);
        setEditingUser(null);
    };

    const handleDelete = (id: string) => {
        setData(data.filter((record) => record.id !== id));
    };

    const handlemultiDelete = (users: MyFormData[]) => {
        const userIds = new Set(users.map((record) => record.id));
        setData(data.filter((record) => !userIds.has(record.id)));
    };

    const handleEdit = (record: MyFormData) => {
        setEditingUser(record);
        setIsDialogOpen(true);
    };

    const openCreateDialog = () => {
        setEditingUser(null);
        setIsDialogOpen(true);
    };
    return (

        <div className="w-[95%] mx-auto py-10">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>{editingUser ? "Edit" : "Create New"}</DialogTitle>
                        <DialogDescription>
                            Please fill out the form below to {editingUser ? "update the data" : "create a new data"}.
                        </DialogDescription>
                    </DialogHeader>
                    <div>
                        <UserForm
                            onSubmit={editingUser ? handleUpdate : handleCreate}
                            initialData={editingUser}
                        />
                    </div>
                </DialogContent>
            </Dialog>
            <DataTable
                columns={columns}
                data={data}
                onAdd={openCreateDialog}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onmultiDelete={handlemultiDelete}
            />
        </div>
    );
}