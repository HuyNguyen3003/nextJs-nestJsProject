import { getAllEvents } from "../../dummyData";
import EventList from "../../component/event/eventList";
import EnventSearch from "../../component/event/envent-search";
import { useRouter } from "next/router";

export default function AllEventPage() {
  const router = useRouter();
  const Events = getAllEvents();
  const findEvent = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };
  return (
    <>
      <EnventSearch onSearch={findEvent} className="center" />
      <EventList item={Events} />
    </>
  );
}
