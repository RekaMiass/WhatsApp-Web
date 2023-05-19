import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const ChatCreatingForm = () => {
  const { idInstance, apiTokenInstance } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `https://api.green-api.com/waInstance${idInstance}/GetSettings/${apiTokenInstance}`
        );
        if (response.status === 200) {
          setUserData(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, [idInstance, apiTokenInstance]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  // return <div>{userData}</div>;
  return (
    <div>
      <p>+{userData.wid.slice(0, -5)}</p>
    </div>
  );
};
