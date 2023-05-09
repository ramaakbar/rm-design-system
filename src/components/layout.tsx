import { PropsWithChildren } from "react";
import Link from "next/link";

import Navbar from "./navbar";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-1">
        <div className="container grid grid-cols-6">
          <aside className="hidden md:col-span-1 md:block">
            <div className="flex flex-col space-y-2">
              <div>
                <h2 className="font-semibold">Getting Started</h2>
                <div className="flex flex-col">
                  <Link href={"/"} className="text-muted-foreground">
                    About
                  </Link>
                  <Link href={"/"} className="text-muted-foreground">
                    Colours
                  </Link>
                  <Link href={"/"} className="text-muted-foreground">
                    Typography
                  </Link>
                </div>
              </div>
              <div>
                <h2 className="font-semibold">Components</h2>
                <div className="flex flex-col">
                  <Link
                    href={"/components/button"}
                    className="text-muted-foreground"
                  >
                    Button
                  </Link>
                  <Link
                    href={"/components/dialog"}
                    className="text-muted-foreground"
                  >
                    Dialog
                  </Link>
                  <Link
                    href={"/components/form"}
                    className="text-muted-foreground"
                  >
                    Form
                  </Link>
                </div>
              </div>
            </div>
          </aside>
          <main className="col-span-6 max-w-4xl md:col-span-5">{children}</main>
        </div>
      </div>
    </div>
  );
}
