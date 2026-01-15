export interface IInputTypes {
  className?: string,
  type: string,
  placeholder?: string,
  value?: string,
  name?: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input({ className = "", type, placeholder, value, name, onChange }: IInputTypes) {
  return (
    <input
      type={type}
      className={`border border-input bg-background rounded-md px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full ${className}`}
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={onChange}
    />
  );
}
