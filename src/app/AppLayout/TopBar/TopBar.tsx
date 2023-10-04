import Image from "next/image";
import {BellIcon, HelpIcon, SearchIcon} from "@/common/icons";


export const TopBar = () => {
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
        <Image className='avatar' src={'/avatar.png'} alt={''} width={32} height={32}/>

      </div>
    </div>
  )
}