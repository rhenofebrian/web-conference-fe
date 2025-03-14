import * as React from "react"
import { Circle, Home } from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
} from "@/components/ui/sidebar"
import useAuthUser from "react-auth-kit/hooks/useAuthUser"
import type { User } from "@/types/auth"
import { Logo } from "@/components/ui/logo"

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: Home,
    },
    {
      title: "ICODSA",
      url: "#",
      icon: Circle,
      items: [
        {
          title: "LoA",
          url: "/icodsa/loa",
        },
        {
          title: "Invoice",
          url: "/icodsa/invoice",
        },
        {
          title: "Receipt",
          url: "/icodsa/receipt",
        },
      ],
    },
    {
      title: "ICICYTA",
      url: "#",
      icon: Circle,
      items: [
        {
          title: "LoA",
          url: "/icicyta/loa",
        },
        {
          title: "Invoice",
          url: "/icicyta/invoice",
        },
        {
          title: "Receipt",
          url: "/icicyta/receipt",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const auth = useAuthUser<User>()

  return (
    <Sidebar variant='inset' collapsible='icon' {...props}>
      <SidebarContent>
        <div className='px-4 py-4'>
          <Logo className='mx-auto' />
        </div>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={auth!} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
