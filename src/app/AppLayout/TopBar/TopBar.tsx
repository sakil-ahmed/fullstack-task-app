'use client'
import {BellIcon, HelpIcon, SearchIcon} from "@/common/icons";
import {useAuthStore} from "@/features/auth/logic/auth.store";
import {Avatar, Box} from "@chakra-ui/react";


export const TopBar = () => {
  const {user} = useAuthStore()

  return (
    <div className='topbar_root'>
      <div className='topbar_search_box'>
        <label><SearchIcon/></label>
        <input placeholder='Search'/>
      </div>
      <div className='topbar_right'>
        <Box cursor={'pointer'}>
          <BellIcon/>
        </Box>
          <Box cursor={'pointer'}>
          <HelpIcon/>
          </Box>
          <Avatar w={'32px'} h={'32px'} name={'Sakil'} src='https://bit.ly/dan-abramov' />
      </div>
    </div>
  )
}