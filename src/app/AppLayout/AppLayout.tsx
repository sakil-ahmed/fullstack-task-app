import React from "react";
import {Sidebar} from "@/app/AppLayout/Sidebar/Sidebar";

export const AppLayout = ({children}: { children: React.ReactNode }) => {
  return (
    <div>

      <div className='contentWrapper' >{children}</div>

    </div>
  )
}