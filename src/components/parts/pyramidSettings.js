import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand } from "@fortawesome/free-solid-svg-icons";

import classes from "./pyramidSettings.module.css";

function PyramidSettings() {
  /* sets up states that will be used for creation of pyramid */
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

  /* edits states and after that runs dispatch for window.addEventListener("storage" to work in same page */
  function spaceIncrease() {
    setSpace(space + 0.1);
    localStorage.setItem("space", JSON.stringify(space + 0.1));
    window.dispatchEvent(new Event("storage"));
  }
  function spaceDecrease() {
    setSpace(space - 0.1);
    localStorage.setItem("space", JSON.stringify(space - 0.1));
    window.dispatchEvent(new Event("storage"));
  }
  function lineIncrease() {
    setLine(line + 0.1);
    localStorage.setItem("line", JSON.stringify(line + 0.1));
    window.dispatchEvent(new Event("storage"));
  }
  function lineDecrease() {
    setLine(line - 0.1);
    localStorage.setItem("line", JSON.stringify(line - 0.1));
    window.dispatchEvent(new Event("storage"));
  }
  function loopIncrease() {
    setLoop(loop + 1);
    localStorage.setItem("loop", JSON.stringify(loop + 1));
    window.dispatchEvent(new Event("storage"));
  }
  function loopDecrease() {
    setLoop(loop - 1);
    localStorage.setItem("loop", JSON.stringify(loop - 1));
    window.dispatchEvent(new Event("storage"));
  }
  function fontIncrease() {
    setFont(font + 0.1);
    localStorage.setItem("font", JSON.stringify(font + 0.1));
    window.dispatchEvent(new Event("storage"));
  }
  function fontDecrease() {
    setFont(font - 0.1);
    localStorage.setItem("font", JSON.stringify(font - 0.1));
    window.dispatchEvent(new Event("storage"));
  }
  function amountIncrease() {
    setAmount(amount + 1);
    localStorage.setItem("amount", JSON.stringify(amount + 1));
    window.dispatchEvent(new Event("storage"));
  }
  function amountDecrease() {
    setAmount(amount - 1);
    localStorage.setItem("amount", JSON.stringify(amount - 1));
    window.dispatchEvent(new Event("storage"));
  }
  function lettersIncrease() {
    letters = true;
    setLetters(true);
    localStorage.setItem("letters", JSON.stringify(letters));
    window.dispatchEvent(new Event("storage"));
  }
  function lettersDecrease() {
    letters = false;
    setLetters(false);
    localStorage.setItem("letters", JSON.stringify(letters));
    window.dispatchEvent(new Event("storage"));
  }

  /* turns on full screen */
  function handleFullScreem() {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      // Firefox
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      // Chrome, Safari and Opera
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      // IE/Edge
      document.documentElement.msRequestFullscreen();
    }
  }

  /* provides buttons to change data that is used to create pyramid */
  return (
    <div>
      <div className={classes.name}>
        Settings
        <FontAwesomeIcon
          className={classes.settings_img}
          onClick={handleFullScreem}
          icon={faExpand}
        />
      </div>
      <div className={classes.settings}>
        <div className={classes.option}>
          Gap Size
          <div className={classes.adjust}>
            <button className={classes.minusButton} onClick={spaceDecrease}>
              -
            </button>
            <div>{Math.round(space * 10)}</div>
            <button className={classes.plusButton} onClick={spaceIncrease}>
              +
            </button>
          </div>
        </div>
        <div className={classes.option}>
          Line Gap Size
          <div className={classes.adjust}>
            <button className={classes.minusButton} onClick={lineDecrease}>
              -
            </button>
            <div>{Math.round(line * 10)}</div>
            <button className={classes.plusButton} onClick={lineIncrease}>
              +
            </button>
          </div>
        </div>
        <div className={classes.option}>
          Lines
          <div className={classes.adjust}>
            <button className={classes.minusButton} onClick={loopDecrease}>
              -
            </button>
            <div>{loop}</div>
            <button className={classes.plusButton} onClick={loopIncrease}>
              +
            </button>
          </div>
        </div>
        <div className={classes.option}>
          Font Size
          <div className={classes.adjust}>
            <button className={classes.minusButton} onClick={fontDecrease}>
              -
            </button>
            <div>{Math.round(font * 10)}</div>
            <button className={classes.plusButton} onClick={fontIncrease}>
              +
            </button>
          </div>
        </div>
        <div className={classes.option}>
          Amount
          <div className={classes.adjust}>
            <button className={classes.minusButton} onClick={amountDecrease}>
              -
            </button>
            <div>X{amount}</div>
            <button className={classes.plusButton} onClick={amountIncrease}>
              +
            </button>
          </div>
        </div>
        <div className={classes.option}>
          Letters
          <div className={classes.adjust}>
            <button className={classes.minusButton} onClick={lettersDecrease}>
              -
            </button>
            <div>N/Y</div>
            <button className={classes.plusButton} onClick={lettersIncrease}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PyramidSettings;
