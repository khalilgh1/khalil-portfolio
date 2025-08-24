import logo from '../assets/logo.png';
const Footer = (props) => {
    return (
        <footer className="py-12 bg-black/50 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
                                      <div className="text-2xl font-bold text-red-500">
                                          <img src={logo} alt="By_Khalil" className="h-10 w-40 inline-block mr-2" />
                                      </div>
              <p className="text-gray-400">
                Transforming ideas into exceptional digital experiences through innovative technology solutions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-center">Quick Links</h3>
              <div className="space-y-2 flex flex-col flex-wrap items-center">
                {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((link) => (
                  <button
                    key={link}
                    onClick={() => props.scrollToSection(link.toLowerCase())}
                    className="block text-gray-400 hover:text-red-400 transition-colors w-50"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                {props.socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className="text-gray-400 hover:text-red-400 transition-colors transform hover:scale-110"
                    target="_blank"
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 By_Khalil. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
}
export default Footer;