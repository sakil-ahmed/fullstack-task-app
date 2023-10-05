'use client'
import Image from "next/image";
import {AnalyticsIcon, BoardIcon, DashboardIcon, LogoutIcon, SettingIcon} from "@/common/icons";
import Link from "next/link";
import {useRouter , usePathname} from "next/navigation";
import {authService} from "@/features/auth/logic/auth.service";
import {Notify} from "@/lib/utils/Notify";

export const Sidebar = () => {

  const menu = [
    // {
    //   id: 1,
    //   name: "Dashboard",
    //   slug: "/dashboard",
    //   icon: <DashboardIcon/>,
    // },
    {
      id: 2,
      name: "Board",
      slug: "/board",
      icon: <BoardIcon/>,
    },
    // {
    //   id: 3,
    //   name: "Analytics",
    //   slug: "/analytics",
    //   icon: <AnalyticsIcon/>,
    // },
    {
      id: 4,
      name: "Settings",
      slug: "/settings",
      icon: <SettingIcon/>,
    }
  ]

  const path = usePathname()
  const router = useRouter()

  const logOut = ()=>{
    authService.clearSession()
    router.push('/auth/login', { scroll: false })
    Notify("Successfully logged out","success")
  }

  return (
    <div className='sidebar_root'>
      <div className='sidebar_top'>
        <div className='sidebar_logo'>
          <Image className='sidebar_logo_img' src={"/brand.png"} alt='logo' width={139} height={24} priority={true}/>
        </div>
        <div className='sidebar_menu_items'>
          {menu.map(({id, icon, name, slug}) => {

            const active = path===slug ? 'sidebar_menu_item_active':''
            return (
              <Link key={id + name} href={slug} className={`sidebar_menu_item ${active}`}>
                {icon}
                <span>{name}</span>
              </Link>
            )
          })}

        </div>

      </div>
      <button onClick={logOut} className='logout_btn'>
        <LogoutIcon/>
        <span>Log out</span>
      </button>
    </div>
  )
}