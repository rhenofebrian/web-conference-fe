import { useQueries } from "@tanstack/react-query"
import axios from "axios"
import { protectedRoutes } from "@/api"
import { Link } from "@tanstack/react-router"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle, Clock, AlertCircle } from "lucide-react"

// Define types for our history items based on the data structure
type LoaHistoryItem = {
  id: string
  paperId: string
  authorName: string
  placeAndDate: string
  status: string
}

type InvoiceHistoryItem = {
  id: string
  invoiceNumber: string
  authorName: string
  paperId: string
  paperTitle: string
  placeAndDate: string
  status: string
}

type ReceiptHistoryItem = {
  id: string
  invoiceNumber: string
  receivedFrom: string
  amount: number
  paymentDate: string
  placeAndDate: string
  status: string
}

export function Dashboard() {
  // Fetch data for all history sections using useQueries
  const results = useQueries({
    queries: [
      {
        queryKey: ["icodsa-loa-history"],
        queryFn: async () => {
          const response = await axios.get(protectedRoutes.loas)
          return response.data.slice(0, 10).map((item: any) => ({
            id: item.id,
            paperId: item.paperId,
            authorName: item.authorName,
            placeAndDate: item.placeAndDate,
            status: item.status,
          }))
        },
      },
      {
        queryKey: ["icodsa-invoice-history"],
        queryFn: async () => {
          const response = await axios.get(protectedRoutes.invoices)
          return response.data.slice(0, 10).map((item: any) => ({
            id: item.id,
            invoiceNumber: item.invoiceNumber,
            authorName: item.authorName,
            paperId: item.paperId,
            paperTitle: item.paperTitle,
            placeAndDate: item.placeAndDate,
            status: item.status || "pending",
          }))
        },
      },
      {
        queryKey: ["icodsa-receipt-history"],
        queryFn: async () => {
          const response = await axios.get(protectedRoutes.receipts)
          return response.data.slice(0, 10).map((item: any) => ({
            id: item.id,
            invoiceNumber: item.invoiceNumber,
            receivedFrom: item.receivedFrom,
            amount: item.amount,
            paymentDate: item.paymentDate,
            placeAndDate: item.placeAndDate,
            status: item.status || "pending",
          }))
        },
      },
      {
        queryKey: ["icicyta-loa-history"],
        queryFn: async () => {
          const response = await axios.get(protectedRoutes.loas)
          return response.data
            .filter((item: any) => item.conferenceType === "ICIKTA")
            .slice(0, 10)
            .map((item: any) => ({
              id: item.id,
              paperId: item.paperId,
              authorName: item.authorName,
              placeAndDate: item.placeAndDate,
              status: item.status,
            }))
        },
      },
      {
        queryKey: ["icicyta-invoice-history"],
        queryFn: async () => {
          const response = await axios.get(protectedRoutes.invoices)
          return response.data
            .filter((item: any) => item.conferenceType === "ICIKTA")
            .slice(0, 10)
            .map((item: any) => ({
              id: item.id,
              invoiceNumber: item.invoiceNumber,
              authorName: item.authorName,
              paperId: item.paperId,
              paperTitle: item.paperTitle,
              placeAndDate: item.placeAndDate,
              status: item.status || "pending",
            }))
        },
      },
      {
        queryKey: ["icicyta-receipt-history"],
        queryFn: async () => {
          const response = await axios.get(protectedRoutes.receipts)
          return response.data
            .filter((item: any) => item.conferenceTitle === "ICIKTA")
            .slice(0, 10)
            .map((item: any) => ({
              id: item.id,
              invoiceNumber: item.invoiceNumber,
              receivedFrom: item.receivedFrom,
              amount: item.amount,
              paymentDate: item.paymentDate,
              placeAndDate: item.placeAndDate,
              status: item.status || "pending",
            }))
        },
      },
    ],
  })

  const [
    icodsaLoaHistory,
    icodsaInvoiceHistory,
    icodsaReceiptHistory,
    icicytaLoaHistory,
    icicytaInvoiceHistory,
    icicytaReceiptHistory,
  ] = results

  // Helper function to render status icon
  const renderStatusIcon = (status: string) => {
    switch (status?.toLowerCase()) {
      case "accepted":
      case "paid":
      case "uploaded":
        return <CheckCircle className='h-5 w-5 text-green-500' />
      case "rejected":
      case "not available":
        return <XCircle className='h-5 w-5 text-red-500' />
      case "pending":
        return <Clock className='h-5 w-5 text-yellow-500' />
      case "late":
        return <AlertCircle className='h-5 w-5 text-orange-500' />
      default:
        return <Clock className='h-5 w-5 text-gray-500' />
    }
  }

  // Helper function to render LoA history card
  const renderLoaHistoryCard = (
    title: string,
    data: LoaHistoryItem[],
    isLoading: boolean,
    error: any,
    viewMoreLink: string
  ) => {
    return (
      <Card className='w-full'>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className='text-center py-4'>Loading...</div>
          ) : error ? (
            <div className='text-center py-4 text-red-500'>
              Error loading data
            </div>
          ) : (
            <ul className='space-y-2'>
              {data.length ? (
                data.map((item) => (
                  <li
                    key={item.id}
                    className='flex items-center justify-between py-2'
                  >
                    <span>
                      {item.paperId} - {item.authorName} - {item.placeAndDate}
                    </span>
                    <div className='flex items-center'>
                      {renderStatusIcon(item.status)}
                      <span
                        className={`ml-2 ${
                          item.status?.toLowerCase() === "accepted"
                            ? "text-green-600"
                            : item.status?.toLowerCase() === "rejected"
                              ? "text-red-600"
                              : "text-yellow-600"
                        }`}
                      >
                        {item.status?.charAt(0).toUpperCase() +
                          item.status?.slice(1)}
                      </span>
                    </div>
                  </li>
                ))
              ) : (
                <p className='text-center text-muted-foreground'>
                  No history yet
                </p>
              )}
            </ul>
          )}
        </CardContent>
        <CardFooter className='flex justify-center'>
          <Button variant='outline' asChild>
            <Link to={viewMoreLink}>View more</Link>
          </Button>
        </CardFooter>
      </Card>
    )
  }

  // Helper function to render Invoice history card
  const renderInvoiceHistoryCard = (
    title: string,
    data: InvoiceHistoryItem[],
    isLoading: boolean,
    error: any,
    viewMoreLink: string
  ) => {
    return (
      <Card className='w-full'>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className='text-center py-4'>Loading...</div>
          ) : error ? (
            <div className='text-center py-4 text-red-500'>
              Error loading data
            </div>
          ) : (
            <ul className='space-y-2'>
              {data.length ? (
                data.map((item) => (
                  <li
                    key={item.id}
                    className='flex items-center justify-between py-2'
                  >
                    <span>
                      {item.invoiceNumber} - {item.authorName} -{" "}
                      {item.placeAndDate}
                    </span>
                    <div className='flex items-center'>
                      {renderStatusIcon(item.status)}
                      <span
                        className={`ml-2 ${
                          item.status?.toLowerCase() === "paid"
                            ? "text-green-600"
                            : item.status?.toLowerCase() === "not available"
                              ? "text-red-600"
                              : "text-yellow-600"
                        }`}
                      >
                        {item.status?.charAt(0).toUpperCase() +
                          item.status?.slice(1)}
                      </span>
                    </div>
                  </li>
                ))
              ) : (
                <p className='text-center text-muted-foreground'>
                  No history yet
                </p>
              )}
            </ul>
          )}
        </CardContent>
        <CardFooter className='flex justify-center'>
          <Button variant='outline' asChild>
            <Link to={viewMoreLink}>View more</Link>
          </Button>
        </CardFooter>
      </Card>
    )
  }

  // Helper function to render Receipt history card
  const renderReceiptHistoryCard = (
    title: string,
    data: ReceiptHistoryItem[],
    isLoading: boolean,
    error: any,
    viewMoreLink: string
  ) => {
    return (
      <Card className='w-full'>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className='text-center py-4'>Loading...</div>
          ) : error ? (
            <div className='text-center py-4 text-red-500'>
              Error loading data
            </div>
          ) : (
            <ul className='space-y-2'>
              {data.length ? (
                data.map((item) => (
                  <li
                    key={item.id}
                    className='flex items-center justify-between py-2'
                  >
                    <span>
                      {item.invoiceNumber} - {item.receivedFrom} -{" "}
                      {item.paymentDate}
                    </span>
                    <div className='flex items-center'>
                      {renderStatusIcon(item.status)}
                      <span
                        className={`ml-2 ${
                          item.status?.toLowerCase() === "uploaded"
                            ? "text-green-600"
                            : item.status?.toLowerCase() === "not available"
                              ? "text-red-600"
                              : item.status?.toLowerCase() === "pending"
                                ? "text-yellow-600"
                                : item.status?.toLowerCase() === "late"
                                  ? "text-orange-600"
                                  : "text-gray-600"
                        }`}
                      >
                        {item.status?.charAt(0).toUpperCase() +
                          item.status?.slice(1)}
                      </span>
                    </div>
                  </li>
                ))
              ) : (
                <p className='text-center text-muted-foreground'>
                  No history yet
                </p>
              )}
            </ul>
          )}
        </CardContent>
        <CardFooter className='flex justify-center'>
          <Button variant='outline' asChild>
            <Link to={viewMoreLink}>View more</Link>
          </Button>
        </CardFooter>
      </Card>
    )
  }

  return (
    <div className='container mx-auto py-10 px-5'>
      <h1 className='text-3xl font-bold mb-2'>Welcome</h1>
      <p className='text-gray-600 mb-8'>to Dashboard</p>

      <div className='mb-10'>
        <h2 className='text-2xl font-bold mb-6'>ICODSA</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {renderLoaHistoryCard(
            "History LoA",
            icodsaLoaHistory.data,
            icodsaLoaHistory.isLoading,
            icodsaLoaHistory.error,
            "/icodsa/loa"
          )}
          {renderInvoiceHistoryCard(
            "History Invoice",
            icodsaInvoiceHistory.data,
            icodsaInvoiceHistory.isLoading,
            icodsaInvoiceHistory.error,
            "/icodsa/invoice"
          )}
          {renderReceiptHistoryCard(
            "History Receipt",
            icodsaReceiptHistory.data,
            icodsaReceiptHistory.isLoading,
            icodsaReceiptHistory.error,
            "/icodsa/receipt"
          )}
        </div>
      </div>

      <div>
        <h2 className='text-2xl font-bold mb-6'>ICICYTA</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {renderLoaHistoryCard(
            "History LoA",
            icicytaLoaHistory.data,
            icicytaLoaHistory.isLoading,
            icicytaLoaHistory.error,
            "/icicyta/loa"
          )}
          {renderInvoiceHistoryCard(
            "History Invoice",
            icicytaInvoiceHistory.data,
            icicytaInvoiceHistory.isLoading,
            icicytaInvoiceHistory.error,
            "/icicyta/invoice"
          )}
          {renderReceiptHistoryCard(
            "History Receipt",
            icicytaReceiptHistory.data,
            icicytaReceiptHistory.isLoading,
            icicytaReceiptHistory.error,
            "/icicyta/receipt"
          )}
        </div>
      </div>
    </div>
  )
}
