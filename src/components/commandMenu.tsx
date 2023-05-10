import { useEffect } from "react";
import { useRouter } from "next/router";
import { atom, useAtom } from "jotai";
import { AlignRight, BookOpen, Box } from "lucide-react";

import { navigationItem } from "./layout";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "./ui";

export const commandMenuAtom = atom(false);

export default function CommandMenu() {
  const [open, setOpen] = useAtom(commandMenuAtom);
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && e.metaKey) {
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [setOpen]);

  return (
    <>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type to search for component or page" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Getting Started">
            {navigationItem.gettingStarted.map((navItem) => (
              <CommandItem
                key={navItem.link}
                onSelect={() => {
                  setOpen(false);
                  router.push(navItem.link);
                }}
              >
                <BookOpen className="mr-2 h-4 w-4" />
                <span>{navItem.name}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Components">
            {navigationItem.components.map((navItem) => (
              <CommandItem
                key={navItem.link}
                onSelect={() => {
                  setOpen(false);
                  router.push(navItem.link);
                }}
              >
                <Box className="mr-2 h-4 w-4" />
                <span>{navItem.name}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
      <div className="fixed bottom-0 right-0 m-4 lg:hidden">
        <div
          className="rounded-full bg-primary p-4 transition-all hover:bg-primary/90"
          onClick={() => setOpen(true)}
        >
          <AlignRight size={28} className="stroke-primary-foreground" />
        </div>
      </div>
    </>
  );
}
