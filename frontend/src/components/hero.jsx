import GradientText from './GradientText'
const Hero = (props) => {
    return (
        <section id="home" className="bg-black/30 w-screen min-h-screen flex items-center justify-center relative over">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in">
            <GradientText
colors={[
  "#ff4500", // blazing orange-red
  "#ebd65fff", // vivid red
  "#cc0000", // dark scarlet
  "#800000", // maroon
  "#330000"  // near-black red
]}

            animationSpeed={3}
            showBorder={false}
            className="custom-class"
            >
  Why Choose Me?
</GradientText>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              You're not just looking for a website — you're looking for results.
I create digital solutions that grow your audience, enhance your presence, and drive real business impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => props.scrollToSection('portfolio')}
                className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                style={{ background:'red' }}
              >
                View My Work
              </button>
              <button
                onClick={() => props.scrollToSection('contact')}
                className="border-2 border-red-500 hover:bg-red-500 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
    );
}
export default Hero;