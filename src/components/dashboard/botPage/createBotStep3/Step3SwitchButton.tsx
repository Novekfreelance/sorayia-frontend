"use client";
import UserStore from "@/app/store/AuthStore";
import UseProcessContext from "@/app/store/CreateBotStore";
import Spinner from "@/components/icons/Spinner";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Step3SwitchButton = () => {
  const { toast } = useToast();
  const {
    setStep,
    setAvatar,
    setFolders,
    setPreferences,
    avatar,
    folders,
    preferences,
  } = UseProcessContext();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { token } = UserStore();

  const handleEnd = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://sorayia-backend.onrender.com/api/create_bot",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
          body: JSON.stringify({
            name: preferences.name,
            description: preferences.description,
            model: preferences.model,
            prompt: preferences.prompt,
            avatar: avatar.id,
            folders: [folders.id],
          }),
        }
      );
      if (response.status === 200) {
        toast({
          title: "Success",
          description: "Email verified successfully",
          variant: "success",
        });
        router.push("/dashboard/bot");
        router.refresh();
        setStep("1");
        setAvatar({
          id: "",
          name: "",
          url: "",
        });
        setFolders({
          id: "",
          name: "",
        });
        setPreferences({
          name: "",
          prompt: "",
          description: "",
          language: "",
          model: preferences.model,
        });
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };
  const handlePrev = () => {
    setStep("2");
  };
  return (
    <>
      <div className="flex justify-between mt-5 w-8/12">
        <Button
          className="text-xl bg-primary hover:bg-primary-300 py-7 uppercase"
          onClick={handlePrev}
        >
          Prev
        </Button>
        <Button
          className="text-xl bg-primary hover:bg-primary-300 py-7 uppercase"
          disabled={isLoading}
          onClick={handleEnd}
        >
          {isLoading ? <Spinner /> : "Finish"}
        </Button>
      </div>
    </>
  );
};

export default Step3SwitchButton;
