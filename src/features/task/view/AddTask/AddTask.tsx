'use client'
import {PlusIcon} from "@/common/icons";

import {useDisclosure} from "@chakra-ui/react";

import {CustomModal} from "@/lib/atom/Modal/Modal";
import {AddTaskForm} from "@/features/task/view/AddTask/AddTaskForm";

export const AddTask = () => {
    const {isOpen, onOpen, onClose} = useDisclosure()


    return (
        <>
            <button onClick={onOpen} className='add_task_btn'><PlusIcon/></button>
            <CustomModal title={'Create Task'} onClose={onClose} isOpen={isOpen}>
                <AddTaskForm defaultValue={{title: '', categoryId: '', description: '', status: ''}}/>
            </CustomModal>

        </>
    )
}