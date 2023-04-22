import { useZodForm } from "@/hooks/useZodForm";
import { Lock, Mail, User } from "lucide-react";
import { z } from "zod";

import Button from "@/components/ui/button";
import Form from "@/components/ui/form/form";
import PasswordInput from "@/components/ui/form/passwordInput";
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
  password: z.string().min(2, {
    message: "Password must be at least 2 character(s)",
  }),
});

export default function FormPage() {
  const form = useZodForm({ schema });

  const promiseMock = (data: any) =>
    new Promise((res) => setTimeout(res, 1000)).then(() => console.log(data));

  return (
    <>
      <h1 className="mb-5 text-2xl font-bold">Form</h1>
      <Form
        form={form}
        onSubmit={async (data) => {
          await promiseMock(data);
          form.reset();
        }}
      >
        <div className="mb-3 grid gap-3">
          <TextInput
            label="Email"
            type="email"
            placeholder="Email"
            description="Enter your email address"
            startNode={Mail}
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
          <PasswordInput
            label="Password"
            required
            startNode={Lock}
            placeholder="Password"
            {...form.register("password")}
          />
        </div>

        <Button type="submit" isLoading={form.formState.isSubmitting}>
          Submit
        </Button>
      </Form>
    </>
  );
}
