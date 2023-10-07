
import {AppLayout} from "@/app/AppLayout/AppLayout";
import {Sidebar} from "@/app/AppLayout/Sidebar/Sidebar";
import {LeftSideBar} from "@/app/AppLayout/Sidebar/SidebarLayout";
import {HeadingH1} from "@/components/heading/Heading";
import {TopBar} from "@/app/AppLayout/TopBar/TopBar";

export default function Page() {
  return (
    <>
      <AppLayout>
        <LeftSideBar>
          <Sidebar/>
        </LeftSideBar>
        <div className='root_view'>
          <TopBar/>
          <HeadingH1>
            Analytics
          </HeadingH1>
        </div>
      </AppLayout>

    </>
  )
}