import classes from "./mainPage.module.css";

import { useState } from "react";

function MainPage() {
  const [pyramid, setPyramid] = useState(true);
  const [table, setTable] = useState(true);

  function pyramidDescr() {
    setPyramid(!pyramid);
  }

  function tableDescr() {
    setTable(!table);
  }

  /* MainPage contains basic explainations of how site works and more specific 
  explaination inside expandable parts */
  return (
    <div>
      <h1 className={classes.name}>Quick Read</h1>
      <div className={classes.text}>
        <h4>
          This web app will help you increase your reading speed. <br />
          To do it you can use available exercises such as:
        </h4>
        <ul>
          <li>
            <div onClick={pyramidDescr} className={classes.expandable}>
              {" "}
              Pyramid
            </div>
            {pyramid && (
              <div className={classes.descr}>
                <span>
                  It can help you broaden your spectrum of vision horizontally
                </span>
              </div>
            )}
          </li>
          <li>
            <div onClick={tableDescr} className={classes.expandable}>
              Table
            </div>
            {table && (
              <div className={classes.descr}>
                <span>
                  It can help you broaden your spectrum of vision horizontally
                  and vertically
                </span>
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MainPage;
