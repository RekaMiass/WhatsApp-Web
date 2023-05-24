import styles from "./Chat.module.css";
import { ChatContainer } from "../../components/chat-container/ChatContainer";

export const Chat = () => {
  return (
    <div className={styles.chat}>
      <ChatContainer />
    </div>
  );
};
