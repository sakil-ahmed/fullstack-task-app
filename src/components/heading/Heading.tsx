import React from "react";

export const HeadingH1 = ({children}: { children: React.ReactNode | string }) => {
  return <h1 className='heading_h1'>{children}</h1>
}
export const HeadingH2 = ({children}: { children: React.ReactNode | string }) => {
  return <h2 className='heading_h2'>{children}</h2>
}
