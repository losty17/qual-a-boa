import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "~/components/ui/drawer";
import type { Event } from "@prisma/client";
import { Button } from "../ui/button";

export type EventDrawerProps = {
  open: boolean;
  onClose: () => void;
  event: Event | null;
};

export default function EventDrawer({
  open,
  onClose,
  event,
}: EventDrawerProps) {
  return (
    <Drawer open={open} onClose={onClose}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{event?.title}</DrawerTitle>
          <DrawerDescription>{event?.description}</DrawerDescription>
        </DrawerHeader>

        <div className="w-full h-full overflow-y-auto px-4">
          {Array.from({ length: 450 }).map((_, index) => index + " ")}
        </div>

        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline" size="xl">
              Fechar
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
