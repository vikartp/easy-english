import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../hooks/useThemeHook';

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
    <nav className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-3 flex justify-between items-center h-14 relative">
        <Link to="/" className="flex flex-col items-start z-50 text-inherit no-underline">
          <h2 className="m-0 text-primary-600 text-lg font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
            Easy English
          </h2>
          <span className="text-xs text-gray-500 dark:text-gray-400 -mt-1">
            हिंदी से अंग्रेजी सीखें
          </span>
        </Link>
        
        <div className="flex items-center gap-3 z-50">
          <button 
            className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 rounded-full w-10 h-10 cursor-pointer text-lg flex items-center justify-center transition-all duration-300 shadow-sm hover:bg-primary-600 hover:border-primary-600 hover:scale-110 hover:rotate-12 hover:shadow-md"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          
          <button 
            className={`md:hidden flex flex-col justify-around w-6 h-6 bg-transparent border-none cursor-pointer p-0 z-50 ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className={`w-full h-0.5 bg-gray-800 dark:bg-gray-200 rounded-sm transition-all duration-300 origin-left ${isMenuOpen ? 'rotate-45' : ''}`}></span>
            <span className={`w-full h-0.5 bg-gray-800 dark:bg-gray-200 rounded-sm transition-all duration-300 ${isMenuOpen ? 'opacity-0 translate-x-5' : ''}`}></span>
            <span className={`w-full h-0.5 bg-gray-800 dark:bg-gray-200 rounded-sm transition-all duration-300 origin-left ${isMenuOpen ? '-rotate-45' : ''}`}></span>
          </button>
        </div>
        
        <div className={`hidden md:flex items-center`}>
          <ul className="flex list-none m-0 p-0 gap-4">
            <li><Link to="/" onClick={closeMenu} className={`text-gray-800 dark:text-gray-200 no-underline font-medium text-sm transition-all duration-300 py-2 px-3 rounded-md relative hover:text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:-translate-y-0.5 ${location.pathname === '/' ? 'text-primary-600 bg-primary-50 dark:bg-primary-900/20 border border-primary-600' : ''}`}>होम</Link></li>
            <li><Link to="/lessons" onClick={closeMenu} className={`text-gray-800 dark:text-gray-200 no-underline font-medium text-sm transition-all duration-300 py-2 px-3 rounded-md relative hover:text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:-translate-y-0.5 ${location.pathname === '/lessons' ? 'text-primary-600 bg-primary-50 dark:bg-primary-900/20 border border-primary-600' : ''}`}>पाठ</Link></li>
            <li><a href="#vocabulary" onClick={closeMenu} className="text-gray-800 dark:text-gray-200 no-underline font-medium text-sm transition-all duration-300 py-2 px-3 rounded-md relative hover:text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:-translate-y-0.5">शब्दावली</a></li>
            <li><a href="#grammar" onClick={closeMenu} className="text-gray-800 dark:text-gray-200 no-underline font-medium text-sm transition-all duration-300 py-2 px-3 rounded-md relative hover:text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:-translate-y-0.5">व्याकरण</a></li>
            <li><Link to="/practice" onClick={closeMenu} className={`text-gray-800 dark:text-gray-200 no-underline font-medium text-sm transition-all duration-300 py-2 px-3 rounded-md relative hover:text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:-translate-y-0.5 ${location.pathname === '/practice' ? 'text-primary-600 bg-primary-50 dark:bg-primary-900/20 border border-primary-600' : ''}`}>अभ्यास</Link></li>
            <li><a href="#about" onClick={closeMenu} className="text-gray-800 dark:text-gray-200 no-underline font-medium text-sm transition-all duration-300 py-2 px-3 rounded-md relative hover:text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:-translate-y-0.5">हमारे बारे में</a></li>
          </ul>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden fixed top-0 right-0 w-72 h-screen bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-l border-gray-200 dark:border-gray-700 flex flex-col justify-start items-center pt-20 transition-transform duration-300 shadow-xl ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <ul className="flex flex-col gap-0 w-full px-6">
            <li className="w-full text-center">
              <Link to="/" onClick={closeMenu} className={`block w-full py-3 text-base rounded-lg mb-2 border border-transparent transition-all duration-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:border-primary-600 ${location.pathname === '/' ? 'bg-primary-50 dark:bg-primary-900/20 border-primary-600 text-primary-600' : 'text-gray-800 dark:text-gray-200'}`}>होम</Link>
            </li>
            <li className="w-full text-center">
              <Link to="/lessons" onClick={closeMenu} className={`block w-full py-3 text-base rounded-lg mb-2 border border-transparent transition-all duration-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:border-primary-600 ${location.pathname === '/lessons' ? 'bg-primary-50 dark:bg-primary-900/20 border-primary-600 text-primary-600' : 'text-gray-800 dark:text-gray-200'}`}>पाठ</Link>
            </li>
            <li className="w-full text-center">
              <a href="#vocabulary" onClick={closeMenu} className="block w-full py-3 text-base rounded-lg mb-2 border border-transparent text-gray-800 dark:text-gray-200 no-underline transition-all duration-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:border-primary-600">शब्दावली</a>
            </li>
            <li className="w-full text-center">
              <a href="#grammar" onClick={closeMenu} className="block w-full py-3 text-base rounded-lg mb-2 border border-transparent text-gray-800 dark:text-gray-200 no-underline transition-all duration-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:border-primary-600">व्याकरण</a>
            </li>
            <li className="w-full text-center">
              <Link to="/practice" onClick={closeMenu} className={`block w-full py-3 text-base rounded-lg mb-2 border border-transparent transition-all duration-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:border-primary-600 ${location.pathname === '/practice' ? 'bg-primary-50 dark:bg-primary-900/20 border-primary-600 text-primary-600' : 'text-gray-800 dark:text-gray-200'}`}>अभ्यास</Link>
            </li>
            <li className="w-full text-center">
              <a href="#about" onClick={closeMenu} className="block w-full py-3 text-base rounded-lg mb-2 border border-transparent text-gray-800 dark:text-gray-200 no-underline transition-all duration-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:border-primary-600">हमारे बारे में</a>
            </li>
          </ul>
        </div>
      </div>
      
      {isMenuOpen && <div className="md:hidden fixed inset-0 bg-black/50 z-40" onClick={closeMenu}></div>}
    </nav>
  );
};

export default Navbar;
