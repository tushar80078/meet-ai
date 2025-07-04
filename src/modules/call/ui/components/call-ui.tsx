import { StreamTheme, useCall } from "@stream-io/video-react-sdk";
import { useState } from "react";
import CallLoby from "./call-lobby";
import CallActive from "./call-active";
import CallEnded from "./call-ended";

interface Props {
  meetingName: string;
}

export const CallUI = ({ meetingName }: Props) => {
  const call = useCall();
  const [show, setShow] = useState<"lobby" | "call" | "ended">("lobby");

  const handleJoin = async () => {
    if (!call) return;

    await call.join();

    setShow("call");
  };

  const handleLeave = () => {
    if (!call) return;
    call.endCall();
    setShow("ended");
  };

  return (
    <StreamTheme className="h-full">
      {show == "lobby" && <CallLoby onJoin={handleJoin} />}
      {show == "call" && (
        <CallActive onLeave={handleLeave} meetingName={meetingName} />
      )}
      {show == "ended" && <CallEnded />}
    </StreamTheme>
  );
};
