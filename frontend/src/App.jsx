import React, { useState, useEffect, use } from 'react';
import { ChevronUp, Mail, Phone, MapPin, Menu, X, Code, Brain, Shield, Smartphone } from 'lucide-react';
import { FaGithub, FaLinkedin  } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";
import Aurora from './components/Aurora';

//firebase
import {db} from './firebase';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';



import './App.css';

//page components
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Stats from './components/stats';
import Services from './components/services';
import PortfolioSection from './components/portfolio_section';
import Contact from './components/contact';
import Footer from './components/footer';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [visibleStats, setVisibleStats] = useState(false);


  const [projects, setProjects] = useState([]);
  const [projects_loaded, setProjectsLoaded] = useState(false);

  //load the projects from firebase
  useEffect(() => {
    const checkFirebase = async () => {
      try {
        const q = query(collection(db, 'projects'), orderBy('order', 'asc'));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        console.log(data)
        setProjects(({}) => data);
        setProjectsLoaded(true);
      } catch (error) {
        console.error("Firebase test failed:", error);
      }
    };

    checkFirebase();
  }, []);



  useEffect(() => {
    console.log('App mounted');
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === 'stats') {
              setVisibleStats(true);
            }
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };


  const services = [
    { icon: Code, title: 'Web Development', description: 'Modern, responsive websites built with cutting-edge technologies.' },
    { icon: Smartphone, title: 'Mobile Apps', description: 'Native and cross-platform mobile applications for iOS and Android.' },
    { icon: Brain, title: 'AI integration', description: 'Enhance your applications with advanced AI tools.' },
    { icon: Shield, title: 'Web Security Solutions', description: 'Comprehensive security implementations and vulnerability assessments.' }
  ];
  const contactItems = [
        { icon: Mail, title: 'Email', detail: 'khalil.ghanem.dev@gmail.com', link: 'mailto:khalil.ghanem.dev@gmail.com' },
        { icon: Phone, title: 'Phone', detail: '+213 0775 07 56 96', link: 'tel:0775075696' },
        { icon: MapPin, title: 'Location', detail: 'Constantine/Algiers, Algeria', link: 'https://maps.app.goo.gl/boiPe9wG3adi8vmm9' }
    ];
  const socialLinks =[
    { icon: FaGithub, link: 'https://github.com/khalilgh1/' },
    { icon: FaLinkedin, link: 'https://www.linkedin.com/in/khalil-ghanem-795845316/' },
    { icon: SiLeetcode, link: 'https://leetcode.com/u/khalilgh/' }
  ];

  return (
    <div className=" text-white min-h-screen relative overflow-x-hidden">
      {/* Circuit board background pattern */}
      <div className="fixed inset-0 -z-1 pointer-events-none">
        <Aurora
              
          colorStops={["#3f0c0c","#ff3232" ,"#e01010" ]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      {/* Navigation */}
      <Navbar scrollY={scrollY} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} scrollToSection={scrollToSection} />
      

      {/* Hero Section */}
      <Hero scrollToSection={scrollToSection} />
      

      {/* About Section */}
      <About services = {services} />

      {/* Stats Section */}
      <Stats visibleStats={visibleStats} />
      

      {/* Services Section */}
      <Services services={services} />
      

      {/* Portfolio Section */}
      <PortfolioSection portfolioItems={projects} />

      
      {/* Contact Section */}
      <Contact contactItems={contactItems} />
      

      {/* Footer */}
      <Footer scrollToSection={scrollToSection} socialLinks={socialLinks} />

      {/* Scroll to top button */}
      {scrollY > 300 && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 bg-red-600 hover:bg-red-700 p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-50"
        >
          <ChevronUp size={24} />
        </button>
      )}

      <style jsx>{`
        .fade-in {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
