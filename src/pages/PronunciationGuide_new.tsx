import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ESSAYS_CONTENT, STORIES_CONTENT } from '../constants/contentData';
import type { ContentItem, WordTranslation } from '../constants/contentData';
import { speakText, stopSpeech } from '../utils/speechUtils';

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
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-primary-600">{translation.word}</span>
            <span className="text-lg font-medium text-gray-700">हिंदी: {translation.hindi}</span>
          </div>
          {translation.pronunciation && (
            <span className="text-sm text-gray-500 mt-1">🔊 {translation.pronunciation}</span>
          )}
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
            className="text-primary-600 cursor-pointer py-0.5 px-1 rounded hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors duration-200"
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
    <div className="min-h-screen py-4 px-3 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-6 relative">
          <button 
            className="absolute left-0 top-0 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-gray-700 dark:text-gray-300 text-sm transition-all duration-300 flex items-center gap-2 hover:bg-primary-600 hover:text-white hover:border-primary-600 hover:-translate-x-1"
            onClick={goBack}
          >
            ← वापस होम पर जाएं
          </button>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-3 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
            🔊 उच्चारण गाइड
          </h1>
          <p className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            अंग्रेजी पढ़ें, शब्दों पर क्लिक करें और हिंदी अर्थ देखें
          </p>
        </div>

        {/* Mode Selector */}
        <div className="flex justify-center gap-3 mb-6 flex-wrap">
          <button 
            className={`px-4 py-2 rounded-xl border-2 font-semibold text-sm transition-all duration-300 flex items-center gap-2 min-w-32 justify-center hover:border-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:-translate-y-0.5 ${
              activeMode === 'essays' 
                ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white border-primary-600 shadow-lg shadow-primary-600/30' 
                : 'bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600'
            }`}
            onClick={() => setActiveMode('essays')}
          >
            📝 निबंध
          </button>
          <button 
            className={`px-4 py-2 rounded-xl border-2 font-semibold text-sm transition-all duration-300 flex items-center gap-2 min-w-32 justify-center hover:border-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:-translate-y-0.5 ${
              activeMode === 'stories' 
                ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white border-primary-600 shadow-lg shadow-primary-600/30' 
                : 'bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600'
            }`}
            onClick={() => setActiveMode('stories')}
          >
            📚 कहानियां
          </button>
        </div>

        {/* Content Area */}
        <div className="space-y-4">
          {/* Content Header */}
          <div className="flex justify-between items-center p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="text-xl">{getModeIcon(activeMode)}</span>
              <h2 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100 m-0">{currentItem.title}</h2>
              <span className="bg-primary-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                {currentContentIndex + 1} / {currentContent.length}
              </span>
            </div>
            
            <div className="flex gap-2">
              <button 
                className={`bg-primary-600 border-none rounded-full w-12 h-12 cursor-pointer text-lg transition-all duration-300 flex items-center justify-center text-white hover:bg-secondary-600 hover:scale-110 ${
                  isPlaying ? 'animate-pulse' : ''
                }`}
                onClick={handlePlayPause}
                title={isPlaying ? 'Pause reading' : 'Play reading'}
              >
                {isPlaying ? '⏸️' : '▶️'}
              </button>
            </div>
          </div>

          {/* Reading Content */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 dark:border-gray-700 mb-4 shadow-sm">
            <p className="text-base md:text-lg text-gray-900 dark:text-gray-100 leading-relaxed m-0 text-justify">
              {renderClickableContent(currentItem.content)}
            </p>
          </div>

          {/* Content Navigation */}
          <div className="flex items-center justify-between bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
            <button 
              className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium text-sm transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-600 hover:text-white disabled:hover:bg-gray-100 disabled:hover:text-gray-700 dark:disabled:hover:bg-gray-700 dark:disabled:hover:text-gray-300"
              onClick={handlePrevious}
              disabled={currentContentIndex === 0}
            >
              ← पिछला
            </button>
            
            <div className="flex items-center">
              <div className="flex gap-2">
                {currentContent.map((_, index) => (
                  <span 
                    key={index}
                    className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${
                      index === currentContentIndex 
                        ? 'bg-primary-600 w-6' 
                        : 'bg-gray-300 dark:bg-gray-600 hover:bg-primary-400'
                    }`}
                    onClick={() => setCurrentContentIndex(index)}
                  />
                ))}
              </div>
            </div>
            
            <button 
              className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium text-sm transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-600 hover:text-white disabled:hover:bg-gray-100 disabled:hover:text-gray-700 dark:disabled:hover:bg-gray-700 dark:disabled:hover:text-gray-300"
              onClick={handleNext}
              disabled={currentContentIndex === currentContent.length - 1}
            >
              अगला →
            </button>
          </div>

          {/* Reading Instructions */}
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-2xl border border-blue-200 dark:border-blue-800">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
              <div className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                <span className="text-base">👆</span>
                <span>शब्दों पर क्लिक करें हिंदी अर्थ जानने के लिए</span>
              </div>
              <div className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                <span className="text-base">🔊</span>
                <span>प्ले बटन दबाएं पूरा पाठ सुनने के लिए</span>
              </div>
              <div className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                <span className="text-base">➡️</span>
                <span>अगला बटन दबाएं नया content पढ़ने के लिए</span>
              </div>
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
