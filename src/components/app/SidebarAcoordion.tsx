import { AccordionTrigger,Accordion, AccordionItem, AccordionContent } from '@/utilities/share/atom/IeAccordion'
import React, { ReactNode } from 'react'
interface IProps{
    text:string,
    children:ReactNode,
    accordionCN?:string,
    accordionItemCN?:string,
    accordionContentWrapperCN?:string,
}
const SidebarAcoordion = ({children,text,accordionCN,accordionItemCN,accordionContentWrapperCN}:IProps) => {
  return (
    <Accordion  type="single" collapsible>
  <AccordionItem value="item-1" className={accordionCN}>
    <AccordionTrigger className={accordionItemCN}>{text}</AccordionTrigger>
    <AccordionContent className={accordionContentWrapperCN}>
        {children}
    </AccordionContent>
  </AccordionItem>
</Accordion>
  )
}
export default SidebarAcoordion