export function CubanBorder({ children, className }) {
  return (
    <div className={`p-4 rounded-xl border-4 border-green-400 ${className}`}>
      {children}
    </div>
  );
}
