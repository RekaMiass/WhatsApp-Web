import styles from "./IdentificationForm.module.css";
import { useNavigate } from "react-router-dom";

export const IdentificationForm = () => {
  const navigate = useNavigate();

  const authorizingData = async (e) => {
    const idInstance = e.target.elements.idInstance.value;
    const apiTokenInstance = e.target.elements.apiTokenInstance.value;
    if (idInstance && apiTokenInstance) {
      navigate(`/creating/${idInstance}/${apiTokenInstance}`);
    }
  };

  const handleSubmit = (e) => {
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
        <button className={styles.btn} type="submit">
          identify
        </button>
      </form>
    </div>
  );
};
