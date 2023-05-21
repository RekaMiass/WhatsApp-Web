import styles from "./ChatContainer.module.css";
import { useState } from "react";
import { MessageForm } from "../../components/message-form/MessageForm";
import { ChatArea } from "../../components/chat-area/ChatArea";
import { ChatHeader } from "../chat-header/ChatHeader";

export const ChatContainer = () => {
  const [messages, setMessages] = useState([]);

  const onCreatingMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  return (
    <div className={styles.container}>
      <ChatHeader />
      <ChatArea messages={messages} />
      <MessageForm createMessage={onCreatingMessage} />
    </div>
  );
};
