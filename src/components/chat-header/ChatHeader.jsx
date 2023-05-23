import styles from "./ChatHeader.module.css";
import { useParams } from "react-router-dom";

export const ChatHeader = () => {
  const { recipientNum } = useParams();

  const numValidation = recipientNum.split("");
  numValidation.splice(3, 0, " ");
  numValidation.splice(7, 0, "-");
  numValidation.splice(10, 0, "-");
  const correctNum = "+7 " + numValidation.join("");

  return (
    <div className={styles.header}>
      <img className={styles.img} src="/person.png" alt="" />
      <p>{correctNum}</p>
    </div>
  );
};
