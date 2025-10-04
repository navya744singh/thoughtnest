import SidebarMenu from "@/components/dashboard/sidebar-menu";
import React from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {

    return (
        <div className="flex">
            <div className="hidden md:block border-r border-border min-w-[250px] bg-background">
            <SidebarMenu/>
            </div>
            <div className="flex-1 overflow-x-auto p-4">
                {children}
            </div>
        </div>
    )
}


