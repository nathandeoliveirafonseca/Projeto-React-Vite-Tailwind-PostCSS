function Services() {
  const services = [
    {
      title: "Desenvolvimento Web",
      description: "Criação de sites modernos, rápidos e responsivos.",
      icon: "💻",
    },
    {
      title: "Desenvolvimento de Sistemas",
      description: "Sistemas personalizados para diferentes necessidades.",
      icon: "⚙️",
    },
    {
      title: "Manutenção de Sites",
      description: "Correções, atualizações e melhorias em sites.",
      icon: "🔧",
    },
    {
      title: "Design Responsivo",
      description: "Sites adaptados para computadores, tablets e celulares.",
      icon: "📱",
    },
  ];

  return (
    <section className="w-full bg-slate-200 py-10 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-slate-800">
            Nossos Serviços
          </h2>

          <p className="text-slate-600 mt-2">
            Conheça alguns dos serviços que oferecemos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition text-center"
            >
              <div className="text-5xl mb-4">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-3">
                {service.title}
              </h3>

              <p className="text-slate-600">
                {service.description}
              </p>

              <button className="mt-5 bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-5 rounded-lg transition">
                Saiba mais
              </button>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Services;

