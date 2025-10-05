// "use client";

import { Card } from "../ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Button } from "../ui/button";

export default function BlogTableSkeleton() {
  const rows = Array.from({ length: 10 });
  const headers = Array.from({ length: 5 });

  return (
    <>
      <Card className="overflow-hidden border border-orange-200 dark:border-gray-700 mt-6">
        <div className="overflow-x-auto">
          <Table className="w-full border-collapse min-w-[700px]">
            {/* Skeleton Header with proper height */}
            <TableHeader className="bg-orange-100/50 dark:bg-gray-800/50">
              <TableRow>
                {headers.map((_, i) => (
                  <TableHead key={i} className="p-4.5">
                    <div className="h-4 w-[90px] bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse mx-auto"></div>
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>

            {/* Skeleton Rows (compact padding) */}
            <TableBody>
              {rows.map((_, i) => (
                <TableRow
                  key={i}
                  className="border-t border-orange-200/50 dark:border-gray-700/50 hover:bg-orange-50/40 dark:hover:bg-gray-800/40 transition-colors"
                >
                  {/* Title */}
                  <TableCell className="p-3">
                    <div className="h-4 w-[210px] bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
                  </TableCell>

                  {/* Category */}
                  <TableCell className="p-3">
                    <div className="h-5 w-[85px] bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
                  </TableCell>

                  {/* Comments */}
                  <TableCell className="p-3 text-center">
                    <div className="h-4 w-[25px] mx-auto bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
                  </TableCell>

                  {/* Date */}
                  <TableCell className="p-3">
                    <div className="h-4 w-[75px] bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
                  </TableCell>

                  {/* Actions */}
                  <TableCell className="p-3 flex gap-2">
                    <div className="h-7 w-7 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
                    <div className="h-7 w-7 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>

      {/* Pagination Skeleton */}
      <div className="flex justify-center items-center mt-6 gap-2">
        <Button disabled variant={"outline"} size={"sm"} className="cursor-not-allowed">
          Prev
        </Button>

        <div className="h-4 w-[100px] bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>

        <Button disabled variant={"outline"} size={"sm"} className="cursor-not-allowed">
          Next
        </Button>
      </div>
    </>
  );
}
