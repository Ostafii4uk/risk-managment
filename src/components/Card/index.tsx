export const Card = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`rounded-2xl shadow-md border border-[#333] p-6 bg-[#272829] ${className}`}
  >
    {children}
  </div>
);
