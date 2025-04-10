// "use client"
// import {
//     useState
// } from "react"
// import {
//     toast
// } from "sonner"
// import {
//     useForm
// } from "react-hook-form"
// import {
//     zodResolver
// } from "@hookform/resolvers/zod"
// import * as z from "zod"
// import {
//     cn
// } from "@/lib/utils"
// import {
//     Button
// } from "@/components/ui/button"
// import {
//     Form,
//     FormControl,
//     FormDescription,
//     FormField,
//     FormItem,
//     FormLabel,
//     FormMessage,
// } from "@/components/ui/form"
// import {
//     Input
// } from "@/components/ui/input"
// import {
//     Select,
//     SelectContent,
//     SelectItem,
//     SelectTrigger,
//     SelectValue
// } from "@/components/ui/select"
// import { Course } from "./types/table";

// const formSchema = z.object({
//     title: z.string(),
//     price: z.number(),
//     status: z.string().optional(),
//     id: z.string()
// });

// interface MyFormProps {
//     onSubmit: (data: Course) => void;
//     initialData?: Course | null;
// }

// export default function MyForm({ onSubmit, initialData }: MyFormProps) {

//     const form = useForm<z.infer<typeof formSchema>>({
//         resolver: zodResolver(formSchema),

//     })
//     function handleSubmit(values: z.infer<typeof formSchema>) {
//         try {
//             onSubmit(values as Course)
//             form.reset()
//             toast.success("User data submitted successfully!")
//         } catch (error) {
//             console.error("Form submission error", error)
//             toast.error("Failed to submit the form. Please try again.")
//         }
//     }

//     return (
//         <Form {...form}>
//             <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8 max-w-3xl mx-auto py-10">

//                 <div className="grid grid-cols-12 gap-4">

//                     <div className="col-span-6">

//                         <FormField
//                             control={form.control}
//                             name="title"
//                             render={({ field }) => (
//                                 <FormItem>
//                                     <FormLabel>Title</FormLabel>
//                                     <FormControl>
//                                         <Input
//                                             placeholder="shadcn"

//                                             type="text"
//                                             {...field} />
//                                     </FormControl>
//                                     <FormDescription>This is your public display name.</FormDescription>
//                                     <FormMessage />
//                                 </FormItem>
//                             )}
//                         />
//                     </div>

//                     <div className="col-span-6">

//                         <FormField
//                             control={form.control}
//                             name="price"
//                             render={({ field }) => (
//                                 <FormItem>
//                                     <FormLabel>Price</FormLabel>
//                                     <FormControl>
//                                         <Input
//                                             placeholder="shadcn"

//                                             type="number"
//                                             {...field} />
//                                     </FormControl>
//                                     <FormDescription>This is your public display name.</FormDescription>
//                                     <FormMessage />
//                                 </FormItem>
//                             )}
//                         />
//                     </div>

//                 </div>

//                 <div className="grid grid-cols-12 gap-4">

//                     <div className="col-span-6">

//                         <FormField
//                             control={form.control}
//                             name="status"
//                             render={({ field }) => (
//                                 <FormItem>
//                                     <FormLabel>Status</FormLabel>
//                                     <Select onValueChange={field.onChange} defaultValue={field.value}>
//                                         <FormControl>
//                                             <SelectTrigger>
//                                                 <SelectValue placeholder="Select a verified email to display" />
//                                             </SelectTrigger>
//                                         </FormControl>
//                                         <SelectContent>
//                                             <SelectItem value="m@example.com">m@example.com</SelectItem>
//                                             <SelectItem value="m@google.com">m@google.com</SelectItem>
//                                             <SelectItem value="m@support.com">m@support.com</SelectItem>
//                                         </SelectContent>
//                                     </Select>
//                                     <FormDescription>You can manage email addresses in your email settings.</FormDescription>
//                                     <FormMessage />
//                                 </FormItem>
//                             )}
//                         />
//                     </div>

//                     <div className="col-span-6">

//                         <FormField
//                             control={form.control}
//                             name="id"
//                             render={({ field }) => (
//                                 <FormItem>
//                                     <FormLabel>ID</FormLabel>
//                                     <FormControl>
//                                         <Input
//                                             placeholder="shadcn"

//                                             type="string"
//                                             {...field} />
//                                     </FormControl>
//                                     <FormDescription>This is your public display name.</FormDescription>
//                                     <FormMessage />
//                                 </FormItem>
//                             )}
//                         />
//                     </div>

//                 </div>
//                 <Button type="submit">{initialData ? "Update" : "Create"}</Button>
//             </form>
//         </Form>
//     )
// }