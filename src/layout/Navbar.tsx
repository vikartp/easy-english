import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../hooks/useThemeHook';
import './Navbar.css';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <h2>Easy English</h2>
          <span className="navbar-subtitle">हिंदी से अंग्रेजी सीखें</span>
        </Link>
        
        <div className="navbar-right">
          <button 
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          
          <button 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        
        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="navbar-nav">
            <li><Link to="/" onClick={closeMenu} className={location.pathname === '/' ? 'active' : ''}>होम</Link></li>
            <li><Link to="/lessons" onClick={closeMenu} className={location.pathname === '/lessons' ? 'active' : ''}>पाठ</Link></li>
            <li><a href="#vocabulary" onClick={closeMenu}>शब्दावली</a></li>
            <li><a href="#grammar" onClick={closeMenu}>व्याकरण</a></li>
            <li><Link to="/practice" onClick={closeMenu} className={location.pathname === '/practice' ? 'active' : ''}>अभ्यास</Link></li>
            <li><a href="#about" onClick={closeMenu}>हमारे बारे में</a></li>
          </ul>
        </div>
      </div>
      
      {isMenuOpen && <div className="navbar-overlay" onClick={closeMenu}></div>}
    </nav>
  );
};

export default Navbar;
