import { useRouter } from "next/router";
import { getEventById } from "../../dummyData";
import EventContent from "../../component/event-detail/event-content";
import EventLogistics from "../../component/event-detail/event-logistics";
import EventSummary from "../../component/event-detail/event-summary";

export default function DetailEventIs() {
  const { query } = useRouter();
  const event = getEventById(query.idEvent);
  if (!event)
    return (
      <div>
        <p>No event found</p>
      </div>
    );
  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
}
