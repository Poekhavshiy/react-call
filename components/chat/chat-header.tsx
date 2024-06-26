import { Hash, Menu } from "lucide-react";
import { MobileToggle } from "@/components/mobile-toggle";
import { UserAvatar } from "@/components/user-avatar";
import { SocketIndicator } from "@/components/socket-indicator";
import { ChatVideoButton } from "./chat-video-button";

interface ChatHeaderProps {
  serverId: string;
  name: string;
  type: "channel" | "conversation";
  imageUrl?: string;
}

export const ChatHeader = ({
  serverId,
  name,
  type,
  imageUrl
}: ChatHeaderProps) => {
  return (
    <div className="text-md font-semibold px-3 flex items-center h-12 bg-[#1D1D1D] dark:bg-[#1D1D1D]">
        <MobileToggle 
        serverId={serverId} />
        {type === "channel" && (
            <Hash className="w-5 h-5 text-neutral-600 dark:text-neutral-600 mr-2" />
        )}
        {type === "conversation" && (
          <UserAvatar 
          src={imageUrl}
          className="h-8 w-8 md:h-8 md:w-8 mr-2"
          />
          
        )}
        <p className="font-semibold text-md text-white dark:text-white">
            {name}
        </p>
        <div className="ml-auto flex items-center">
          {type === "conversation" && (
            <ChatVideoButton />
          )}
          <SocketIndicator />
        </div>
    </div>
  )
}