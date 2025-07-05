import { useNavigate } from 'react-router-dom';
import './Main.css';

const Main = () => {
  const navigate = useNavigate();

  const handleFeatureClick = (feature: string) => {
    switch (feature) {
      case 'pronunciation':
        navigate('/pronunciation-guide');
        break;
      case 'lessons':
        navigate('/lessons');
        break;
      case 'practice':
        navigate('/practice');
        break;
      case 'progress':
        navigate('/progress');
        break;
      default:
        break;
    }
  };
  return (
    <main className="main-content">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            अंग्रेजी सीखना हुआ <span className="highlight">आसान</span>
          </h1>
          <p className="hero-subtitle">
            हिंदी भाषियों के लिए विशेष रूप से डिज़ाइन किया गया अंग्रेजी सीखने का प्लेटफॉर्म
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">शुरू करें</button>
            <button className="btn btn-secondary">डेमो देखें</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="floating-cards">
            <div className="card card-1">
              <span className="hindi">नमस्ते</span>
              <span className="arrow">→</span>
              <span className="english">Hello</span>
            </div>
            <div className="card card-2">
              <span className="hindi">धन्यवाद</span>
              <span className="arrow">→</span>
              <span className="english">Thank you</span>
            </div>
            <div className="card card-3">
              <span className="hindi">पुस्तक</span>
              <span className="arrow">→</span>
              <span className="english">Book</span>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 className="section-title">हमारी विशेषताएं</h2>
          <div className="features-grid">
            <div className="feature-card" onClick={() => handleFeatureClick('lessons')}>
              <div className="feature-icon">📚</div>
              <h3>इंटरैक्टिव पाठ</h3>
              <p>व्यावहारिक उदाहरणों के साथ चरणबद्ध सीखने की प्रक्रिया</p>
            </div>
            <div className="feature-card" onClick={() => handleFeatureClick('practice')}>
              <div className="feature-icon">🎯</div>
              <h3>व्यक्तिगत अभ्यास</h3>
              <p>आपके स्तर के अनुसार कस्टमाइज़्ड अभ्यास और प्रश्न</p>
            </div>
            <div className="feature-card" onClick={() => handleFeatureClick('pronunciation')}>
              <div className="feature-icon">🔊</div>
              <h3>उच्चारण गाइड</h3>
              <p>सही उच्चारण सीखने के लिए ऑडियो सहायता</p>
            </div>
            <div className="feature-card" onClick={() => handleFeatureClick('progress')}>
              <div className="feature-icon">📊</div>
              <h3>प्रगति ट्रैकिंग</h3>
              <p>अपनी सीखने की प्रगति को ट्रैक करें और सुधार देखें</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>आज ही शुरू करें अपनी अंग्रेजी सीखने की यात्रा</h2>
            <p>हजारों भारतीयों ने पहले ही अपनी अंग्रेजी सुधारी है। अब आपकी बारी है!</p>
            <button className="btn btn-primary btn-large">मुफ्त में शुरू करें</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
