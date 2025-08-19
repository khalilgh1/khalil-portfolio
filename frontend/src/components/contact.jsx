const Contact = (props) => {
    return (
        <section id="contact" className="bg-black/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold mb-4 text-red-400">Get In Touch</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Ready to start your next project? Let's discuss how I can help bring your vision to life.
            </p>
          </div>
          <div className="">
            <div className="fade-in">
              <div className="bg-black/30 p-8 rounded-lg shadow-lg justify-center items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {props.contactItems.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.link}
                    className="flex items-center space-x-4 group hover:text-red-400 transition-colors"
                    target="_blank" rel="noopener noreferrer"
                  >
                    <contact.icon className="text-red-400 group-hover:text-red-300" size={24} />
                    <div>
                      <div className="font-semibold">{contact.title}</div>
                      <div className="text-gray-400 group-hover:text-gray-300">{contact.detail}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
export default Contact;