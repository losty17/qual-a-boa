import { prisma } from "~/.server/prisma";
import type { Route } from "./+types/index";
import EventCard from "~/components/events/event-card";
import { Fragment } from "react/jsx-runtime";
import EventDrawer from "~/components/events/event-drawer";
import { useState } from "react";
import type { Event } from "@prisma/client";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader({}: Route.LoaderArgs) {
  const events = await prisma.event.findMany();

  return { events };
}

export default function Home({ loaderData: { events } }: Route.ComponentProps) {
  const [event, setEvent] = useState<Event | null>(null);

  const handleOpenEventDrawer = (eventId: number) => {
    setEvent(events.find((event) => event.id === eventId) || null);
  };

  return (
    <Fragment>
      <div className="flex flex-col gap-4 p-8">
        <h1 className="text-2xl font-bold">Eaí, qual a boa?</h1>
        <div className="space-y-4 w-full">
          {events.map((event) => (
            <EventCard event={event} onClick={handleOpenEventDrawer} />
          ))}
        </div>
      </div>
      <EventDrawer
        open={Boolean(event)}
        onClose={() => setEvent(null)}
        event={event}
      />
    </Fragment>
  );
}
