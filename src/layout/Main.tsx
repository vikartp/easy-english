import { useNavigate } from 'react-router-dom';

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
    <main className="flex-1 overflow-x-hidden">
      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-4 items-center min-h-[25vh] px-4 py-4 max-w-6xl mx-auto">
        <div className="flex flex-col gap-6 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 dark:text-gray-100 m-0">
            अंग्रेजी सीखना हुआ <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">आसान</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed m-0">
            हिंदी भाषियों के लिए विशेष रूप से डिज़ाइन किया गया अंग्रेजी सीखने का प्लेटफॉर्म
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-4 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div 
              className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl text-center border border-gray-200 dark:border-gray-700 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-lg hover:-translate-y-2 hover:border-primary-600 relative overflow-hidden"
              onClick={() => handleFeatureClick('lessons')}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-100/20 dark:via-primary-900/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">इंटरैक्टिव पाठ</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">व्यावहारिक उदाहरणों के साथ चरणबद्ध सीखने की प्रक्रिया</p>
            </div>
            
            <div 
              className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl text-center border border-gray-200 dark:border-gray-700 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-lg hover:-translate-y-2 hover:border-primary-600 relative overflow-hidden"
              onClick={() => handleFeatureClick('pronunciation')}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-100/20 dark:via-primary-900/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
              <div className="text-4xl mb-4">�</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">उच्चारण गाइड</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">सही उच्चारण सीखने के लिए ऑडियो सहायता</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
