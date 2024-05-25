import React from "react";
import {
  useForm,
  FieldValues,
  FormProvider,
  SubmitHandler,
} from "react-hook-form";

type TFormProps = {
  children: React.ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
};

const DForm = ({ children, onSubmit }: TFormProps) => {
  const methods = useForm();

  const submit: SubmitHandler<FieldValues> = (data: any) => {
    onSubmit(data);
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submit)} className="space-y-3">
        {children}
      </form>
    </FormProvider>
  );
};

export default DForm;
