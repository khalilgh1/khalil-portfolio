import { FiMenu as Menu, FiX as X } from 'react-icons/fi';
import logo from '../assets/logo.png';

const Navbar = (props) => {
    const handleMenuItemClick = (item) => {
        props.scrollToSection(item.toLowerCase());
        props.setIsMenuOpen(false); // Close menu after clicking
    };

    return (
        <>
            <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${props.scrollY > 50 ? ' backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div className="text-2xl font-bold text-red-500">
                            <img src={logo} alt="By_Khalil" className="h-10 w-40 inline-block mr-2" />
                        </div>
                        
                        {/* Desktop Menu */}
                        <div className="hidden md:flex space-x-8">
                            {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => props.scrollToSection(item.toLowerCase())}
                                    className="hover:text-red-400 transition-all duration-300 relative group"
                                    style={{ background:'transparent', fontWeight:'normal' }}
                                >
                                    {item}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={() => props.scrollToSection('contact')}
                            className="hidden md:block hover:bg-red-700 px-6 py-2 rounded-full transition-all duration-300 transform5 hover:scale-105 text-white font-semibold"
                            style={{ background:'red' }}
                        >
                            Contact Me
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => props.setIsMenuOpen(!props.isMenuOpen)}
                            className="md:hidden text-white hover:text-red-400 transition-colors z-60 relative"
                        >
                            {props.isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Full-Screen Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-40 md:hidden transform transition-all duration-500 ease-in-out ${
                props.isMenuOpen 
                    ? 'translate-x-0 opacity-100' 
                    : 'translate-x-full opacity-0'
            }`}>
                {/* Background with blur and dark overlay */}
                <div className="absolute inset-0 bg-black/95 backdrop-blur-lg"></div>
                
                {/* Menu Content */}
                <div className="relative h-full flex flex-col justify-center items-center text-center px-8">

                    {/* Menu Items */}
                    <div className="space-y-8 flex flex-col items-center">
                        {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item, index) => (
                            <button
                                key={item}
                                onClick={() => handleMenuItemClick(item)}
                                className="block text-white text-4xl w-50 font-light hover:text-red-400 transition-all duration-300 transform hover:scale-110 relative group"
                                style={{ 
                                    animationDelay: `${index * 0.1}s`,
                                    animation: props.isMenuOpen ? 'slideInUp 0.6s ease-out forwards' : 'none'
                                }}
                            >
                                {item}
                                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                            </button>
                        ))}
                    </div>

                    {/* Contact Button */}
                    <div className="mt-12">
                        <button
                            onClick={() => handleMenuItemClick('contact')}
                            className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-full text-white w-50 font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                            Let's Work Together
                        </button>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 text-sm">
                        <p>&copy; 2025 By_Khalil</p>
                    </div>
                </div>
            </div>

            {/* Custom CSS for animations */}
            <style jsx>{`
                @keyframes slideInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </>
    )
}
export default Navbar;