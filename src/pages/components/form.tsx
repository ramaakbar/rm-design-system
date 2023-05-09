import { useZodForm } from "@/hooks/useZodForm";
import parse from "date-fns/parse";
import { Lock, Mail, User } from "lucide-react";
import { z } from "zod";

import {
  Button,
  Checkbox,
  DateInput,
  DropzoneInput,
  Form,
  InputWrapper,
  NativeSelect,
  PasswordInput,
  Radio,
  TextArea,
  TextInput,
} from "@/components/ui";

//  Form schema
const tech = ["React", "Vue", "Svelte"] as const;

const gender = [
  {
    label: "Choose gender",
    value: "",
  },
  {
    label: "Male",
    value: "male",
  },
  {
    label: "Female",
    value: "female",
  },
] as const;

const style = ["Tailwind", "CSS", "SCSS"] as const;

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
  gender: z.union([z.literal(gender[1].value), z.literal(gender[2].value)]),
  address: z
    .string()
    .min(2, {
      message: "Address must be at least 2 character(s)",
    })
    .optional()
    .or(z.literal("")),
  tech: z.array(z.enum(tech)).min(2, {
    message: "Pick atleast 2 tech",
  }),
  style: z.enum(style, {
    errorMap: () => ({ message: "Required input" }),
  }),
  birthDate: z.string(),
  picture: z.array(z.custom<File>((v) => v instanceof File)).optional(),
});

export default function FormPage() {
  const form = useZodForm({
    schema,
    defaultValues: {
      tech: [],
      gender: undefined,
      birthDate: "",
      style: undefined,
      picture: undefined,
    },
  });

  const promiseMock = (data: any) =>
    new Promise((res) => setTimeout(res, 1000)).then(() => {
      const date = parse(data.birthDate, "d MMM yyyy", new Date());
      data.birthDate = date;
      console.log(data);
    });

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
            placeholder="example@email.com"
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
            {gender.map((option) => (
              <option key={option.label} value={option.value}>
                {option.label}
              </option>
            ))}
          </NativeSelect>
          <TextArea
            label="Address"
            placeholder="Address"
            error={form.formState.errors.address?.message}
            {...form.register("address")}
          />
          <InputWrapper
            label="Tech"
            required
            name="check"
            description="Select your favorite javascript framework"
            error={form.formState.errors.tech?.message}
          >
            <div className="space-y-2">
              {tech.map((val) => (
                <Checkbox
                  key={val}
                  label={val}
                  description="asdasd"
                  {...form.register("tech")}
                  value={val}
                />
              ))}
            </div>
          </InputWrapper>
          <InputWrapper
            label="Styling"
            name="check"
            required
            description="Select your prefered styling"
            error={form.formState.errors.style?.message}
          >
            <div className="space-y-2">
              {style.map((option) => (
                <Radio
                  key={option}
                  label={option}
                  value={option}
                  {...form.register("style")}
                />
              ))}
            </div>
          </InputWrapper>
          <DateInput
            label="Birth Date"
            error={form.formState.errors.birthDate?.message}
            {...form.register("birthDate")}
          />
          <DropzoneInput
            maxFiles={3}
            label="Picture"
            accept={{
              "image/*": [],
            }}
            description="Max 3 Files, up to 2MB (Only accept image)"
            error={form.formState.errors.picture?.message}
            {...form.register("picture")}
          />
        </div>
        <Button type="submit" isLoading={form.formState.isSubmitting}>
          Submit
        </Button>
      </Form>
      <div></div>
    </>
  );
}
