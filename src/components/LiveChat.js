import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useChat } from "../context/ChatContext";
import { generateRandomNames, makeRandomMessage } from "../utils/Helper";

const LiveChat = () => {
  const { messages, setMessages } = useChat();
  const [liveMessage, setLiveMessage] = useState("");

  useEffect(() => {
    const i = setInterval(() => {
      // API Polling
      //   setMessages([
      //     ...messages,
      //     { name: "Varun Tad", message: "Lorem ipsum Dolor Site Amet 🚀" },
      //   ]);

      //messages.splice(10,1) removing the first message when adding another one

      setMessages((prevState) => [
        ...prevState,
        {
          name: generateRandomNames(),
          message: makeRandomMessage(20) + " 🚀",
        },
      ]);
    }, 2000);
    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {messages.map((m, index) => (
            <ChatMessage key={index} name={m.name} message={m.message} />
          ))}
        </div>
      </div>
      <form
        className="w-full p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          setMessages([...messages, { name: "Varun", message: liveMessage }]);
          setLiveMessage("");
        }}
      >
        <input
          value={liveMessage}
          className="px-2 w-72"
          type="text"
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-2 mx-2 bg-green-100">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
