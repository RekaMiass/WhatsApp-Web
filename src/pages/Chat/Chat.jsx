import { useState } from "react";
import { MessageForm } from "../../components/message-form/MessageForm";
import { MessagesArea } from "../../components/messages-area/MessagesArea";

export const Chat = () => {
  const [messages, setMessages] = useState([]);

  const onCreatingMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  return (
    <div>
      <MessageForm createMessage={onCreatingMessage} />
      <MessagesArea messages={messages} />
    </div>
  );
};
