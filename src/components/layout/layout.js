import MainNavigation from "./mainNavigation";
import classes from "./layout.module.css";

/* Layout joins together MainNavigation and whichever component url is pointing at */
function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
