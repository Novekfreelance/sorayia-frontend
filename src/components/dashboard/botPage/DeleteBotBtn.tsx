"use client";
import Spinner from "@/components/icons/Spinner";
import { DeleteIcon } from "@/components/icons/SvgIcons";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import UserStore from "@/store/AuthStore";
import useBotDataStore from "@/store/BotStore";
import { useRouter } from "next/navigation";
import { useState } from "react";

type DeleteBotBtnProps = {
  id: string;
};
const DeleteBotBtn: React.FC<DeleteBotBtnProps> = ({ id }) => {
  const { token } = UserStore();
  const { toast } = useToast();
  const router = useRouter();
  const { removeBot } = useBotDataStore();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://sorayia-backend.onrender.com/api/delete_bot`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
          body: JSON.stringify({
            bot_id: id,
          }),
        }
      );
      if (response.status === 200) {
        router.refresh();
        toast({
          title: "Success",
          description: "Folder deleted successfully",
          variant: "success",
        });
        removeBot(id);
      } else {
        toast({
          title: "error",
          description: "Something went wrong",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Button
      className="py-2 px-4 bg-transparent border-none hover:bg-accent"
      onClick={handleClick}
    >
      {isLoading ? (
        <Spinner className="!w-5 !h-5" />
      ) : (
        <DeleteIcon fill="#1D3E80" height={23} width={23} />
      )}
    </Button>
  );
};

export default DeleteBotBtn;
