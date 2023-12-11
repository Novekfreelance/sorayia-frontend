"use client";
import { DeleteIcon, MoreIcon, PencilIcon } from "@/components/icons/SvgIcons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ConversationActionBtn = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        	<MoreIcon fill="#1D3E80" width={23} height={23} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">
          <PencilIcon fill="#1D3E80" height={20} width={20} />
					<span className="block ml-1">Edit</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          <DeleteIcon fill="#1D3E80" height={20} width={20} />
					<span className="block ml-1">Delete</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ConversationActionBtn;
