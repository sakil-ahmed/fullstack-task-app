'use client'
import {TaskMenu} from "@/features/task/view/Task/TaskMenu/TaskMenu";
import {FC} from "react";
import {Box} from "@chakra-ui/react";

interface Task {
    id: string
    title: string
    description: string
    status: string
    categoryId: string
    createdBy: string

}

interface props {
    task: Task
}

export const Task: FC<props> = ({task}) => {

    console.log(task)

    return (
        <div className='task'>
            <div className='task_header'>
                <div style={{display: "flex", alignItems: "stretch", gap: "5px"}}>
                    <div className='dot'></div>
                    <p>
                        DESIGN SYSTEM
                    </p>
                </div>
                <TaskMenu/>
            </div>
            <div className='task_body'>
                <h5 className='task_title'>{task.title}</h5>
                <p className='task_description'>{task.description}</p>
            </div>
        </div>
    )
}