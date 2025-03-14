import NotFound from "@/components/not-found"
import { createFileRoute, Outlet, redirect } from "@tanstack/react-router"

export const Route = createFileRoute("/_auth")({
  beforeLoad: ({ context }) => {
    if (context?.auth) {
      throw redirect({
        to: "/",
      })
    }
  },
  component: AuthLayout,
  notFoundComponent: NotFound,
})

function AuthLayout() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <Outlet />
    </div>
  )
}
