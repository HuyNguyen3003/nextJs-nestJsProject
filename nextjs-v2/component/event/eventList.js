import EventItem from "./eventItem";
import classes from "./event-list.module.css";

export default function EventList(props) {
  const { item } = props;
  return (
    <ul className={classes.list}>
      {item.map((event) => (
        <EventItem
          id={event.id}
          title={event.title}
          image={event.image}
          date={event.date}
          location={event.location}
        />
      ))}
    </ul>
  );
}
