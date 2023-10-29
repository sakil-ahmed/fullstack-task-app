import {ThreeDotIcon} from "@/common/icons";
import {useTaskDragAndDrop} from "@/common/Hooks/useTaskDragAndDrop";
import {TaskModel} from "@/lib/utils/models";

export const Task = ({task, index}: { task: TaskModel, index: number }) => {


  return (
    <div className='task' >
      <div className='task_header'>
        <div style={{display: "flex", alignItems: "stretch", gap: "5px"}}>
          <div className='dot'></div>
          <p>
            DESIGN SYSTEM
          </p>
        </div>
        <span><ThreeDotIcon/></span>
      </div>
      <div className='task_body'>
        <h5 className='task_title'>Hero section</h5>
        <p className='task_description'>Create a design system for a hero section in 2 different variants. Create a
          simple presentation with these
          components.</p>
      </div>
    </div>
  )
}