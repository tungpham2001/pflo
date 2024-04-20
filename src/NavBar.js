import Logo from './images/TP.png';

function Navbar({ scrollToSection }) {
  return (
    <nav>
      <div className="logo">
        <img onClick={() => scrollToSection('home')} src={Logo} alt="Logo" />
      </div>
      <ul>
        <li onClick={() => scrollToSection('works')}>Works</li>
        <li onClick={() => scrollToSection('blogs')}>Blogs</li>
        <li onClick={() => scrollToSection('contact')}>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;