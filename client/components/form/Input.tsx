
"use client"
import { Controller } from "react-hook-form"

export interface IInputTypes {
  className?: string,
  type: string,
  placeholder?: string,
  value?: string,
  control?: any,
  errorMsg?: string
}

export default function Input({ className = "", type, placeholder, value = '', control, errorMsg }: IInputTypes) {
  return (
    <div>
      <Controller
        control={control}
        name={value}
        render={({ field }) => (
          <input
            type={type}
            placeholder={placeholder}
            id={value}
            {...field}
            className={`border border-input bg-background rounded-md px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full ${className}`}
          />
        )}
      />
      <span>{errorMsg}</span>
    </div>
  );
}
