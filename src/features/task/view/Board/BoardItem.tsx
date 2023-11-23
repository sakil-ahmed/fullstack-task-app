'use client'
import {Task} from "@/features/task/view/Task/Task";
import {AddTask} from "@/features/task/view/AddTask/AddTask";
import {useTaskStore} from "@/features/task/logic/task.store";
import {FC} from "react";



type props = {
    item:any
}

export const BoardItem: FC<props> = ({item}) => {

    const {tasks} = useTaskStore()

    const filteredTasks = tasks?.filter((task: any) => task.status === item.status)


    return (
        <div className='board_item'>
            {/*Board header*/}
            <div className='board_item_header'>
                <h5 className='board_item_title'>{item.title}</h5>
                <div className='board_item_header_cta'>
                    <AddTask/>
                </div>
            </div>
            {/* Board Body */}
            <div className='board_item_body'>
                {filteredTasks.map((task: any, i: any) => {
                    return <Task task={task} key={i}/>
                })}

            </div>
        </div>
    )
}