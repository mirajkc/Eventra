import { Controller } from "react-hook-form";

interface ISelectInput {
  name: string;
  control: any;
  errorMsg?: string;
  placeholder?: string;
  options: { value: string; label: string }[];
  className?: string;
}

export default function SelectInput({ name, control, errorMsg, placeholder, options,className }: ISelectInput) {
  return (
    <div className={`w-full ${className}`}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <select
            {...field}
            className={`bg-transparent w-full h-full px-2 py-1 text-sm focus:outline-none cursor-pointer appearance-none rounded-md`}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value} className="bg-background text-foreground">
                {option.label}
              </option>
            ))}
          </select>
        )}
      />
      {errorMsg && <p className="text-[10px] text-destructive mt-1 ml-1">{errorMsg}</p>}
    </div>
  );
}