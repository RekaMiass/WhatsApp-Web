import styles from "./ChatArea.module.css";

export const ChatArea = ({ messages }) => {
  return (
    <div className={styles.area}>
      {messages.map((message, index) => (
        <div key={index}>{message}</div>
      ))}
    </div>
  );
};
