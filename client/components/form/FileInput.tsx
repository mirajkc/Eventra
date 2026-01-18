
"use client"
import { Controller } from "react-hook-form"

export interface IInputTypes {
  className?: string,
  control?: any,
  errorMsg?: string,
  name: string

}

export default function FileInput({
  className = "",
  control,
  errorMsg,
  name
}: IInputTypes) {
  return (
    <div>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <input
            type="file"
            {...field}
            value={field.value || ""}
            className={`border border-input bg-background rounded-md px-3 py-2 text-sm ring-offset-background w-full ${className}`}
          />
        )}
      />
      <span>{errorMsg}</span>
    </div>
  );
}

