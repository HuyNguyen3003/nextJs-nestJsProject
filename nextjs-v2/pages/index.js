//import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../helpers/api-util";

function HomePage(props) {
  // const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList items={props.events} />
    </div>
  );
}

export const getStaticProps = async () => {
  const Events = await getFeaturedEvents();
  return {
    props: {
      events: Events,
    },
    revalidate: 1800,
  };
};

export default HomePage;
