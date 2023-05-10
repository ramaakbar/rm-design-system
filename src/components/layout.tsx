import { PropsWithChildren } from "react";
import Link from "next/link";
import { useAtom } from "jotai";
import { Search } from "lucide-react";

import { commandMenuAtom } from "./commandMenu";
import Navbar from "./navbar";
import { Button } from "./ui";

export const navigationItem = {
  gettingStarted: [
    {
      name: "About",
      link: "/",
    },
    {
      name: "Colours",
      link: "/",
    },
    {
      name: "Typography",
      link: "/",
    },
  ],
  components: [
    {
      name: "Button",
      link: "/components/button",
    },
    {
      name: "Dialog",
      link: "/components/dialog",
    },
    {
      name: "Form",
      link: "/components/form",
    },
  ],
};

export default function Layout({ children }: PropsWithChildren) {
  const [, setOpen] = useAtom(commandMenuAtom);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-1">
        <div className="container grid grid-cols-6">
          <aside className="hidden lg:col-span-1 lg:block">
            <Button
              variant="outline"
              leftIcon={Search}
              className="relative mb-4 w-3/4 justify-start"
              onClick={() => setOpen(true)}
            >
              Search
              <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                <span className="text-xs">⌘</span>K
              </kbd>
            </Button>
            <div className="flex flex-col space-y-2">
              <div>
                <h2 className="font-semibold">Getting Started</h2>
                <div className="flex flex-col">
                  {navigationItem.gettingStarted.map((navItem) => (
                    <Link
                      key={navItem.link}
                      href={navItem.link}
                      className="text-muted-foreground"
                    >
                      {navItem.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="font-semibold">Components</h2>
                <div className="flex flex-col">
                  {navigationItem.components.map((navItem) => (
                    <Link
                      key={navItem.link}
                      href={navItem.link}
                      className="text-muted-foreground"
                    >
                      {navItem.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
          <main className="col-span-6 max-w-4xl pb-5 lg:col-span-5">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
