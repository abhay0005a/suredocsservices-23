import { useState, useEffect } from "react";

const Stats = () => {
  const [counts, setCounts] = useState({ customers: 0, experience: 0, documents: 0, success: 0 });

  const stats = [
    {
      number: "1000+",
      label: "Happy Customers",
      key: "customers",
      target: 1000
    },
    {
      number: "5+",
      label: "Years Experience", 
      key: "experience",
      target: 5
    },
    {
      number: "50+",
      label: "Document Types",
      key: "documents", 
      target: 50
    },
    {
      number: "99%",
      label: "Success Rate",
      key: "success",
      target: 99
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            stats.forEach((stat) => {
              let count = 0;
              const increment = stat.target / 50;
              const timer = setInterval(() => {
                count += increment;
                if (count >= stat.target) {
                  count = stat.target;
                  clearInterval(timer);
                }
                setCounts(prev => ({ ...prev, [stat.key]: Math.floor(count) }));
              }, 50);
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats-section" className="py-16 bg-blue-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="text-white transform hover:scale-110 transition-all duration-300 cursor-pointer">
              <div className="text-4xl md:text-5xl font-bold mb-2 animate-pulse">
                {stat.key === 'customers' ? `${counts.customers}+` :
                 stat.key === 'experience' ? `${counts.experience}+` :
                 stat.key === 'documents' ? `${counts.documents}+` :
                 `${counts.success}%`}
              </div>
              <div className="text-blue-100 font-medium hover:text-white transition-colors duration-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;