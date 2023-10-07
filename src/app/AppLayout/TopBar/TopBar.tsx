'use client'
import {BellIcon, HelpIcon, SearchIcon} from "@/common/icons";
import {useAuthStore} from "@/features/auth/logic/auth.store";


export const TopBar = () => {
  const{user} =useAuthStore()
  return (
    <div className='topbar_root'>
      <div className='topbar_search_box'>
        <label><SearchIcon/></label>
        <input placeholder='Search'/>
      </div>
      <div className='topbar_right'>
        {/*<div>*/}
        {/*  <BellIcon/>*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*  <HelpIcon/>*/}
        {/*</div>*/}
        {/*<div className='avatar'>{user?.name.slice(0,2)}</div>*/}

      </div>
    </div>
  )
}