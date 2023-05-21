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
          chatId: `${resipientNum}@c.us`,
          message: `${messageText}`,
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      sendMessageHandler();
      createMessage(messageText);
      setMessageText("");
    }
  };

  return (
    <section>
      {/* <p>+{userData.wid.slice(0, -5)}</p> */}
      <input
        type="text"
        value={messageText}
        onChange={createMessageHandler}
        onKeyDown={onKeyPress}
      />
      <button type="submit" onClick={onKeyPress}>
        Send
      </button>
    </section>
  );
};
