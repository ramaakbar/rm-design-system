import { useZodForm } from "@/hooks/useZodForm";
import { Lock, Mail, User } from "lucide-react";
import { z } from "zod";

import {
  Button,
  Form,
  NativeSelect,
  PasswordInput,
  TextArea,
  TextInput,
} from "@/components/ui";

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
  gender: z.union([z.literal("Male"), z.literal("Female")]),
  address: z
    .string()
    .min(2, {
      message: "Address must be at least 2 character(s)",
    })
    .optional()
    .or(z.literal("")),
});

export default function FormPage() {
  const form = useZodForm({ schema });

  const promiseMock = (data: any) =>
    new Promise((res) => setTimeout(res, 1000)).then(() => console.log(data));

  return (
    <>
      <h1 className="mb-5 text-2xl font-bold">Example Form</h1>
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
            error={form.formState.errors.email?.message}
            {...form.register("email")}
          />
          <TextInput
            label="Name"
            type="text"
            required
            placeholder="Name"
            description="Enter your name"
            startNode={User}
            error={form.formState.errors.name?.message}
            {...form.register("name")}
          />
          <PasswordInput
            label="Password"
            required
            startNode={Lock}
            placeholder="Password"
            error={form.formState.errors.password?.message}
            {...form.register("password")}
          />
          <NativeSelect
            label="Gender"
            required
            error={form.formState.errors.gender?.message}
            {...form.register("gender")}
          >
            <option value="" disabled>
              Choose gender
            </option>
            {schema.shape.gender.options.map((op) => (
              <option key={op.value} value={op.value}>
                {op.value}
              </option>
            ))}
          </NativeSelect>
          <TextArea
            label="Address"
            placeholder="Address"
            error={form.formState.errors.address?.message}
            {...form.register("address")}
          />
        </div>
        <Button type="submit" isLoading={form.formState.isSubmitting}>
          Submit
        </Button>
      </Form>
    </>
  );
}
