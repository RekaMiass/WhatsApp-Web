import styles from "./IdentificationForm.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const IdentificationForm = () => {
  const navigate = useNavigate();
  const [validationError, setValidationError] = useState("");

  const authorizingData = async (e) => {
    const idInstance = e.target.elements.idInstance.value;
    const apiTokenInstance = e.target.elements.apiTokenInstance.value;
    try {
      const response = await axios.get(
        `https://api.green-api.com/waInstance${idInstance}/GetSettings/${apiTokenInstance}`
      );
      if (idInstance && apiTokenInstance) {
        navigate(`/creating/${idInstance}/${apiTokenInstance}`);
      }
    } catch (error) {
      setValidationError("User is not found");
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    authorizingData(e);
  };

  return (
    <div className={styles.main}>
      <h2 className={styles.header}>identification</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          name="idInstance"
          placeholder="Your idInstance"
          required
        />
        <input
          className={styles.input}
          type="text"
          name="apiTokenInstance"
          placeholder="Your apiTokenInstance"
          required
        />
        <p className={validationError ? styles.error : styles['hidden-error']}>{validationError}</p>
        <button className={styles.btn} type="submit">
          identify
        </button>
      </form>
    </div>
  );
};
