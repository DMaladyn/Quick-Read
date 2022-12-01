import { useRef, useState } from "react";

import classes from "./table.module.css";
import TablePiece from "../parts/tablePiece";
/* import TableSettings from "../parts/tableSettings"; */

function Table() {
  const fontInput = useRef();
  const lvlInput = useRef();

  const table = [];

  const [settings, setSettings] = useState(false);

  const [font, setFont] = useState(3);

  const [lvl, setLvl] = useState(0);

  const level = [
    {
      grid: classes.one,
      loop: 9,
    },
    {
      grid: classes.two,
      loop: 25,
    },
    {
      grid: classes.three,
      loop: 49,
    },
    {
      grid: classes.four,
      loop: 81,
    },
    {
      grid: classes.five,
      loop: 121,
    },
  ];

  for (let i = 0; i < level[lvl].loop; i++) {
    table.push(<TablePiece font={font} />);
  }

  function openSettings() {
    setSettings(true);
  }

  function closeSettings() {
    setSettings(false);
  }

  function submitSettings() {
    setSettings(false);
    setFont(fontInput.current.value / 10);
    setLvl(lvlInput.current.value);

    console.log("submitted");
  }

  return (
    <div className={classes.whole}>
      <div className={classes.center}>
        <div className={level[lvl].grid}>{table}</div>
      </div>
      <div className={classes.settings}>
        {!settings && (
          <img
            src={require("../parts/gear.png")}
            alt="alt"
            className={classes.settings_img}
            onClick={openSettings}
          />
        )}
      </div>
      <div>
        {settings && (
          <div className={classes.settingsWindow}>
            <div className={classes.option}>Settings</div>
            <div className={classes.option}>
              <form className={classes.option} onSubmit={submitSettings}>
                <div>
                  <label>Level</label>
                </div>
                <select defaultValue={lvl} ref={lvlInput}>
                  <option value="0">1 - (3x3)</option>
                  <option value="1">2 - (5x5)</option>
                  <option value="2">3 - (7x7)</option>
                  <option value="3">4 - (9x9)</option>
                  <option value="4">5 - (11x11)</option>
                </select>

                <div>
                  <label>Level</label>
                </div>
                <input defaultValue={font * 10} ref={fontInput} />
              </form>
            </div>
          </div>
        )}
        {settings && (
          <div
            className={classes.backgroundSettings}
            onClick={closeSettings}
          ></div>
        )}
      </div>
    </div>
  );
}

export default Table;
