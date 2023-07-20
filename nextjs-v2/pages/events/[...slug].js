import { getFilteredEvents } from "../../dummyData";
import EventList from "../../component/event/eventList";
import { useRouter } from "next/router";

export default function FilteredEventPage() {
  const router = useRouter();
  const filterData = router.query.slug;
  if (!filterData)
    return (
      <>
        <p className="center">Loading...</p>
      </>
    );
  const time = { year: +filterData[0], month: +filterData[1] };
  const Events = getFilteredEvents(time);

  return (
    <>
      <EventList item={Events} />
    </>
  );
}
