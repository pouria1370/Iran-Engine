import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/utilities/share/atom/IeAccordion"
import { useTranslations } from 'next-intl'
import SidebarAcoordion from './SidebarAcoordion'
const SideBar = () => {
  const t = useTranslations()
  return (

<Accordion type="single" collapsible>
  <AccordionItem value="item-1" >
    <AccordionTrigger >{t("Dashboard.App.SideBar.AcoordionsNames.FirstGeneration")}</AccordionTrigger>
    <AccordionContent >
      <SidebarAcoordion accordionCN='pl-3' text={t("Dashboard.App.SideBar.AcoordionsNames.SecondGeneration")}>
        <SidebarAcoordion accordionContentWrapperCN='pl-12' accordionItemCN='group-data-[state=open]:bg-ieGrey-10' accordionCN='pl-3 group' text={t("Dashboard.App.SideBar.AcoordionsNames.ThirdGeneration")}>
          <div>hi</div>
          <div>hi</div>
          <div>hi</div>
          <div>hi</div>
        </SidebarAcoordion>
        <SidebarAcoordion accordionContentWrapperCN='pl-12' accordionItemCN='group-data-[state=open]:bg-ieGrey-10' accordionCN='pl-3 group' text={t("Dashboard.App.SideBar.AcoordionsNames.ThirdGeneration")}>
          <div>hi</div>
          <div>hi</div>
          <div>hi</div>
          <div>hi</div>
        </SidebarAcoordion>
        <SidebarAcoordion accordionContentWrapperCN='pl-12' accordionItemCN='group-data-[state=open]:bg-ieGrey-10' accordionCN='pl-3 group' text={t("Dashboard.App.SideBar.AcoordionsNames.ThirdGeneration")}>
          <div>hi</div>
          <div>hi</div>
          <div>hi</div>
          <div>hi</div>
        </SidebarAcoordion>
        <SidebarAcoordion accordionContentWrapperCN='pl-12' accordionItemCN='group-data-[state=open]:bg-ieGrey-10' accordionCN='pl-3 group' text={t("Dashboard.App.SideBar.AcoordionsNames.ThirdGeneration")}>
          <div>hi</div>
          <div>hi</div>
          <div>hi</div>
          <div>hi</div>
        </SidebarAcoordion>
        <SidebarAcoordion accordionContentWrapperCN='pl-12' accordionItemCN='group-data-[state=open]:bg-ieGrey-10' accordionCN='pl-3 group' text={t("Dashboard.App.SideBar.AcoordionsNames.ThirdGeneration")}>
          <div>hi</div>
          <div>hi</div>
          <div>hi</div>
          <div>hi</div>
        </SidebarAcoordion>
      </SidebarAcoordion>
      <SidebarAcoordion accordionCN='pl-3' text={t("Dashboard.App.SideBar.AcoordionsNames.SecondGeneration")}>
        <SidebarAcoordion accordionContentWrapperCN='pl-12' accordionItemCN='group-data-[state=open]:bg-ieGrey-10' accordionCN='pl-3 group' text={t("Dashboard.App.SideBar.AcoordionsNames.ThirdGeneration")}>
          <div>hi</div>
          <div>hi</div>
          <div>hi</div>
          <div>hi</div>
        </SidebarAcoordion>
        <SidebarAcoordion accordionContentWrapperCN='pl-12' accordionItemCN='group-data-[state=open]:bg-ieGrey-10' accordionCN='pl-3 group' text={t("Dashboard.App.SideBar.AcoordionsNames.ThirdGeneration")}>
          <div>hi</div>
          <div>hi</div>
          <div>hi</div>
          <div>hi</div>
        </SidebarAcoordion>
        <SidebarAcoordion accordionContentWrapperCN='pl-12' accordionItemCN='group-data-[state=open]:bg-ieGrey-10' accordionCN='pl-3 group' text={t("Dashboard.App.SideBar.AcoordionsNames.ThirdGeneration")}>
          <div>hi</div>
          <div>hi</div>
          <div>hi</div>
          <div>hi</div>
        </SidebarAcoordion>
        <SidebarAcoordion accordionContentWrapperCN='pl-12' accordionItemCN='group-data-[state=open]:bg-ieGrey-10' accordionCN='pl-3 group' text={t("Dashboard.App.SideBar.AcoordionsNames.ThirdGeneration")}>
          <div>hi</div>
          <div>hi</div>
          <div>hi</div>
          <div>hi</div>
        </SidebarAcoordion>
        <SidebarAcoordion accordionContentWrapperCN='pl-12' accordionItemCN='group-data-[state=open]:bg-ieGrey-10' accordionCN='pl-3 group' text={t("Dashboard.App.SideBar.AcoordionsNames.ThirdGeneration")}>
          <div>hi</div>
          <div>hi</div>
          <div>hi</div>
          <div>hi</div>
        </SidebarAcoordion>
      </SidebarAcoordion>
    </AccordionContent>
  </AccordionItem>
</Accordion>

  )
}

export default SideBar