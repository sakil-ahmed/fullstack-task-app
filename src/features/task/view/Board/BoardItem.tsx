'use client'
import {PlusIcon, ThreeDotIcon} from "@/common/icons";
import {Task} from "@/features/task/view/Task/Task";
import {AddTask} from "@/features/task/view/AddTask/AddTask";

type props = {
  title: string
  task: any
}

export const BoardItem = ({title, task}: props) => {

  return (
    <div className='board_item'>
      {/*Board header*/}
      <div className='board_item_header'>
        <h5 className='board_item_title'>{title}</h5>
        <div className='board_item_header_cta'>
          <AddTask/>
        </div>
      </div>
      {/* Board Body */}
      <div className='board_item_body'>
        {task.map((task:any, i:any) => {
          return <Task task={task} index={i} key={i}/>
        })}

      </div>
    </div>
  )
}