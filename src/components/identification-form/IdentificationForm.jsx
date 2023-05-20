import styles from "./IdentificationForm.module.css";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const IdentificationForm = () => {
  // const [idInstance, setIdInstance] = useState("");
  // const [apiTokenInstance, setApiTokenInstance] = useState("");
  const navigate = useNavigate();

  const authorizingData = async (e) => {
    const idInstance = e.target.elements.idInstance.value;
    const apiTokenInstance = e.target.elements.apiTokenInstance.value;

    try {
      const response = await axios.post(
        `https://api.green-api.com/waInstance${idInstance}/SetSettings/${apiTokenInstance}`
      );
      console.log(response.data);

      // if (response.status === 200) {
      //   navigate(`/creating/${idInstance}/${apiTokenInstance}`);
      //   console.log("Success!");
      // }
    } catch (error) {
      console.error(error);
    }
    try {
      const response = await axios.get(
        `https://api.green-api.com/waInstance${idInstance}/GetSettings/${apiTokenInstance}`
      );
      if (response.status === 200) {
        console.log(response.data);
      }
    } catch (error) {
      console.error(error);
    }
    if (idInstance && apiTokenInstance) {
      navigate(`/creating/${idInstance}/${apiTokenInstance}`);
      console.log("Success!");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    authorizingData(e);
  };

  return (
    <div>
      <h2>Identification</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="idInstance" placeholder="Your idInstance" />
        <input
          type="text"
          name="apiTokenInstance"
          placeholder="Your apiTokenInstance"
        />
        <button type="submit">Identify</button>
      </form>
    </div>
  );
};