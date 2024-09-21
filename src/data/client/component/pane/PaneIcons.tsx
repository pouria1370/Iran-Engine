import { TPaneIcon } from "@/utilities/types/components/pane/pane";
import BellIcon from "@icon/Bell.svg";
import ChatIcon from "@icon/Chat.svg";
import PeopleIcon from "@icon/People.svg";
import CalenderIcon from "@icon/Calender.svg";
import CallIcon from "@icon/Call.svg";
import DocumentIcon from "@icon/Document.svg";
import VanArsdelIcon from "@icon/VanArsdel.svg";
import MoreHorizontalIcon from "@icon/MoreHorizontal.svg";
import AddMoreSquareIcon from "@icon/AddMoreSquare.svg";

export const paneIcons: TPaneIcon[] = [
  {
    text: "Activity",
    icon: <BellIcon className="text-ieText-10" />,
  },
  { text: "Chat", icon: <ChatIcon className="text-ieText-10" /> },
  { text: "Teams", icon: <PeopleIcon className="text-ieText-10" /> },
  { text: "Calendar", icon: <CalenderIcon className="text-ieText-10" /> },
  { text: "Calls", icon: <CallIcon className="text-ieText-10" /> },
  { text: "Files", icon: <DocumentIcon className="text-ieText-10" /> },
  { text: "Van Arsdel", icon: <VanArsdelIcon className="text-ieText-10" /> },
  { icon: <MoreHorizontalIcon className="text-ieText-10" /> },
  { text: "Apps", icon: <AddMoreSquareIcon className="text-ieText-10" /> },
];
