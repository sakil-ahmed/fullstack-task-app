
import React from "react";
import 'nprogress/nprogress.css';



export const AppLayout = ({children}: { children: React.ReactNode }) => {

  return (
    <div>

      <div className='contentWrapper' >{children}</div>

    </div>
  )
}