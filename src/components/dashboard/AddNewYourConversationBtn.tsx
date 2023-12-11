"use client"
import { PlusIcon } from "../icons/SvgIcons";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "../ui/dialog";
import AddYourConversationForm from "./AddYourConversationForm";

const AddNewYourConversationBtn = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={"lg"}>
          <PlusIcon width={25} height={25} fill="#ffffff" />
          Add new
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <AddYourConversationForm />
      </DialogContent>
    </Dialog>
  );
};

export default AddNewYourConversationBtn;
