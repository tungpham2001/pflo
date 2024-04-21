import React, { useRef, useEffect } from 'react';
import NavBar from './NavBar';
import './App.css';
import './style/CyberneticTree.css';

// pages
import LandingPage from './pages/LandingPage';
import WorkPage from './pages/WorkPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';

function App() {
  const homeRef = useRef(null);
  const worksRef = useRef(null);
  const blogsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (section) => {
    switch (section) {
      case 'home':
        homeRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'works':
        worksRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'blogs':
        blogsRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'contact':
        contactRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          switch (entry.target.getAttribute('data-section')) {
            case 'home':
              document.body.style.backgroundColor = '#557A95'; // Color for Home
              break;
            case 'works':
              document.body.style.backgroundColor = '#B1A296'; // Color for Works
              break;
            case 'blogs':
              document.body.style.backgroundColor = '#7A68B4'; // Color for Blogs
              break;
            case 'contact':
              document.body.style.backgroundColor = '#5D5C61'; // Color for Contact
              break;
            default:
              document.body.style.backgroundColor = '#557A95';
          }
        }
      });
    }, {
      threshold: 0.5 // Trigger when 50% of the element is visible
    });

    const sections = [homeRef.current, worksRef.current, blogsRef.current, contactRef.current];
    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div>
      <NavBar scrollToSection={scrollToSection} />
      <main>
        <section ref={homeRef} data-section="home">
          <LandingPage/>
        </section>
        <section ref={worksRef} data-section="works">
          <WorkPage/>
        </section>
        <section ref={blogsRef} data-section="blogs">
          <BlogPage/>
        </section>
        <section ref={contactRef} data-section="contact">
          <ContactPage/>
        </section>
      </main>
    </div>
  );
}

export default App;
