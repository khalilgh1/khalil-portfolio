import { useState, useEffect } from 'react';
const Stats = (props) => {
    return (
        <section id="stats" className="bg-black/30 py-20 fade-in">
        <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: 8, suffix: '+', label: 'Projects Completed' },
              { number: 500, suffix: '+', label: 'Coding Hours' },
              { number: 3, suffix: '+', label: 'Years Experience' },
              { number: 50, suffix: '+', label: 'Technologies & Tools Used ' }
            ].map((stat, index) => (
              <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl md:text-5xl font-bold text-red-400 mb-2">
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} visibleStats = {props.visibleStats} />
                </div>
                <div className="text-gray-300 text-sm md:text-base group-hover:text-white transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}
const AnimatedCounter = (props) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!props.visibleStats) return;

      const duration = 2000; // duration in milliseconds
      let start = 0;
      const increment = props.end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= props.end) {
          setCount(props.end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }, [props.visibleStats, props.end]);

    return <span>{count}{props.suffix}</span>;
  };
export default Stats;
