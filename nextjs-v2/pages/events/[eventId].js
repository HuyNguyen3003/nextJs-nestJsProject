import { Fragment } from "react";

import { getEventById, getFeaturedEvents } from "../../helpers/api-util";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";

function EventDetailPage(props) {
  if (!props.events) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <Fragment>
      <EventSummary title={props.events.title} />
      <EventLogistics
        date={props.events.date}
        address={props.events.location}
        image={props.events.image}
        imageAlt={props.events.title}
      />
      <EventContent>
        <p>{props.events.description}</p>
      </EventContent>
    </Fragment>
  );
}

export default EventDetailPage;

export const getStaticProps = async (context) => {
  const id = context.params.eventId;
  const Events = await getEventById(id);

  if (!Events) {
    return {
      notFound: true, // Trả về trang 404 (Page Not Found)
    };
  }

  return {
    props: {
      events: Events,
    },
    revalidate: 30,
  };
};

export const getStaticPaths = async () => {
  const events = await getFeaturedEvents();
  const paths = events.map((event) => ({ params: { eventId: event.id } }));

  return {
    paths: paths,
    fallback: "blocking",
  };
};
