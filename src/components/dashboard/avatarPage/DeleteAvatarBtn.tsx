"use client";
import { DeleteIcon } from "@/components/icons/SvgIcons";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import UserStore from "@/store/AuthStore";
import useAvatarDataStore from "@/store/AvatarDataStore";
import { useRouter } from "next/navigation";

type DeleteAvtarBtnProps = {
  id: string;
};
const DeleteAvatarBtn: React.FC<DeleteAvtarBtnProps> = ({ id }) => {
  const { token } = UserStore();
  const { toast } = useToast();
  const router = useRouter();
  const { removeAvatar } = useAvatarDataStore();

  const handleClick = async () => {
    try {
      const response = await fetch(
        `https://sorayia-backend.onrender.com/api/delete_avatar`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
          body: JSON.stringify({
            avatar_id: id,
          }),
        }
      );
      if (response.status === 200) {
        removeAvatar(id);
        router.refresh();
        toast({
          title: "Success",
          description: "Folder deleted successfully",
          variant: "success",
        });
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
    }
  };
  return (
    <Button
      className="py-2 px-4 bg-transparent border-none hover:bg-accent"
      onClick={handleClick}
    >
      <DeleteIcon fill="#1D3E80" height={23} width={23} />
    </Button>
  );
};

export default DeleteAvatarBtn;
