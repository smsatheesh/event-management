import { Suspense } from "react";
import { useLoaderData, Await } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  const { events } = useLoaderData();

  return (
    <Suspense fallback={<p className="content">Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return { isError: true, message: "Could not fetch events" };
    throw new Response(JSON.stringify({ message: "Could not fetch events" }), {
      status: 500,
    });
  }

  const resData = await response.json();
  return resData.events;
}

export async function loader() {
  return {
    events: loadEvents(),
  };
}

export default EventsPage;
