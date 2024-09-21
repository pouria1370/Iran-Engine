import { cn } from "@/utilities/lib/cn";
import React, { ReactNode } from "react";

interface IProps {
  icon?: ReactNode;
  text?: string;
  alignement?: "vertical" | "horizontal";
  iconCn?: string;
  textCn?: string;
  tabWrapperCn?: string;
  isActive?:boolean
}
const Tab = ({
  icon,
  iconCn,
  textCn,
  tabWrapperCn,
  text,
  alignement = "vertical",
  isActive=false
}: IProps) => {
  return (
    <div
      className={cn("flex  flex-col w-full justify-center items-center h-10 gap-[1px]", {
        "flex flex-row": alignement === "horizontal",
        "border-l-2 ml-1 border-iePrimary":isActive
      },tabWrapperCn)}
    >
      {icon && <div className={cn("size-[19px]",{"text-primary":isActive},iconCn)}>{icon}</div>}
      {text&& <div className={cn("text-display-2xs leading-[14px]",{"text-primary":isActive},textCn)}>
        {text}
      </div>}
    </div>
  );
};

export default Tab;
