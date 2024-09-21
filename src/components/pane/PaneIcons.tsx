import { TPaneIcon } from "@/utilities/types/components/pane/pane";
import React from "react";
import Tab from "./Tab";
interface IProps {
  paneIcons: TPaneIcon[];
}

const PaneIcons = ({ paneIcons }: IProps) => {
  console.log(paneIcons);

  return (
    <div className="flex sm:flex-col flex-row">
      {paneIcons.map((item, index) => (
        <div
          key={index}
          className="w-full h-14 flex flex-col  items-center justify-center"
        >
          <Tab text={item.text} icon={item.icon} />
        </div>
      ))}
    </div>
  );
};

export default PaneIcons;
