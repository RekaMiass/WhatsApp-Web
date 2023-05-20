import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const Chat = () => {
  const { idInstance, apiTokenInstance, resipientNum } = useParams();
  const [sendingMessage, setSendingMessage] = useState("");

  const createMessageHandler = (e) => {
       setSendingMessage(e.target.value); 
  };

  const sendMessageHandler = async (e) => {
    try {
      const response = await axios.post(
        `https://api.green-api.com/waInstance${idInstance}/SendMessage/${apiTokenInstance}`,
        {
          chatId: `${resipientNum}@c.us`,
          message: `${sendingMessage}`,
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

const onKeyPress = (e) => {
    if(e.key === 'Enter'|| e.type === "click") {
        sendMessageHandler(e);
        createMessageHandler(e);
        setSendingMessage('');
    }
}

//   useEffect(() => {
//     const sendMessage = async () => {
//     //   if (e.key === "Enter" && sendingMessage) {
//         await sendMessageHandler();
//     //   }
//     };
//     sendMessage();
//   }, [sendingMessage]);



  return (
    <div>
      {/* <p>+{userData.wid.slice(0, -5)}</p> */}
      {/* <form onSubmit={sendMessageHandler}> */}
      <input
        type="text"
        value={sendingMessage}
        onChange={createMessageHandler}
        onKeyDown={onKeyPress}
      />
      <button type="submit" 
      onClick={onKeyPress}
      >
        Send
      </button>
      {/* </form> */}
      <p>{sendingMessage}</p>
    </div>
  );
};
