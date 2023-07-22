export async function getFeaturedEvents() {
  const allEvent = await getAllEvents();
  return allEvent.filter((event) => event.isFeatured);
}

export async function getAllEvents() {
  const res = await fetch(
    "https://realtimedb-d5625-default-rtdb.firebaseio.com/events.json"
  );
  const data = await res.json();
  const events = [];
  for (const key in data) {
    events.push({ id: key, ...data[key] });
  }
  return events;
}

export async function getEventById(id) {
  const allEvent = await getAllEvents();
  return allEvent.find((event) => event.id === id);
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}
