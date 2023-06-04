import { useState } from "react";
import { ReactComponent as starFilled } from "./star-filled.svg";
import { ReactComponent as starEmpty } from "./star.svg";
import "./icon--button.css";
export default function IconButton() {
  const [clicked, setClicked] = useState(false);

  function toggleClicked() {
    setClicked(!clicked);
  }

  return (
    <button type="button" className="icon--button" onClick={toggleClicked}>
      {clicked ? <starFilled /> : <starEmpty />}
    </button>
  );
}
