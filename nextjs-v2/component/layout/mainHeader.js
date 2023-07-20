import classes from "./main-header.module.css";
import Link from "next/link";

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.navigation}>
        <Link href="/">Next Event</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href="/events">Browse All Event</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
