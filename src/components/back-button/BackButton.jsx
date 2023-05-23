import styles from "./BackButton.module.css";
import { useNavigate } from "react-router-dom";

export const BackButton = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <button className={styles.btn} onClick={goBack}>
      Back
    </button>
  );
};
