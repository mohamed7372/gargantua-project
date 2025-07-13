import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../ui/button';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <Button 
        variant="ghost" 
        size="sm" 
        className="flex items-center gap-1 px-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Globe className="h-4 w-4" />
        <span className="uppercase">{i18n.language.substring(0, 2)}</span>
      </Button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-background border z-50">
          <div className="py-1" role="menu" aria-orientation="vertical">
            <button
              onClick={() => changeLanguage('en')}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-accent ${
                i18n.language === 'en' ? 'font-bold' : ''
              }`}
            >
              {t('language.en')}
            </button>
            <button
              onClick={() => changeLanguage('fr')}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-accent ${
                i18n.language === 'fr' ? 'font-bold' : ''
              }`}
            >
              {t('language.fr')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
