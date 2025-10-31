export function Stats() {
  const stats = [
    { value: "120+", label: "Реализованных проектов" },
    { value: "95%", label: "Довольных клиентов" },
    { value: "24/7", label: "Техническая поддержка" },
    { value: "5+ лет", label: "Опыт в AI разработке" },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="text-4xl md:text-5xl mb-2">{stat.value}</div>
              <div className="text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
