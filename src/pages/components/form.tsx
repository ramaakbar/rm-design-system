import { useZodForm } from "@/hooks/useZodForm";
import { User } from "lucide-react";
import { z } from "zod";

import Button from "@/components/ui/button";
import Form from "@/components/ui/form/form";
import TextInput from "@/components/ui/form/textInput";

const schema = z.object({
  email: z.string().email().optional().or(z.literal("")),
  name: z
    .string()
    .min(2, {
      message: "Name must be at least 2 character(s)",
    })
    .optional()
    .or(z.literal("")),
  // count: z.coerce.number(),
});

export default function FormPage() {
  const form = useZodForm({ schema });

  return (
    <>
      <h1 className="mb-5 text-2xl font-bold">Form</h1>
      <Form
        form={form}
        className="mb-3 flex flex-col gap-2"
        onSubmit={(data) => {
          console.log(data);

          return new Promise((res) => setTimeout(res, 1000));
        }}
      >
        <div className="mb-3 grid gap-2">
          <TextInput
            label="Email"
            type="email"
            placeholder="Email"
            description="Enter your email address"
            startNode={User}
            {...form.register("email")}
          />
          <TextInput
            label="Name"
            type="text"
            required
            placeholder="Name"
            description="Enter your name"
            startNode={User}
            {...form.register("name")}
          />
        </div>

        <Button type="submit">Submit</Button>
      </Form>
    </>
  );
}
