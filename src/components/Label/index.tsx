export const Label = ({
  children,
  htmlFor,
  className = "",
}: {
  children: React.ReactNode;
  htmlFor: string;
  className?: string;
}) => (
  <label htmlFor={htmlFor} className={`text-sm font-medium text-[#eee] block mb-1 cursor-pointer ${className}`}>
    {children}
  </label>
);