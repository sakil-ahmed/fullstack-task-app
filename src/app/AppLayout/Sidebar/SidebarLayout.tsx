import React from "react";

export const LeftSideBar = ({children}: { children: React.ReactNode }) => {
  return (
    <div className="left_sidebar">
      <div className='left_sidebar_fixed'>{children}</div>
    </div>
  )
}