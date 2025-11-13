import type { Event } from "@prisma/client";

export type EventCardProps = {
  event: Event;
  onClick: (eventId: number) => void;
};

export default function EventCard({ event, onClick }: EventCardProps) {
  return (
    <div
      role="button"
      onClick={() => onClick(event.id)}
      className="w-full border rounded-lg aspect-video"
    >
      <h2 className="text-lg font-semibold p-4">{event.title}</h2>
      <p className="px-4">{event.description}</p>
    </div>
  );
}
