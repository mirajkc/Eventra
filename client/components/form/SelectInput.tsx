import { Controller } from "react-hook-form";

interface ISelectInput {
  name: string;
  control: any;
  errorMsg?: string;
  placeholder?: string;
  options: { value: string; label: string }[];
}

export default function SelectInput({ name, control, errorMsg, placeholder, options }: ISelectInput) {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <select {...field}>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        )}
      />
    </>
  );
}