import { ReceivedMessages } from "../received-messages/ReceivedMessages";
import styles from "./ChatArea.module.css";
import { useEffect, useState, useRef } from "react";

export const ChatArea = ({ messages }) => {
// export const ChatArea = ({ newMessage }) => {
  const [gottenMessages, setGottenMessages] = useState([]);

  const onGettingMessage = (gottenMessage) => {
    setGottenMessages((prevGottenMessages) => [
      ...prevGottenMessages,
      gottenMessage,
    ]);
    
  };

  const messagesContainerRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      const container = messagesContainerRef.current;
      container.scrollTop = container.scrollHeight;
    }
  };

  return (
    <div className={styles.area}>
      <div className={styles["scroll-messages"]} ref={messagesContainerRef}>
        <div className={styles.messages}>
          {messages.map((message, index) => (
            <div className={styles.message} key={index}>
              {message}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.receiptMessages}>
        <ReceivedMessages
          gottenMessages={gottenMessages}
          gettingMessages={onGettingMessage}
        />
      </div>
    </div>
  );
};
