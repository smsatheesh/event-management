import {
  useParams,
  useNavigate,
  useRouteLoaderData,
  redirect,
  Await,
} from "react-router-dom";

import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

export default function EventDetailPage() {
  const navigate = useNavigate();
  const { event, events } = useRouteLoaderData("event-detail");

  return (
    <>
      <Suspense fallback={<p>Loading....</p>}>
        <Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p>Loading....</p>}>
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
        <button onClick={() => navigate(-1)}>← Back</button>
      </Suspense>
    </>
  );
}

export async function action({ request, params }) {
  const response = await fetch(
    `http://localhost:8080/events/${params.eventId}`,
    {
      method: request.method,
    },
  );

  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: "Could not delete an event" }),
      { status: 500 },
    );
  }

  return redirect("/events");
}

async function loadEvent(eventId) {
  const response = await fetch(`http://localhost:8080/events/${eventId}`);

  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: "Could not fetch event details" }),
      { status: 500 },
    );
  }

  const resData = await response.json();
  return resData.event;
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

export async function loader({ params }) {
  return {
    events: loadEvents(),
    event: loadEvent(params.eventId),
  };
}
