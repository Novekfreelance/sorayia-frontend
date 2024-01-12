"use client";
import UploadAvatarForm from "@/components/dashboard/avatarPage/uploadAvatarForm";
import Image from "next/image";
import { useEffect, useState } from "react";

const ReadyPlayerMeFrame = () => {
  const [avatarUrl, setAvatarUrl] = useState<string>("");
  const [isAvatarLoaded, setIsAvatarLoaded] = useState<boolean>(false);
  const [isFrameLoaded, setIsFrameLoaded] = useState<boolean>(false);
  // const [isLoading, setIsLoading] = useState<boolean>(false);

  const subdomain: string = "sorayiacom";
  useEffect(() => {
    const frame: HTMLIFrameElement | null = document.getElementById(
      "frame"
    ) as HTMLIFrameElement | null;
    if (frame) {
      frame.src = `https://${subdomain}.readyplayer.me/avatar?frameApi&clearCache`;

      const subscribe = (event: MessageEvent) => {
        const json = parse(event);

        if (json?.source !== "readyplayerme") {
          return;
        }

        // Subscribe to all events sent from Ready Player Me once frame is ready
        if (json.eventName === "v1.frame.ready") {
          if (frame) {
            frame.contentWindow?.postMessage(
              JSON.stringify({
                target: "readyplayerme",
                type: "subscribe",
                eventName: "v1.**",
              }),
              "*"
            );
          }
        }

        // Get avatar GLB URL
        if (json.eventName === "v1.avatar.exported") {
          setAvatarUrl(json.data.url.replace(".glb", ".png"));
          setIsFrameLoaded(true);
          setIsAvatarLoaded(true);
        }
      };

      window.addEventListener("message", subscribe);

      return () => {
        window.removeEventListener("message", subscribe);
      };
    }
  }, [subdomain]);

  const parse = (event: MessageEvent): any => {
    try {
      return JSON.parse(event.data);
    } catch (error) {
      return null;
    }
  };
  return (
    <div className="h-full-dvh w-full flex justify-center items-center">
      <iframe
        id="frame"
        className="w-full h-full"
        title="ReadyPlayerMe Avatar"
        allow="camera; microphone; autoplay; encrypted-media; gyroscope; fullscreen; xr-spatial-tracking"
        hidden={isFrameLoaded}
      ></iframe>
      {isAvatarLoaded ? (
        <div className="max-w-2xl space-y-4">
          <div className="w-full bg-gray-100 flex justify-center items-center rounded min-w-[300px] min-h-[300px]">
            {avatarUrl ? (
              <Image src={avatarUrl} alt="avatar" width={300} height={300} />
            ) : null}
          </div>
          <div className="w-full text-center">
            <UploadAvatarForm />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ReadyPlayerMeFrame;
