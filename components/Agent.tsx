import Image from "next/image";
import { cn } from "@/lib/utils";

enum CallStatus {
  INACTIVE = "INACTIVE",
  CONNECTING = "CONNECTING",
  ACTIVE = "ACTIVE",
  FINISHED = "FINISHED",
}

interface AgentProps {
  userName: string;
}

const Agent = ({ userName }: AgentProps) => {
  const callStatus = CallStatus.FINISHED;

  const isSpeaking = true;
  const messages = [
    "What is your name?",
    "My name is Manu, nice to meet you!"
  ];
  const lastMessage = messages[messages.length - 1];

  return (
    <>
      {/* Call View */}
      <div className="call-view">
        {/* AI Interviewer Card */}
        <div className="card-interviewer">
          <div className="avator relative">
            <Image
              src="/ai-avatar.png"
              alt="AI Avatar"
              width={65}
              height={54}
               className="ml-2 rounded-full object-cover bg-primary-100"
            />
            {isSpeaking && (
              <span className="absolute inset-0 m-auto rounded-full w-20 h-20 animate-ping bg-primary-200 opacity-75" />
            )}
          </div>
          <h3 className="pt-2 text-center">AI Interview</h3>
        </div>

        {/* User Card */}
        <div className="card-border ">
          <div className="card-content flex flex-col items-center">
            <Image
              src="/user-avatar.png"
              alt="Profile Image"
              width={120}
              height={120}
              className="rounded-full object-cover"
            />
            <h3 className="mt-2">{userName}</h3>
          </div>
        </div>
      </div>

      {/* Transcript */}
      {messages.length > 0 && (
        <div className="transcript-border mt-4 p-1 bg-gray-900 rounded-lg">
          <div className="transcript">
            <p
              key={lastMessage}
              className={cn(
                "transition-opacity duration-500 opacity-0",
                "animate-fadeIn opacity-100"
              )}
            >
              {lastMessage}
            </p>
          </div>
        </div>
      )}

      {/* Call Button */}
      <div className="w-full flex justify-center mt-4">
        {callStatus !== CallStatus.ACTIVE ? (
          <button className="relative btn-call px-6 py-2 rounded-full bg-green-500 text-white">
            <span
              className={cn(
                "absolute top-0 left-0 right-0 bottom-0 m-auto w-5 h-5 rounded-full animate-ping bg-green-300 opacity-75",
                callStatus !== CallStatus.CONNECTING ? "hidden" : ""
              )}
            />
            <span>
              {callStatus === CallStatus.INACTIVE || callStatus === CallStatus.FINISHED
                ? "Call"
                : ". . ."}
            </span>
          </button>
        ) : (
          <button className="btn-disconnect px-6 py-2 rounded-full bg-red-500 text-white">
            End
          </button>
        )}
      </div>
    </>
  );
};

export default Agent;
