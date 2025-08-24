import pic from '../assets/pic3.jpg';
const About = (props) => {
    return (
        <section id="about" className="bg-black/30 py-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h2 className="text-4xl font-bold mb-6 text-red-400 text-center md:text-left sm:text-center">About Me</h2>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                
              </p>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  I'm a results-driven full-stack developer who builds fast, scalable web apps with clean UI and robust backend logic.
                   I specialize in React and Django, and as a machine learning enthusiast,
                    I integrate AI into applications to deliver smarter, more impactful solutions.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {props.services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <service.icon className="text-red-400 group-hover:text-red-300 transition-colors" size={20} />
                    <span className="text-sm font-medium group-hover:text-red-200 transition-colors">{service.title}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="fade-in">
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={pic}
                  alt="Professional developer"
                  className="rounded-lg shadow-2xl w-full h-[28rem] object-cover [object-position:50%_30%]"
                  style={{ filter: 'grayscale(1)' }}
                />


                <div className="absolute inset-0 bg-gradient-to-t from-red-900/20 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
export default About;