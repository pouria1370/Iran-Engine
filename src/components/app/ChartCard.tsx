"use client"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/utilities/share/atom/IeCard'
import { ChartData, ChartOptions, TActions, TChartType } from '@/utilities/types/components/app/Chart'
import { useTranslations } from 'next-intl'
import React, { ReactNode, useEffect, useRef } from 'react'
import SearchIcon from "@icon/Search.svg"
import MoreHorizontalIcon from "@icon/MoreHorizontal.svg"
import TwoArrowsIcon from "@icon/OrientalTwoSideArrow.svg"
import SettingIcon from "@icon/Gear.svg"
import IeButton from '@/utilities/share/atom/IeButton'
import { ChartGenerator } from '@/utilities/lib/ChartGenerator'
import { cn } from '@/utilities/lib/cn'
interface IProps{
    type:TChartType,
    data:ChartData[],
    description:string,
    title:string,
    actions:TActions[],
    option:ChartOptions,
    contentCN?:string,
    chartElement?:ReactNode,
    tabDays?: string[];
    radiaChartFullDegree?:number
}
const ChartCard = ({actions,tabDays,data,description,chartElement,contentCN,title,type,option}:IProps) => {
    const t = useTranslations("SharedComponents.Card")
    const svgRef = useRef<HTMLDivElement | null>(null)
    const first = useRef(0)
    const id = `chart${new Date().getTime()}`
    const fetchedActions:ReactNode[] = Array.from(new Set(actions))?.map(item => item === "zoom" ? <SearchIcon className="size-4"/> : item === "maximize" ? <TwoArrowsIcon className="size-4"/> : item === "setting" ? <SettingIcon className="size-4"/> : <MoreHorizontalIcon className="size-4"/>)
    

    useEffect(() => {
      first.current = first.current +1
      if (first.current === 1) {
        const  y =new ChartGenerator(svgRef.current as HTMLElement,option)
             y.generateChart(type,data)
      }
    }, [data,type])
    

    return (
    <Card className='flex justify-between  items-center h-[25rem] flex-col'>
  <CardHeader className='flex flex-row w-full justify-between pr-0'>
    <div>
    <CardTitle>{title}</CardTitle>
    <CardDescription>{description}</CardDescription>
    </div>
    {actions  && <div className='flex flex-row '>{fetchedActions.map((item,index) => (<div key={`itemIn${index}`} className='size-8'>{item}</div>) )}</div>}
  </CardHeader>
  <CardContent  className={cn('w-[15rem]  flex flex-col  items-center justify-around sm:justify-end h-[17.5rem]',contentCN)}>
    {tabDays && <div className='flex mb-4 sm:justify-start flex-row'>{tabDays.map((item,index) => (<div className='p-[6px] text-display-sm  font-normal hover:font-semibold text-nowrap  w-fit min-w-[3.56rem] h-[2rem]' key={index}>{item}</div>))}</div> }
    {chartElement && chartElement}
    <div className='w-full' ref={svgRef}></div>
  </CardContent>
  <CardFooter className='h-[1.25rem] mt-5 pl-0'>
    <IeButton  buttonWrapperCn='bg-white text-iePrimary' text={t("ActionButtonText")}/>
  </CardFooter>
</Card>
  )
}

export default ChartCard