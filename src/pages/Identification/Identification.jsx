import styles from "./Identification.module.css";
import { IdentificationForm } from "../../components/identification-form/IdentificationForm";

export const Identification = () => {
  return (
    <div className={styles.bg}>
      <IdentificationForm />
    </div>
  );
};
