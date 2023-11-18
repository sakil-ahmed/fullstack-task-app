import {Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/menu";
import {HStack, IconButton, Text, useDisclosure} from "@chakra-ui/react";
import {BsThreeDots} from "react-icons/bs";
import {FC} from "react";
import {CiEdit} from "react-icons/ci";
import {MdOutlineDeleteOutline} from "react-icons/md";
import {CustomModal} from "@/lib/atom/Modal/Modal";
import {AddTaskForm} from "@/features/task/view/AddTask/AddTaskForm";

interface Props {

}

export const TaskMenu: FC<Props> = () => {
    const {isOpen, onClose, onOpen} = useDisclosure()
    return (
        <>
            <Menu placement={'bottom-end'}>
                <MenuButton
                    cursor={'pointer'}
                    bg={'transparent'}
                    as={IconButton
                    }
                    h={'28px'}
                    aria-label='Options'
                    icon={<BsThreeDots/>}
                />
                <MenuList minW={'150px'}>
                    <MenuItem onClick={onOpen}>
                        <HStack>
                            <CiEdit/>
                            <Text as={'span'} fontSize={'13px'} fontWeight={'500'}>Edit</Text>
                        </HStack>
                    </MenuItem>
                    <MenuItem>
                        <HStack>
                            <MdOutlineDeleteOutline/>
                            <Text as={'span'} fontSize={'13px'} fontWeight={'500'}>Delete</Text>
                        </HStack>
                    </MenuItem>
                </MenuList>
            </Menu>
            <EditTask isOpen={isOpen} onClose={onClose}/>
        </>
    )
}

interface props {
    isOpen: boolean
    onClose: () => void

}

const EditTask: FC<props> = ({isOpen, onClose}) => {
    const defaultValue = {
        title: 'Hero section',
        categoryId: '',
        description: 'Create a design system for a hero section in 2 different variants. Create a simple presentation with these components.',
        status: ''
    }
    return (
        <>
            <CustomModal title={'Update Task'} isOpen={isOpen} onClose={onClose}>
                <AddTaskForm defaultValue={defaultValue}/>
            </CustomModal>

        </>
    )
}