import React from 'react'
import TeamsIcon from "@icon/Teams.svg"
import RightCaretIcon from "@icon/RightCaret.svg"
import LeftCaretIcon from "@icon/LeftCaret.svg"
import SearchIcon from "@icon/Search.svg"
import ChromeCloseIcon from "@icon/ChromeClose.svg"
import ChromeMaximizeIcon from "@icon/ChromeMaximize.svg"
import ChromeMinimizeIcon from "@icon/ChromeMinimize.svg"
import MoreHorizontalIcon from "@icon/MoreHorizontal.svg"
import AvatarIcon from "@icon/Avatar.svg"
const Navbar = () => {
  return (
    <div className='flex items-center justify-between flex-row'>
      <div className='hidden md:block'>
        <TeamsIcon className=" ml-[1.37rem] size-6"/>
      </div>
      <div className='hidden md:flex flex-row h-[2rem] gap-4 items-center'>
        <div className='flex flex-row h-full w-[4rem] justify-around items-center'>
          <LeftCaretIcon className="size-4"/>
          <RightCaretIcon  className="size-4"/>
        </div>
        <div className='flex items-center bg-white h-full text-sm rounded-[0.25rem] pl-2 flex-row'>
          <SearchIcon className="size-[0.875rem]"/>
          <input placeholder='Search' className='rounded-l-[0.25rem]  pl-2 px-[0.625rem] w-[29.25rem] focus-visible:outline-none'/>
        </div>
      </div>
      <div className='w-full md:w-fit flex flex-row justify-between items-center'> 
        <div className='size-8 hidden md:flex items-center justify-center'>
          <MoreHorizontalIcon className="size-5"/>
        </div> 
        <div className='size-8 ml-3 md:ml-0 flex items-center justify-center'>
          <AvatarIcon />
        </div>
        <div className='flex flex-row'>
        <div className='size-12  flex items-center justify-center'>
        <ChromeMinimizeIcon className="size-[10px]"/>
        </div>
        <div className='size-12  flex items-center justify-center'>
        <ChromeMaximizeIcon className="size-[10px]"/>
      </div>
        <div className='size-12  flex items-center justify-center'>
        <ChromeCloseIcon className="size-[10px]"/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar