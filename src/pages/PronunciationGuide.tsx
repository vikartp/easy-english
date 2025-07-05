import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ESSAYS_CONTENT, STORIES_CONTENT } from '../constants/contentData';
import type { ContentItem, WordTranslation } from '../constants/contentData';
import { speakText, stopSpeech } from '../utils/speechUtils';
import './PronunciationGuide.css';

type ContentMode = 'essays' | 'stories';

const PronunciationGuide = () => {
  const navigate = useNavigate();
  const [activeMode, setActiveMode] = useState<ContentMode>('essays');
  const [currentContentIndex, setCurrentContentIndex] = useState(0);
  const [currentContent, setCurrentContent] = useState<ContentItem[]>(ESSAYS_CONTENT);
  const [isPlaying, setIsPlaying] = useState(false);

  const goBack = () => {
    navigate('/');
  };

  // Update content when mode changes
  useEffect(() => {
    stopSpeech();
    setIsPlaying(false);
    setCurrentContentIndex(0);
    
    switch (activeMode) {
      case 'essays':
        setCurrentContent(ESSAYS_CONTENT);
        break;
      case 'stories':
        setCurrentContent(STORIES_CONTENT);
        break;
    }
  }, [activeMode]);

  const handleWordClick = (word: string) => {
    const currentItem = currentContent[currentContentIndex];
    const translation = currentItem.wordTranslations.find(
      (item: WordTranslation) => item.word.toLowerCase() === word.toLowerCase()
    );

    if (translation) {
      // Show Hindi translation in toast
      toast.info(
        <div className="translation-toast">
          <div className="word-info">
            <span className="english-word">{translation.word}</span>
            <span className="hindi-meaning">हिंदी: {translation.hindi}</span>
            {translation.pronunciation && (
              <span className="pronunciation">🔊 {translation.pronunciation}</span>
            )}
          </div>
        </div>,
        {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );

      // Speak the word
      speakText(translation.word, 0.8);
    }
  };

  const handleNext = () => {
    if (currentContentIndex < currentContent.length - 1) {
      setCurrentContentIndex(prev => prev + 1);
      stopSpeech();
      setIsPlaying(false);
    }
  };

  const handlePrevious = () => {
    if (currentContentIndex > 0) {
      setCurrentContentIndex(prev => prev - 1);
      stopSpeech();
      setIsPlaying(false);
    }
  };

  const handlePlayPause = () => {
    const currentItem = currentContent[currentContentIndex];
    
    if (isPlaying) {
      stopSpeech();
      setIsPlaying(false);
    } else {
      speakText(currentItem.content, 0.7);
      setIsPlaying(true);
    }
  };

  const renderClickableContent = (content: string) => {
    const words = content.split(/(\s+|[^\w\s])/);
    
    return words.map((word, index) => {
      const cleanWord = word.replace(/[^\w]/g, '').toLowerCase();
      const currentItem = currentContent[currentContentIndex];
      const hasTranslation = currentItem.wordTranslations.some(
        (item: WordTranslation) => item.word.toLowerCase() === cleanWord
      );

      if (hasTranslation && cleanWord.length > 0) {
        return (
          <span
            key={index}
            className="clickable-word"
            onClick={() => handleWordClick(cleanWord)}
            title="Click for Hindi meaning"
          >
            {word}
          </span>
        );
      }
      
      return <span key={index}>{word}</span>;
    });
  };

  const getModeIcon = (mode: ContentMode) => {
    switch (mode) {
      case 'essays': return '📝';
      case 'stories': return '📚';
    }
  };

  const currentItem = currentContent[currentContentIndex];

  return (
    <div className="pronunciation-guide">
      <div className="container">
        <div className="page-header">
          <button className="back-btn" onClick={goBack}>
            ← वापस होम पर जाएं
          </button>
          <h1>🔊 उच्चारण गाइड</h1>
          <p className="page-subtitle">अंग्रेजी पढ़ें, शब्दों पर क्लिक करें और हिंदी अर्थ देखें</p>
        </div>

        <div className="mode-selector">
          <button 
            className={`mode-btn ${activeMode === 'essays' ? 'active' : ''}`}
            onClick={() => setActiveMode('essays')}
          >
            📝 निबंध
          </button>
          <button 
            className={`mode-btn ${activeMode === 'stories' ? 'active' : ''}`}
            onClick={() => setActiveMode('stories')}
          >
            📚 कहानियां
          </button>
        </div>

        <div className="content-area">
          <div className="content-header">
            <div className="content-info">
              <span className="mode-icon">{getModeIcon(activeMode)}</span>
              <h2>{currentItem.title}</h2>
              <span className="content-counter">
                {currentContentIndex + 1} / {currentContent.length}
              </span>
            </div>
            
            <div className="audio-controls">
              <button 
                className={`play-btn ${isPlaying ? 'playing' : ''}`}
                onClick={handlePlayPause}
                title={isPlaying ? 'Pause reading' : 'Play reading'}
              >
                {isPlaying ? '⏸️' : '▶️'}
              </button>
            </div>
          </div>

          <div className="reading-content">
            <p className="content-text">
              {renderClickableContent(currentItem.content)}
            </p>
          </div>

          <div className="content-navigation">
            <button 
              className="nav-btn prev-btn"
              onClick={handlePrevious}
              disabled={currentContentIndex === 0}
            >
              ← पिछला
            </button>
            
            <div className="progress-indicator">
              <div className="progress-dots">
                {currentContent.map((_, index) => (
                  <span 
                    key={index}
                    className={`dot ${index === currentContentIndex ? 'active' : ''}`}
                    onClick={() => setCurrentContentIndex(index)}
                  />
                ))}
              </div>
            </div>
            
            <button 
              className="nav-btn next-btn"
              onClick={handleNext}
              disabled={currentContentIndex === currentContent.length - 1}
            >
              अगला →
            </button>
          </div>

          <div className="reading-instructions">
            <div className="instruction-item">
              <span className="instruction-icon">👆</span>
              <span>शब्दों पर क्लिक करें हिंदी अर्थ जानने के लिए</span>
            </div>
            <div className="instruction-item">
              <span className="instruction-icon">🔊</span>
              <span>प्ले बटन दबाएं पूरा पाठ सुनने के लिए</span>
            </div>
            <div className="instruction-item">
              <span className="instruction-icon">➡️</span>
              <span>अगला बटन दबाएं नया content पढ़ने के लिए</span>
            </div>
          </div>
        </div>

        <ToastContainer
          position="bottom-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </div>
  );
};

export default PronunciationGuide;
