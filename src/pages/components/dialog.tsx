import { Lock, Mail } from "lucide-react";

import { Button, Dialog, PasswordInput, TextInput } from "@/components/ui";

export default function DialogPage() {
  return (
    <>
      <h1 className="mb-5 text-2xl font-bold">Dialog</h1>
      <div className="space-y-3">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold">Default</h2>
          <div className="flex flex-wrap gap-2">
            <Dialog
              triggerNode={<Button variant="outline">Dialog</Button>}
              title="This is a Dialog"
              footer={<Button type="submit">Save changes</Button>}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam sunt
              optio sint, facilis cupiditate perferendis excepturi dolorem
              deserunt, voluptas illum necessitatibus laudantium. Sit explicabo
              earum mollitia deleniti quam ullam doloribus laborum sequi
              dolorem, quaerat nihil error! Nam eos consectetur aliquam neque
              aspernatur deserunt maxime, facilis aut eum numquam iste labore.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            </Dialog>
          </div>
        </div>
        <div className="space-y-1">
          <h2 className="text-xl font-semibold">
            Dialog show on top when on mobile
          </h2>
          <div className="flex flex-wrap gap-2">
            <Dialog
              mobilePosition="top"
              triggerNode={<Button variant="outline">Dialog</Button>}
              title="Login Form"
            >
              <div className="space-y-4 text-left">
                <TextInput
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="example@email.com"
                  description="Enter your email address"
                  startNode={Mail}
                />
                <PasswordInput
                  label="Password"
                  name="password"
                  required
                  startNode={Lock}
                  placeholder="Password"
                />
                <Button type="submit">Save changes</Button>
              </div>
            </Dialog>
          </div>
        </div>
        <div className="space-y-1">
          <h2 className="text-xl font-semibold">Fullscreen on Mobile</h2>
          <div className="flex flex-wrap gap-2">
            <Dialog
              fullscreen
              triggerNode={<Button variant="outline">Dialog</Button>}
              title="Login Form"
            >
              <div className="space-y-4 text-left">
                <TextInput
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="example@email.com"
                  description="Enter your email address"
                  startNode={Mail}
                />
                <PasswordInput
                  label="Password"
                  name="password"
                  required
                  startNode={Lock}
                  placeholder="Password"
                />
                <Button type="submit">Save changes</Button>
              </div>
            </Dialog>
          </div>
        </div>
      </div>
    </>
  );
}
