import styles from "./MessageForm.module.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const MessageForm = ({ createMessage }) => {
  const { idInstance, apiTokenInstance, resipientNum } = useParams();
  const [messageText, setMessageText] = useState("");

  const createMessageHandler = (e) => {
    e.preventDefault();

    setMessageText(e.target.value);
  };

  const sendMessageHandler = async () => {
    try {
      const response = await axios.post(
        `https://api.green-api.com/waInstance${idInstance}/SendMessage/${apiTokenInstance}`,
        {
          chatId: `7${resipientNum}@c.us`,
          message: `${messageText}`,
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessageHandler();
      createMessage(messageText);
      setMessageText("");
    }
  };

  return (
    <section className={styles["message-form"]}>
      <input
      className={styles.input}
        type="text"
        placeholder="Type a message"
        value={messageText}
        onChange={createMessageHandler}
        onKeyDown={onKeyPress}
      />
    </section>
  );
};
