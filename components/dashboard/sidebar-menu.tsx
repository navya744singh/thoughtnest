import Link from "next/link";
import { Button } from "../ui/button";


export default function SidebarMenu() {
    return (
        <nav>
            <div className="px-8 py-12">

                <h2 className="text-xl font-bold mb-6">Dashboard</h2>

                <div className="flex flex-col">
                    <Link href={"/admin-dashboard"}>
                        <Button className="justify-start w-full cursor-pointer" variant={"ghost"}>All Blogs</Button>
                    </Link>
                    <Link href="/admin-dashboard/create">
                        <Button className="justify-start w-full cursor-pointer" variant={"ghost"}>Create Blog</Button>
                    </Link>

                </div>
            </div>
        </nav>
    );
}