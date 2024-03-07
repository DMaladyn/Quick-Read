import MainNavigation from "./mainNavigation";
import PersonalLinks from "../parts/personalLinks.jsx";

import classes from "./layout.module.css";

/* Layout joins together MainNavigation and whichever component url is pointing at */
function Layout(props) {
  return (
    <div className={classes.layoutContainer}>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
      <PersonalLinks />
    </div>
  );
}

export default Layout;
