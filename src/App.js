import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './NavBar';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
}

function Home() {
  return <h1>Home Page</h1>;
}

function Works() {
  return <h1>Works Page</h1>;
}

function Blogs() {
  return <h1>Blogs Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}

export default App;