import Link from "next/link";
import React from "react";
import classes from "./The.Header.module.scss";
function TheHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}> Logo </div>
      <nav className={classes.line}>
        <Link className={classes.link} href={"/"}>
          Home
        </Link>
        <Link className={classes.link} href={"/blog"}>
          Blog
        </Link>
        <Link className={classes.link} href={"/about"}>
          About
        </Link>
      </nav>
      <a className={classes.contact} href="#">
        Contact
      </a>
    </header>
  );
}

export default TheHeader;
