import { useState } from "react"
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  flexRender,
  ColumnDef,
  SortingState,
  ColumnFiltersState,
} from "@tanstack/react-table"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { protectedRoutes } from "@/api"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Plus, Printer, FileText } from "lucide-react"
import { LoaDialog } from "./loa-dialog"
import { PrintDialog } from "./print-dialog"
import toast from "react-hot-toast"

export type Loa = {
  id: string
  paperId: string
  authorName: string
  time: string
  conferenceTitle: string
  placeAndDate: string
  status: "accepted" | "rejected"
  signature: string
  department: string
}

export function LoaTable() {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [currentLoa, setCurrentLoa] = useState<Loa | null>(null)
  const [dialogMode, setDialogMode] = useState<"create" | "edit" | "view">(
    "create"
  )
  const [isPrintDialogOpen, setIsPrintDialogOpen] = useState(false)
  const [currentPrintLoa, setCurrentPrintLoa] = useState<Loa | null>(null)
  const [printMode, setPrintMode] = useState<"single" | "all">("all")

  const queryClient = useQueryClient()

  // Fetch LoAs
  const { data: loas = [], isLoading } = useQuery<Loa[]>({
    queryKey: ["icicyta-loas"],
    queryFn: async () => {
      const response = await axios.get(protectedRoutes.loas)
      return response.data
    },
  })

  // Delete mutation
  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      await axios.delete(`${protectedRoutes.loas}/${id}`)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["icicyta-loas"] })
      toast.success("LoA deleted successfully")
    },
    onError: () => {
      toast.error("Failed to delete LoA")
    },
  })

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this LoA?")) {
      deleteMutation.mutate(id)
    }
  }

  const handleEdit = (loa: Loa) => {
    setCurrentLoa(loa)
    setDialogMode("edit")
    setIsDialogOpen(true)
  }

  const handleView = (loa: Loa) => {
    setCurrentLoa(loa)
    setDialogMode("view")
    setIsDialogOpen(true)
  }

  const handleCreate = () => {
    setCurrentLoa(null)
    setDialogMode("create")
    setIsDialogOpen(true)
  }

  const handlePrint = () => {
    setPrintMode("all")
    setCurrentPrintLoa(null)
    setIsPrintDialogOpen(true)
  }

  const handlePrintSingle = (loa: Loa) => {
    setPrintMode("single")
    setCurrentPrintLoa(loa)
    setIsPrintDialogOpen(true)
  }

  const columns: ColumnDef<Loa>[] = [
    {
      accessorKey: "paperId",
      header: "Paper ID",
    },
    {
      accessorKey: "authorName",
      header: "Author Name",
    },
    {
      accessorKey: "conferenceTitle",
      header: "Conference Title",
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const status = row.getValue("status") as string
        return (
          <div
            className={`px-2 py-1 rounded-full text-xs font-medium inline-block ${
              status === "accepted"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {status}
          </div>
        )
      },
    },
    {
      accessorKey: "placeAndDate",
      header: "Place & Date",
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => {
        const loa = row.original

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='ghost' className='h-8 w-8 p-0'>
                <span className='sr-only'>Open menu</span>
                <MoreHorizontal className='h-4 w-4' />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem onClick={() => handleView(loa)}>
                View
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleEdit(loa)}>
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handlePrintSingle(loa)}>
                <FileText className='mr-2 h-4 w-4' />
                Print PDF
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => handleDelete(loa.id)}
                className='text-red-600'
              >
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
    },
  ]

  const table = useReactTable({
    data: loas,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    state: {
      sorting,
      columnFilters,
    },
  })

  return (
    <div>
      <div className='flex items-center justify-between py-4'>
        <Input
          placeholder='Filter by author name...'
          value={
            (table.getColumn("authorName")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("authorName")?.setFilterValue(event.target.value)
          }
          className='max-w-sm'
        />
        <div className='flex gap-2'>
          {loas.length ? (
            <Button variant='outline' onClick={handlePrint}>
              <Printer className='mr-2 h-4 w-4' />
              Print All
            </Button>
          ) : null}
          <Button onClick={handleCreate}>
            <Plus className='mr-2 h-4 w-4' /> Add New LoA
          </Button>
        </div>
      </div>
      <div className='rounded-md border'>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className='h-24 text-center'
                >
                  Loading...
                </TableCell>
              </TableRow>
            ) : table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
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
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className='h-24 text-center'
                >
                  No LoAs found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className='flex items-center justify-end space-x-2 py-4'>
        <Button
          variant='outline'
          size='sm'
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant='outline'
          size='sm'
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>

      <LoaDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        mode={dialogMode}
        loa={currentLoa}
      />

      <PrintDialog
        open={isPrintDialogOpen}
        onOpenChange={setIsPrintDialogOpen}
        data={
          printMode === "single" && currentPrintLoa ? currentPrintLoa : loas
        }
        title={printMode === "single" ? "Print LoA" : "Print All LoAs"}
        description={
          printMode === "single"
            ? "Preview and print this letter of acceptance"
            : "Preview and print all letters of acceptance"
        }
        singleMode={printMode === "single"}
      />
    </div>
  )
}
