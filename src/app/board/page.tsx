'use client'
import {AppLayout} from "@/app/AppLayout/AppLayout";
import {Sidebar} from "@/app/AppLayout/Sidebar/Sidebar";
import {LeftSideBar} from "@/app/AppLayout/Sidebar/SidebarLayout";
import {HeadingH1} from "@/components/heading/Heading";
import {TopBar} from "@/app/AppLayout/TopBar/TopBar";
import {DownArrowIcon} from "@/common/icons";
import {BoardItem} from "@/features/task/view/Board/BoardItem";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";


export default function Page() {
  const array = [
    {
      title: "To do",
      task: [
        {column:'To do',id:12},{column:'To do',id:13}
      ]
    }, {
      title: "In progress",
      task: [{column:'In progress',id:111}]
    },
    {
      title: "Done",
      task: [{column:'In progress',id:222},{column:'In progress',id:333},{column:'In progress',id:444}]
    },
  ]
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
          {/*  */}

          <div className='board_container'>

            {array.map(({title , task}) => {
              return <BoardItem key={title} title={title} task={task}/>
            })}

          </div>

        </div>
      </AppLayout>

    </>
  )
}