import { Search } from "lucide-react";


export default function NoSearchResult() {

    return (
        <div className="flex flex-col items-center justify-center px-8 py-4 text-center">
            <div className="rounded-full bg-muted p-4 mb-4">
                <Search className="size-8" />
            </div>
            <h3 className="font-bold text-2xl mb-2">No Result Found</h3>
            <p>We could not find any blog matching yur search. Try a different keyword or pharases.</p>
        </div>
    )
}