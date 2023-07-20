import { getFeaturedEvents } from "../dummyData";
import EventList from "../component/event/eventList";

export default function HomePage() {
  const FeaturedEvents = getFeaturedEvents();
  return (
    <div>
      <EventList item={FeaturedEvents} />
    </div>
  );
}
