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
import {useMutation, useQueries, useQuery} from "@tanstack/react-query";
import {taskService} from "@/features/task/logic/task.service";


export default function Page() {
    const array = [
        {
            title: "To do",
            status: "todo",

        }, {
            title: "In progress",
            status: "in_progress",
        },
        {
            title: "Done",
            status: 'done'
        },
    ]
    const {data} = useQuery({
        queryKey: ['Tasks'],
        queryFn: () => taskService.getAllTasks(),

    })


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

                        {array.map((item) => {
                            return <BoardItem key={item.title} item={item} />
                        })}

                    </div>

                </div>
            </AppLayout>

        </>
    )
}