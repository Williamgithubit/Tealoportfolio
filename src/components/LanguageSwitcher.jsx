import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    // Save language preference
    localStorage.setItem('i18nextLng', lng);
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => changeLanguage('en')}
        className={`rounded px-2 py-0.5 text-sm font-medium transition-colors ${i18n.language === 'en'
          ? 'bg-brand text-white'
          : 'bg-background-light-secondary dark:bg-background-dark-secondary text-text-light-primary dark:text-text-dark-primary hover:bg-brand/10 dark:hover:bg-brand/10'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage('es')}
        className={`rounded px-2 py-0.5 text-sm font-medium transition-colors ${i18n.language === 'es'
          ? 'bg-brand text-white'
          : 'bg-background-light-secondary dark:bg-background-dark-secondary text-text-light-primary dark:text-text-dark-primary hover:bg-brand/10 dark:hover:bg-brand/10'
        }`}
        aria-label="Cambiar a Español"
      >
        ES
      </button>
    </div>
  );
};

export default LanguageSwitcher;
