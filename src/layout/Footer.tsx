const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="text-center">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent my-3"></div>
          <div className="space-y-1">
            <p className="text-gray-600 dark:text-gray-400 text-sm m-0">
              &copy; 2025 Easy English. सभी अधिकार सुरक्षित।
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-xs m-0 opacity-70">
              Made with ❤️ for Hindi speakers learning English
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
