import classes from "./personalLinks.module.css";

import githubLogo from "../layoutIcons/github.png";

function PersonalLinks() {
  return (
    <div className={classes.personal}>
      Made by
      <a
        className={classes.personalLink}
        target="_blank"
        rel="noreferrer"
        href="https://github.com/DMaladyn"
      >
        <img className={classes.personalIcon} src={githubLogo} />
        DMaladyn
      </a>
      <a
        className={classes.personalLink}
        target="_blank"
        rel="noreferrer"
        href="https://github.com/DMaladyn"
      >
        ☕BuyMeACoffee
      </a>
    </div>
  );
}

export default PersonalLinks;
