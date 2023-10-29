'use client'
import {PlusIcon} from "@/common/icons";
import {useExposure} from "@/common/Hooks/UseDisclosure";
import {useOutsideClick} from "@/common/Hooks/UseOutsideClick";
import {useRef} from "react";

export const AddTask = () => {
  const {isOpen, onClose, onOpen} = useExposure()
  const ref = useRef<HTMLElement | any>(null)
  useOutsideClick({
    ref: ref,
    handler: onClose
  })
  return (
    <>
      <button onClick={onOpen} className='add_task_btn'><PlusIcon/></button>
      <form ref={ref} style={{display: `${isOpen ? 'block' : 'none'}`}} className='add_task_form'>
        <h3 className='add_task_form_title'>Add Task</h3>
        <button onClick={onClose} type='button' className='popup_close_btn'><PlusIcon/></button>
      </form>
    </>
  )
}