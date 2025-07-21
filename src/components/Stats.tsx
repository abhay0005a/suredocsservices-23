const Stats = () => {
  const stats = [
    {
      number: "1000+",
      label: "Happy Customers"
    },
    {
      number: "5+",
      label: "Years Experience"
    },
    {
      number: "50+",
      label: "Document Types"
    },
    {
      number: "99%",
      label: "Success Rate"
    }
  ];

  return (
    <section className="py-16 bg-blue-600">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="text-white">
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
              <div className="text-blue-100 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;