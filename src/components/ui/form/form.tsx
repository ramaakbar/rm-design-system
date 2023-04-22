import { ComponentProps } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  UseFormReturn,
} from "react-hook-form";
import { twMerge } from "tailwind-merge";

interface Props<T extends FieldValues>
  extends Omit<ComponentProps<"form">, "onSubmit"> {
  form: UseFormReturn<T>;
  onSubmit: SubmitHandler<T>;
}

const Form = <T extends FieldValues>({
  form,
  onSubmit,
  children,
  className,
  ...props
}: Props<T>) => (
  <FormProvider {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} {...props}>
      <fieldset
        disabled={form.formState.isSubmitting}
        className={twMerge(className)}
      >
        {children}
      </fieldset>
    </form>
  </FormProvider>
);

export default Form;
