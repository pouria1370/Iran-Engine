import { ReactNode } from "react";

export type TPaneIcon = {
  icon: ReactNode;
  text?: keyof IntlMessages["Dashboard"]["Pane"];
};
