import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

export const ReceivedMessages = ({ gettingMessages }) => {
  const { idInstance, apiTokenInstance, recipientNum } = useParams();

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await axios.get(
          `https://api.green-api.com/waInstance${idInstance}/ReceiveNotification/${apiTokenInstance}`
        );

        if (
          response.data !== null &&
          response.data.body.senderData.chatId === `7${recipientNum}@c.us`
        ) {
          const newMessage = {
            source: "received",
            text: response.data.body.messageData.textMessageData.textMessage,
            timestamp: Date.now(),
          };
          gettingMessages((prevMessages) => [...prevMessages, newMessage]);

          await axios.delete(
            `https://api.green-api.com/waInstance${idInstance}/DeleteNotification/${apiTokenInstance}/${response.data.receiptId}`
          );
        } else if (
          response.data &&
          response.data?.body.senderData.chatId !== `7${recipientNum}@c.us`
        ) {
          await axios.delete(
            `https://api.green-api.com/waInstance${idInstance}/DeleteNotification/${apiTokenInstance}/${response.data.receiptId}`
          );
        }
      } catch (error) {
        console.error(error);
      }
    };

    const interval = setInterval(fetchMessage, 5100);

    return () => {
      clearInterval(interval);
    };
  }, [gettingMessages]);
};
