import styles from "./ReceivedMessages.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export const ReceivedMessages = ({ gettingMessages, gottenMessages }) => {
  const { idInstance, apiTokenInstance, recipientNum } = useParams();

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await axios.get(
          `https://api.green-api.com/waInstance${idInstance}/ReceiveNotification/${apiTokenInstance}`
        );

        if (
          response.data &&
          response.data.body.senderData.chatId === `7${recipientNum}@c.us`
        ) {
          console.log(response.data);
          gettingMessages(
            response.data.body.messageData.textMessageData.textMessage
          );
          // gettingMessages(
          //   response.data.body.messageData.extendedTextMessageData.text
          // );
          await axios.delete(
            `https://api.green-api.com/waInstance${idInstance}/DeleteNotification/${apiTokenInstance}/${response.data.receiptId}`
          );
        }
      } catch (error) {
        console.error(error);
      } 
      finally {
        fetchMessage();
      }
    };
    // const interval = setInterval(() => {
    //   fetchMessage();
    // }, 6000);

    // return () => {
    //   clearInterval(interval);
    // };
    fetchMessage();
  }, []);

  return (
    <div className={styles.messages}>
      {gottenMessages.map((message, index) => (
        <div className={styles.message} key={index}>
          {message}
        </div>
      ))}
    </div>
  );
};
