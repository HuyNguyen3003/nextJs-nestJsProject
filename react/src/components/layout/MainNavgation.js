import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

export default function MainNavgation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">AllMeetups</Link>
          </li>
          <li>
            <Link to="/new">NewMeetup</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
