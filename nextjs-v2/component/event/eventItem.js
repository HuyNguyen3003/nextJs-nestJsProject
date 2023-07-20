import classes from "./event-item.module.css";
import Button from "../ui/button";
import DateIcon from "../icons/icons/date-icon";
import AddressIcon from "../icons/icons/address-icon";
import ArrowIcon from "../icons/icons/arrow-right-icon";

export default function EventItem(props) {
  const { title, image, date, location, id } = props;
  const humanReadabDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  let formattedAddress;
  if (location !== undefined && location !== null) {
    formattedAddress = location.replace(", ", "\n ");
  }
  const exploreLink = `/events/${id}`;
  return (
    <li className={classes.item}>
      <img src={"/" + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanReadabDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span className={classes.icons}>Explore Event</span>
            <span>
              <ArrowIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}
