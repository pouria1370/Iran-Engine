import { cn } from '@/utilities/lib/cn'
import React, { ButtonHTMLAttributes, ComponentPropsWithoutRef, MouseEvent, ReactNode } from 'react'
interface IProps extends React.ComponentPropsWithoutRef<"button">{
    leftIcon?:ReactNode,
    rightIcon?:ReactNode,
    text?:string,
    buttonWrapperCn?:string
    handler?:(event:MouseEvent<HTMLButtonElement>) => void
}
const IeButton = ({text,handler,leftIcon,buttonWrapperCn,rightIcon}:IProps) => {
  return (
    <div className={cn('cursor-pointer flex relative text-display-sm font-semibold bg-iePrimary items-center  text-white flex-row gap-1 rounded-[0.25rem] py-[0.4rem] px-[0.75rem]',buttonWrapperCn)}>
        {leftIcon&&leftIcon}
        <button onClick={handler}>{text}</button>
        {rightIcon && rightIcon}
    </div>
  )
}

export default IeButton