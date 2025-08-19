const Services = (props) => {
    return (
        <section id="services" className="bg-black/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold mb-4 text-red-400">Services</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {props.services.map((service, index) => (
              <div key={index} className="fade-in group">
                <div className="h-full bg-black/30 p-6 rounded-lg border border-gray-700 hover:border-red-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/10">
                  <service.icon className="text-red-400 mb-4 group-hover:text-red-300 transition-colors" size={40} />
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-red-200 transition-colors">{service.title}</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}
export default Services;