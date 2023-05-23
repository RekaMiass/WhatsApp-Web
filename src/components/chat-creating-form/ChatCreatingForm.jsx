import styles from "./ChatCreatingForm.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ChatCreatingForm = () => {
  const [recipientNum, setRecipientNum] = useState("");
  const navigate = useNavigate();

  const recipientNumHandler = (e) => {
    e.preventDefault();
    setRecipientNum(e.target.value);
  };

  const savingNumberHandler = () => {
    if (recipientNum) {
      navigate(`./${recipientNum}`);
    }
  };

  return (
    <div className={styles.main}>
      <form className={styles.form} onSubmit={savingNumberHandler}>
        <p className={styles.description}>
          Enter the phone number you want to start chatting with:
        </p>
        <div className={styles["label-input"]}>
          <label className={styles.label}>+7</label>
          <input
            className={styles.input}
            type="text"
            placeholder="9xxxxxxxxx"
            value={recipientNum}
            onChange={recipientNumHandler}
            required
          />
        </div>
        <button className={styles.btn} type="submit">Start chatting</button>
      </form>
    </div>
  );
};
