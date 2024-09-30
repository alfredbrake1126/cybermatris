import React, { useState } from 'react';
import { useLanguage } from '../../LanguageContext';

const languageOptions = [
    { value: 'en', label: 'English', flag: 'https://flagcdn.com/us.svg' },
    { value: 'fr', label: 'Français', flag: 'https://flagcdn.com/fr.svg' },
    { value: 'es', label: 'Español', flag: 'https://flagcdn.com/es.svg' },
    { value: 'de', label: 'Deutsch', flag: 'https://flagcdn.com/de.svg' },
    { value: 'it', label: 'Italiano', flag: 'https://flagcdn.com/it.svg' },
    // Add more languages as needed
];

export const LanguageDropdown = () => {
  const {changeLanguage, t} = useLanguage(); 
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languageOptions[1]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageSelect = (option) => {
    setSelectedLanguage(option);
    console.log(option.value);
    changeLanguage(option.value);
    setIsOpen(false);
    // Integrate your language change logic here
    // i18n.changeLanguage(option.value);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          className="flex items-center px-4 py-2 bg-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={toggleDropdown}
        >
          <img src={selectedLanguage.flag} alt={selectedLanguage.label} className="w-8 h-5 mr-2" />
          <p style={{color: 'white'}}>
            {selectedLanguage.label}
          </p>
        </button>
      </div>
      {isOpen && (
        <ul className="absolute right-0 z-10 w-48 mt-2 origin-top-right bg-gray-900 border border-gray-300 rounded-md shadow-lg">
          {languageOptions.map((option) => (
            <li
              key={option.value}
              onClick={() => handleLanguageSelect(option)}
              className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-800"
            >
              <img src={option.flag} alt={option.label} className="w-8 h-5 mr-2" />
              <p style={{color: 'white'}}>
                {option.label}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageDropdown;
