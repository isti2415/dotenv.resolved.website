import React from 'react'
import {
    TooltipProvider as Provider
  } from "@/components/ui/tooltip"

function TooltipProvider({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
  return (
    <Provider>
        {children}
    </Provider>
  )
}

export default TooltipProvider