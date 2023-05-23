import styles from "./Chat.module.css";
import { ChatContainer } from "../../components/chat-container/ChatContainer";
import { BackButton } from "../../components/back-button/BackButton";

export const Chat = () => {
  return (
    <div className={styles.chat}>
      <BackButton />
      <ChatContainer />
    </div>
  );
};
