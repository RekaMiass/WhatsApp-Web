import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export const ChatCreatingForm = () => {
  const [resipientNum, setResipientNum] = useState("");
  const navigate = useNavigate();

  const resipientNumHandler = (e) => {
    e.preventDefault();
    setResipientNum(e.target.value);
  }

  const savingNumberHandler = () => {
    if (resipientNum) {
      navigate(`./${resipientNum}`)
    }
  }

  return (
    <div>
    <form onSubmit={savingNumberHandler}>
      <label>Enter your phone number</label>
      <input type="text" value={resipientNum} onChange={resipientNumHandler}/>
      <button type="submit">Create</button>
    </form>
      
    </div>
  )
};
