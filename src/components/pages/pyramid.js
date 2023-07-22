import PyramidSettings from "../parts/pyramidSettings";
import classes from "./pyramid.module.css";
import PyramidPiece from "../parts/pyramidPiece";

import { useState } from "react";

function Pyramid(props) {
  /* sets up states for all variables that are later passed forward creating pyramid from
  other components */
  var [space, setSpace] = useState(JSON.parse(localStorage.getItem("space")));
  var [line, setLine] = useState(JSON.parse(localStorage.getItem("line")));
  var [loop, setLoop] = useState(JSON.parse(localStorage.getItem("loop")));
  var [font, setFont] = useState(JSON.parse(localStorage.getItem("font")));
  var [amount, setAmount] = useState(
    JSON.parse(localStorage.getItem("amount"))
  );
  var [letters, setLetters] = useState(
    JSON.parse(localStorage.getItem("letters"))
  );

  /* listens for change in localstorage and then based on it updates states */
  window.addEventListener("storage", () => {
    setSpace(JSON.parse(localStorage.getItem("space")));
    setLine(JSON.parse(localStorage.getItem("line")));
    setLoop(JSON.parse(localStorage.getItem("loop")));
    setFont(JSON.parse(localStorage.getItem("font")));
    setAmount(JSON.parse(localStorage.getItem("amount")));
    setLetters(JSON.parse(localStorage.getItem("letters")));
  });

  /* makes sure there are no undefined states so site wont crash */
  if (space == null) {
    space = 1;
    localStorage.setItem("space", JSON.stringify(1));
  }
  if (line == null) {
    line = 2;
    localStorage.setItem("line", JSON.stringify(2));
  }
  if (loop == null) {
    loop = 7;
    localStorage.setItem("loop", JSON.stringify(7));
  }
  if (font == null) {
    font = 2;
    localStorage.setItem("font", JSON.stringify(2));
  }
  if (amount == null) {
    amount = 1;
    localStorage.setItem("amount", JSON.stringify(1));
  }
  if (letters == null) {
    letters = true;
    localStorage.setItem("letters", JSON.stringify(true));
  }

  /* passes data to PyramidPiece that is being pushed to "pyramid" array */
  const pyramid = [];
  for (let i = 0; i < loop; i++) {
    pyramid.push(
      <PyramidPiece
        space={space}
        line={line}
        font={font}
        amount={amount}
        letters={letters}
        loop={i}
      />
    );
  }

  return (
    <div className={classes.main}>
      <div className={classes.settings}>
        <PyramidSettings />
      </div>
      {/* <div className={classes.reset_button}>
        <button onClick={reroll}>Randomize Signs</button>
      </div> */}
      <div className={classes.middle}>
        <div>{pyramid}</div>
      </div>
    </div>
  );
}

export default Pyramid;
