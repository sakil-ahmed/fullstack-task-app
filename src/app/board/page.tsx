import {AppLayout} from "@/app/AppLayout/AppLayout";
import {Sidebar} from "@/app/AppLayout/Sidebar/Sidebar";
import {LeftSideBar} from "@/app/AppLayout/Sidebar/SidebarLayout";
import {HeadingH1} from "@/components/heading/Heading";
import {TopBar} from "@/app/AppLayout/TopBar/TopBar";
import {DownArrowIcon} from "@/common/icons";
import {Button} from "@/components/Button/Button";


export default function Page() {
  return (
    <>
      <AppLayout>
        <LeftSideBar>
          <Sidebar/>
        </LeftSideBar>
        <div className='root_view'>
          <TopBar/>
          <div className='root_view_top'>
            <HeadingH1>Board</HeadingH1>
            <button>This Week<DownArrowIcon/></button>

          </div>
          <Button isLoading={true} text={'Button'}/>
        </div>
      </AppLayout>

    </>
  )
}