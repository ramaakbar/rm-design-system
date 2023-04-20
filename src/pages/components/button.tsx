import React from "react";
import { Euro, Mail } from "lucide-react";

import Button from "@/components/ui/button";
import Link from "@/components/ui/link";

export default function ButtonPage() {
  return (
    <>
      <h1 className="mb-5 text-2xl font-bold">Button</h1>
      <div className="space-y-3">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold">Default</h2>
          <div className="flex flex-wrap gap-2">
            <Button>Button</Button>
            <Button disabled>Button Disabled</Button>
            <Button isLoading>Button</Button>
          </div>
        </div>
        <div className="space-y-1">
          <h2 className="text-xl font-semibold">Secondary</h2>
          <div className="flex flex-wrap gap-2">
            <Button variant="secondary">Button</Button>
            <Button variant="secondary" disabled>
              Button Disabled
            </Button>
            <Button variant="secondary" isLoading>
              Button
            </Button>
          </div>
        </div>
        <div className="space-y-1">
          <h2 className="text-xl font-semibold">Ghost</h2>
          <div className="flex flex-wrap gap-2">
            <Button variant="ghost">Button</Button>
            <Button variant="ghost" disabled>
              Button Disabled
            </Button>
            <Button variant="ghost" isLoading>
              Button
            </Button>
          </div>
        </div>
        <div className="space-y-1">
          <h2 className="text-xl font-semibold">Outline</h2>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline">Button</Button>
            <Button variant="outline" disabled>
              Button Disabled
            </Button>
            <Button variant="outline" isLoading>
              Button
            </Button>
          </div>
        </div>
        <div className="space-y-1">
          <h2 className="text-xl font-semibold">Destructive</h2>
          <div className="flex flex-wrap gap-2">
            <Button variant="destructive">Button</Button>
            <Button variant="destructive" disabled>
              Button
            </Button>
            <Button variant="destructive" isLoading>
              Button
            </Button>
          </div>
        </div>
        <div className="space-y-1">
          <h2 className="text-xl font-semibold">Button with icon</h2>
          <div className="flex flex-wrap gap-2">
            <Button leftIcon={Mail} rightIcon={Euro}>
              Button
            </Button>
            <Button leftIcon={Mail} rightIcon={Euro} disabled>
              Button
            </Button>
            <Button leftIcon={Mail} rightIcon={Euro} isLoading>
              Button
            </Button>
          </div>
        </div>
        <div className="space-y-1">
          <h2 className="text-xl font-semibold">Link</h2>
          <div className="space-x-2">
            <Link href={"/"}>About page</Link>
            <Link href={"https://google.com"} external variant="subtle">
              Google
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
