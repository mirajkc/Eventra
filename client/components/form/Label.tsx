
export interface ILabelTypes {
  className?: string,
  htmlFor?: string,
  children: React.ReactNode,
}
export default function Label({ className = "", htmlFor, children }: ILabelTypes) {
  return (
    <label className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`} htmlFor={htmlFor}>
      {children}
    </label>
  );
}