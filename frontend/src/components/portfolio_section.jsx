import { useEffect, useRef, useState } from "react";

function FadeInOnScroll({ children }) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`fade-in ${visible ? "animate-in" : ""}`}>
      {children}
    </div>
  );
}

export default function PortfolioGrid({ portfolioItems }) {
  return (
    <section id="portfolio" className="bg-black/30 py-20">
                <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold mb-4 text-red-400">Projects</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Showcasing my recent work and contributions to various projects
            </p>
          </div>
        <div className="p-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
              <FadeInOnScroll key={item.id}>
            <div className="relative overflow-hidden cursor-pointer rounded-lg bg-gray-800 hover:transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10 group"
            onClick={() => window.open(item.link, "_blank")}
            >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                    <p className="text-red-400 text-sm">{item.field}</p>
                  </div>
                </div>
              </div>
            </FadeInOnScroll>
          ))}
      </div>
    </section>
  );
}
