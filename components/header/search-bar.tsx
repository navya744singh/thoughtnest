"use client"
import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { useSearchParams } from "next/navigation";
import { handleSearch } from "@/action/server";
import { useEffect, useState } from "react";
import Form from "next/form";


export default function SearchBar() {
    const searchParams = useSearchParams();
    const [value, setValue] = useState("");

    useEffect(() => {
        setValue(searchParams.get("search") || "");
    }, [searchParams]);

    return (
        <Form action={handleSearch} className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground size-4" />
            <Input type="text" name="search" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Search blog..." className="pl-10 focus-visible:ring-1 w-full" />
        </Form>
    )
}