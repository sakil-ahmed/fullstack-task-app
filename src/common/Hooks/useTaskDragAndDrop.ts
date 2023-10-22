import {DragItem, TaskModel} from "@/lib/utils/models";
import {useDrag} from "react-dnd";
import {ItemType} from "@/lib/utils/enmus";
import {useRef} from "react";
import {Simulate} from "react-dom/test-utils";
import drag = Simulate.drag;

export function useTaskDragAndDrop<T extends HTMLElement>({task, index}: { task: TaskModel; index: number }) {

  const ref = useRef<T>(null)

  const [{isDragging}, Drag] = useDrag<DragItem, void, { isDragging: boolean }>({
    type: ItemType.TASK,
    item: {from: task.column, id: task.id, index},
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    })


  })
  // @ts-ignore
  drag(ref);
  return {
    ref,
    isDragging
  }
}