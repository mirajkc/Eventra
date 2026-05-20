
"use client"
import { toDateTimeInputValue, toLocalDate } from "@/utils/toLocaleDate";
import { Controller } from "react-hook-form"

export interface IInputTypes {
  className?: string,
  type: string,
  placeholder?: string,
  name: string,
  id?: string,
  control?: any,
  errorMsg?: string
  disabled?: boolean
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
  onChange?: (val: string) => void
}

export default function Input({
  className = "",
  type,
  placeholder,
  name,
  id,
  disabled = false,
  control,
  errorMsg,
  onFocus,
  onBlur,
  onChange,
}: IInputTypes) {
  return (
    <div>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <input
            type={type}
            placeholder={placeholder}
            id={id || name}
            {...field}
            value={field.value || ""}
            className={`border border-input bg-background rounded-md px-3 py-2 text-sm ring-offset-background w-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${className}`}
            disabled={disabled}
            onFocus={onFocus}
            onBlur={(e) => {
              field.onBlur();
              if (onBlur) onBlur(e);
            }}
            onChange={(e) => {
              field.onChange(e);
              if (onChange) onChange(e.target.value);
            }}
          />
        )}
      />
      {errorMsg && <p className="text-[10px] text-destructive mt-1 ml-1">{errorMsg}</p>}
    </div>
  );
}

export function DateTimeInput({
  className = "",
  type,
  placeholder,
  name,
  disabled = false,
  control,
  errorMsg,
}: IInputTypes) {
  return (
    <div>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <input
            type={type}
            placeholder={placeholder}
            id={name}
            {...field}
            value={field.value ? toDateTimeInputValue(field.value) : ""}
            onChange={(e) => field.onChange(toLocalDate(e.target.value))}

            className={`border border-input bg-background rounded-md px-3 py-2 text-sm ring-offset-background w-full ${className}`}
            disabled={disabled}

          />
        )}
      />
      {errorMsg && <p className="text-[10px] text-destructive mt-1 ml-1">{errorMsg}</p>}
    </div>
  );
}