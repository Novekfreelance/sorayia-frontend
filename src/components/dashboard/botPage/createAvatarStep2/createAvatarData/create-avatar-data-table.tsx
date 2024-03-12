"use client";

import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: 5,
      },
    },
    enableMultiRowSelection: false,
  });
  return (
    <div className="min-h-[444px] flex flex-col justify-between">
      <div>
        {table.getRowModel().rows?.length ? (
          <Table>
            <TableBody className="w-full grid grid-cols-4 gap-1">
              {table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  onClick={row.getToggleSelectedHandler()}
                  className={`hover:bg-gray-100 !border overflow-hidden ${
                    row.getIsSelected()
                      ? "bg-primary-50 !border-primary-300"
                      : "bg-gray-100 border-0"
                  }`}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <div className="h-full min-h-[444px] flex items-center justify-center">
            <h2 className="text-3xl text-primary">
              You have no avatar, lets create one !
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}
