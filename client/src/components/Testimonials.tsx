import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Got my DL renewed in just 3 days! Excellent service and very professional team.",
      name: "Rajesh Kumar",
      service: "Driving License"
    },
    {
      text: "They helped me get my son's birth certificate quickly. Very reliable and trustworthy.",
      name: "Priya Sharma",
      service: "Birth Certificate"
    },
    {
      text: "Smooth property transfer in Rohini. They handled all paperwork perfectly.",
      name: "Amit Singh",
      service: "Property Transfer"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
              <div>
                <div className="font-bold text-gray-800">{testimonial.name}</div>
                <div className="text-sm text-blue-600">{testimonial.service}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;