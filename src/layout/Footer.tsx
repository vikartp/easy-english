import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Easy English</h3>
            <p>हिंदी भाषियों के लिए बनाया गया सबसे बेहतरीन अंग्रेजी सीखने का प्लेटफॉर्म</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="YouTube">📺</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>पाठ्यक्रम</h4>
            <ul>
              <li><a href="#beginner">शुरुआती स्तर</a></li>
              <li><a href="#intermediate">मध्यम स्तर</a></li>
              <li><a href="#advanced">उन्नत स्तर</a></li>
              <li><a href="#business">व्यावसायिक अंग्रेजी</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>सहायता</h4>
            <ul>
              <li><a href="#faq">सामान्य प्रश्न</a></li>
              <li><a href="#contact">संपर्क करें</a></li>
              <li><a href="#support">तकनीकी सहायता</a></li>
              <li><a href="#feedback">प्रतिक्रिया दें</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>कंपनी</h4>
            <ul>
              <li><a href="#about">हमारे बारे में</a></li>
              <li><a href="#careers">करियर</a></li>
              <li><a href="#privacy">गोपनीयता नीति</a></li>
              <li><a href="#terms">उपयोग की शर्तें</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-info">
            <p>&copy; 2025 Easy English. सभी अधिकार सुरक्षित।</p>
            <p className="footer-subtitle">Made with ❤️ for Hindi speakers learning English</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
