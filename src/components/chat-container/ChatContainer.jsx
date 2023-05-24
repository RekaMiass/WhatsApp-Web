import styles from "./ChatContainer.module.css";
import { useState } from "react";
import { MessageForm } from "../../components/message-form/MessageForm";
import { Messages } from "../messages/Messages";
import { ChatHeader } from "../chat-header/ChatHeader";

export const ChatContainer = () => {
  const [messages, setMessages] = useState([]);

  const onCreatingMessage = (message) => {
    setMessages(message);
  };

  return (
    <div className={styles.container}>
      <ChatHeader />
      <Messages messages={messages} />
      <MessageForm createMessage={onCreatingMessage} />
    </div>
  );
};
