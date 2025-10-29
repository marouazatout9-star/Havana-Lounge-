export function MenuSection({ title, subtitle, items, priceColumns }) {
  return (
    <div className="p-6">
      <h2 className="text-2xl text-green-400 font-bold mb-2">{title}</h2>
      {subtitle && <p className="text-green-300 mb-4">{subtitle}</p>}
      <div className="space-y-1">
        {items.map((item, idx) => (
          <div key={idx} className="flex justify-between text-white/80">
            <span>{item.name}</span>
            <span>{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
