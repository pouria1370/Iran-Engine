import React from 'react'
import ChartCard from './ChartCard'
import { useTranslations } from 'next-intl'
import { ChartData } from '@/utilities/types/components/app/Chart'
const Dashboard = () => {
  const t = useTranslations("Dashboard")
  const t2 = useTranslations("SharedComponents.Card")
  const data = [
    {label:"30%",angle:200,value:200,group:"asia"},
    {label:"30%",angle:220,value:100,group:"asia5"},
    {label:"30%",angle:210,value:300,group:"asia3"},
    {label:"30%",angle:250,value:500,group:"asia4"},
    {label:"30%",angle:180,value:400,group:"asia2"},
    {label:"30%",angle:220,value:500,group:"asia2"},
    {label:"30%",angle:240,value:800,group:"asia2"},
    {label:"30%",angle:255,value:200,group:"asia2"},
  ]
  const radialChartData:ChartData[] = [
    {label:t("App.Dashboard.Charts.ChartsLegends.Line1"),value:74,group:"asia5",color:"#00B7C3"},
    {label:t("App.Dashboard.Charts.ChartsLegends.Line2"),value:26,group:"asia",color:"#D1D1D1"},
  ]
  const radialChartData2:ChartData[] = [
    {label:t("App.Dashboard.Charts.ChartsLegends.Line1"),value:40,group:"asia5",color:"#A6E9ED"},
    {label:t("App.Dashboard.Charts.ChartsLegends.Line2"),value:20,group:"asia",color:"#00666D"},
    {label:t("App.Dashboard.Charts.ChartsLegends.Line2"),value:15,group:"asia",color:"#005B70"},
    {label:t("App.Dashboard.Charts.ChartsLegends.Line2"),value:8,group:"asia",color:"#00B7C3"},
    {label:t("App.Dashboard.Charts.ChartsLegends.Line2"),value:17,group:"asia",color:"#F5F5F5"},
  ]
  const barChartData:ChartData[] = [
    {label:t("App.Dashboard.Charts.Months.Jan"),value:72,group:"group1",color:"#00B7C3"},
    {label:t("App.Dashboard.Charts.Months.Feb"),value:81,group:"group2",color:"#00B7C3"},
    {label:t("App.Dashboard.Charts.Months.Mar"),value:67,group:"group3",color:"#00B7C3"},
    {label:t("App.Dashboard.Charts.Months.Apr"),value:70,group:"group4",color:"#00B7C3"},
    {label:t("App.Dashboard.Charts.Months.May"),value:67,group:"group5",color:"#00B7C3"},
    {label:t("App.Dashboard.Charts.Months.Jun"),value:89,group:"group6",color:"#00B7C3"},
  ]
  const barGroupChartData:ChartData[] = [
    {label:t("App.Dashboard.Charts.Months.Jan"),value:72,group:"group1",color:"#93C5FD"},
    {label:t("App.Dashboard.Charts.Months.Feb"),value:81,group:"group2",color:"#1D4ED8"},
    {label:t("App.Dashboard.Charts.Months.Mar"),value:6,group:"group3",color:"#888888"},
  ]
  
  return (
    <div className='flex sm:p-4 gap-3 flex-col sm:flex-row flex-wrap'>
      <ChartCard type={"groupedRadial"} contentCN='h-[17.5rem] p-1 w-[15rem]' option={{height:190 ,width:234,margin:{bottom:100,left:0,right:0,top:0}}} data={data} actions={["maximize","zoom","setting","more"]} title={t("App.Dashboard.Charts.ChartsTitles.Chart4")} description={t2("Description")}/>
      <ChartCard type={"radial"} contentCN='h-[17.5rem] p-1 w-[15rem]' tabDays={[t("App.Dashboard.Charts.TimeFrame.Week"),t("App.Dashboard.Charts.TimeFrame.Month"),t("App.Dashboard.Charts.TimeFrame.TwoMonths")]}  option={{height:182 ,width:218,margin:{bottom:0,left:24,right:200,top:0},showLabelOrNot:true,radialChartFullDegree:180}} data={radialChartData} actions={["more"]} title={t2("Title")} description={t2("Description")}/>
      <ChartCard type={"radial"} contentCN='h-[17.5rem] p-1 w-[15rem]' tabDays={[t("App.Dashboard.Charts.TimeFrame.Week"),t("App.Dashboard.Charts.TimeFrame.Month"),t("App.Dashboard.Charts.TimeFrame.TwoMonths")]}  option={{height:182 ,width:218,margin:{bottom:0,left:24,right:200,top:0},radialChartFullDegree:360}} data={radialChartData2} actions={["more"]} title={t("App.Dashboard.Charts.ChartsTitles.Chart5")} description={t2("Description")}/>
      <ChartCard type={"bar"}  contentCN='h-[17.5rem] p-1 w-[15rem]' option={{height:190 ,width:240,margin:{bottom:45,left:16,right:26,top:45},barChartLeftSpace:65,barChartRightSpace:8,barChartBottomSpace:44,barChartTopSpace:10,barChartPaddingBetweenBars:0.3}} data={barChartData} actions={["more"]} title={t2("Title")} description={t2("Description")}/>
      <ChartCard type={"groupedBar"} tabDays={[t("App.Dashboard.Charts.Tabs.First"),t("App.Dashboard.Charts.Tabs.Second"),t("App.Dashboard.Charts.Tabs.Third")]} contentCN=' p-1 w-[27.5rem]' option={{height:182 ,width:429,margin:{bottom:0,left:0,right:63.25,top:0},barChartLeftSpace:0,barChartRightSpace:71.25,barChartBottomSpace:0,barChartTopSpace:0,barChartPaddingBetweenBars:0.3}} data={barGroupChartData} actions={["more"]} title={t2("Title")} description={t2("Description")}/>
      
      
    </div>
  )
}

export default Dashboard