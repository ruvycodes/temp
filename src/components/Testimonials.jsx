const testimonials = [
  {
    name: "Jane Doe",
    role: "Product Designer, New York",
    quote: "Their service was truly amazing! They tailored every aspect to my preferences and were very attentive to details.",
    backgroundImg: "https://plus.unsplash.com/premium_photo-1664300343282-907590ef2804?q=80&w=1882&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  },
  {
    name: "John Smith",
    role: "Software Engineer, San Francisco",
    quote: "Excellent experience from start to finish! They really know how to deliver quality and personalized service.",
    backgroundImg: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    avatar: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6"
},
{
    name: "Emily Brown",
    role: "Marketing Specialist, Chicago",
    quote: "I highly recommend them! Their attention to detail and customer-first approach exceeded my expectations.",
    backgroundImg: "https://plus.unsplash.com/premium_photo-1661910543973-61d61f94ffe2?q=80&w=1946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
  }
];

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-44">
      {/* Section Heading */}
      <h2 className="text-7xl text-gray-800 mb-16 pb-10 font-light">What our clients say about us</h2>

      {/* Testimonial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="relative">
              <img
                src={testimonial.backgroundImg}
                alt="Testimonial Background"
                className="w-full h-40 object-cover"
              />
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                <img
                  className="w-16 h-16 rounded-full border-4 border-white shadow-md"
                  src={testimonial.avatar}
                  alt={`${testimonial.name} Avatar`}
                />
              </div>
            </div>
            <div className="p-6 pt-12">
              <p className="text-gray-600 text-center text-sm font-medium mb-3">
                "{testimonial.quote}"
              </p>
              <div className="text-center">
                <p className="text-gray-800 font-semibold">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
