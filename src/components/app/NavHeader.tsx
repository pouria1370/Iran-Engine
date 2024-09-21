import React from 'react'
import VanArsdelIcon from "@icon/VanArsdel.svg"
import Tab from '../pane/Tab'
import SearchIcon from "@icon/Search.svg"
import ExpandNewWindowIcon from "@icon/ExpandNewWindow.svg"
import MoreHorizontalIcon from "@icon/MoreHorizontal.svg"
import HamburgerIcon from "@icon/Hamburger.svg"
import DownCaretIcon from "@icon/DownCaret.svg"
import CircleIcon from "@icon/Circle.svg"
import LineIcon from "@icon/Line.svg"
import IeButton from '@/utilities/share/atom/IeButton'
import { useTranslations } from 'next-intl'
import { navTitles } from '@/data/client/component/app/NavDatas'
const NavHeader = () => {
  const t = useTranslations()
  return (
    <>
    <div className='h-[3.75rem] hidden md:flex flex-row items-center justify-between border-b-[1px] py-2 pl-5 pr-[1.86rem]'>
      <div className='flex flex-row'>
      <div className='flex flex-row items-center gap-3'>
      <div className='size-8  bg-ieBlack rounded-[0.25rem] flex justify-center items-center'>
        <VanArsdelIcon className="text-white size-7"/>
      </div>
      <label className='text-ieBlack font-bold text-display-lg'>Van Arsdel</label>
      </div>
      <div className='flex flex-row items-center'>
        {navTitles.map((item,index) => (
          <Tab 
        key={`${index} in Navtitles`}
        text={item.text}
        textCn='font-normal text-display-sm relative hover:font-semibold '
        tabWrapperCn='w-fit hover:border-b-4 hover:border-iePrimary h-[3.68rem] px-[0.875rem] py-[0.625rem]'

        />))}
      </div>
      </div>
      <div className='flex flex-row'>
          <div className='size-8 flex items-center justify-center'><ExpandNewWindowIcon className="size-[0.88rem]"/></div>
          <div className='size-8 flex items-center justify-center'><MoreHorizontalIcon className="size-[.88rem]"/></div>
      </div>
 </div>
 <div className='h-[3rem] py-2 flex flex-row items-center justify-between border-b-[1px] px-5'>
<div className='hidden md:flex flex-row items-center'>
       <HamburgerIcon className="size-4 mr-3"/> 
          <IeButton text={t("Dashboard.App.NavBarHeader.NavbarText.Text")} leftIcon={<CircleIcon className="size-4"/>} rightIcon={<DownCaretIcon className="size-[0.58rem] left-52"/>}/>
          <IeButton text={t("Dashboard.App.NavBarHeader.NavbarText.Text")} leftIcon={<CircleIcon className="size-4"/>} buttonWrapperCn='bg-white text-Ieblack'/>
          <IeButton text={t("Dashboard.App.NavBarHeader.NavbarText.Text")} leftIcon={<CircleIcon className="size-4"/>} buttonWrapperCn='bg-white text-Ieblack'/>
          <IeButton leftIcon={<LineIcon className="h-5 w-[1px]"/>} buttonWrapperCn='bg-white text-ieGrey-10'/>
          <IeButton text={t("Dashboard.App.NavBarHeader.NavbarText.Text")} leftIcon={<CircleIcon className="size-4"/>} buttonWrapperCn='bg-white text-Ieblack'/>
          <IeButton text={t("Dashboard.App.NavBarHeader.NavbarText.Text")} leftIcon={<CircleIcon className="size-4"/>} buttonWrapperCn='bg-white text-Ieblack'/>
          <IeButton text={t("Dashboard.App.NavBarHeader.NavbarText.Text")} leftIcon={<CircleIcon className="size-4"/>} buttonWrapperCn='bg-white text-Ieblack'/>
          <IeButton leftIcon={<LineIcon className="h-5 w-[1px]"/>} buttonWrapperCn='bg-white text-ieGrey-10'/>

          <IeButton text={t("Dashboard.App.NavBarHeader.NavbarText.Text")} leftIcon={<CircleIcon className="size-4"/>} buttonWrapperCn='bg-white text-Ieblack'/>


</div>
<div className='flex flex-row items-center gap-3'>
        <label className='font-semibold text-display-sm'>Filter</label>
  <div className='flex items-center bg-white h-[2rem] border py-[0.625rem] text-sm rounded-[0.25rem] pl-2 flex-row'>
          <SearchIcon className="size-[0.875rem]"/>
          <input placeholder='Find' className='rounded-l-[0.25rem]   pl-2 px-[0.625rem] w-[12.5rem] focus-visible:outline-none'/>
        </div>
</div>
 </div> 
 </>
  )
}

export default NavHeader