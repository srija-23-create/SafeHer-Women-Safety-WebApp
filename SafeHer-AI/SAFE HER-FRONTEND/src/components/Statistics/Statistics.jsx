function Statistics() {
  const stats = [
    {
      number: "10K+",
      title: "Women Protected",
    },
    {
      number: "5K+",
      title: "SOS Alerts",
    },
    {
      number: "24/7",
      title: "AI Assistance",
    },
    {
      number: "99%",
      title: "Emergency Response",
    },
  ];

  return (
    <section className="bg-red-600 py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-4 gap-8">

          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 text-center shadow-lg"
            >
              <h2 className="text-4xl font-bold text-red-600">
                {stat.number}
              </h2>

              <p className="mt-3 text-gray-600">
                {stat.title}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Statistics;