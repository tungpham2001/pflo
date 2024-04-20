import React, { useRef } from 'react';
import NavBar from './NavBar';
import './App.css';

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

  return (
    <div>
      <NavBar scrollToSection={scrollToSection} />
      <main>
        <section ref={homeRef}>
          <LandingPage/>
        </section>
        <section ref={worksRef}>
          <WorkPage/>
        </section>
        <section ref={blogsRef}>
          <BlogPage/>
        </section>
        <section ref={contactRef}>
          <ContactPage/>
        </section>
      </main>
    </div>
  );
}

export default App;
