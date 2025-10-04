"use client"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { LayoutDashboard } from "lucide-react";
import SidebarMenu from "./sidebar-menu";
import { useState } from "react";

export default function SideBar(){

    const [isOpen, setIsOpen] = useState(false);
    return (
        <aside>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                    <Button className="cursor-pointer md:hidden" variant={"outline"}><LayoutDashboard/></Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[250px]">
                    <SidebarMenu/>
                </SheetContent>
            </Sheet>
        </aside>
    )
}