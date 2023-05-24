import { ReceivedMessages } from "../received-messages/ReceivedMessages";
import styles from "./Messages.module.css";
import { useEffect, useState, useRef } from "react";

export const Messages = ({ messages }) => {
  const [gottenMessages, setGottenMessages] = useState([]);

  const onGettingMessage = (gottenMessage) => {
    setGottenMessages(gottenMessage);
  };

  const allMessages = messages.concat(gottenMessages);
  allMessages.sort((a, b) => a.timestamp - b.timestamp);

  const messagesContainerRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [allMessages]);

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      const container = messagesContainerRef.current;
      container.scrollTop = container.scrollHeight;
    }
  };

  return (
    <div className={styles.area} ref={messagesContainerRef}>
      <div className={styles.messages}>
        {allMessages.map((message, index) => (
          <div
            className={
              message.source === "sent"
                ? styles["sent-messages"]
                : styles["received-messages"]
            }
            key={index}
          >
            <div
              className={`${styles.message}
                ${
                  message.source === "sent"
                    ? styles["sent-message"]
                    : styles["received-message"]
                }`}
              key={index}
            >
              {message?.text}
            </div>
          </div>
        ))}
      </div>
      <ReceivedMessages gettingMessages={onGettingMessage} />
    </div>
  );
};
