import { Link } from "react-router-dom";

import classes from "./mainNavigation.module.css";

/* MainNavigation is top-bar responsible for navigation on the site using Links */
function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link to="/Quick-Read" className={classes.logo}>
        Quick Read
      </Link>
      <div className={classes.links}>
        <ul>
          <li>
            <Link to="/Quick-Read/pyramid">Pyramid</Link>
          </li>
          <li>
            <Link to="/Quick-Read/table">Table</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default MainNavigation;
