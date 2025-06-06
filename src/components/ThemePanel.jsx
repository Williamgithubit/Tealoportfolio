import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useTheme } from './ThemeProvider';
import { FaPalette, FaTimes, FaCheck } from 'react-icons/fa';

const ThemePanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme, colorScheme, setColorScheme } = useTheme();
  const { t } = useTranslation();
  const isDark = theme === 'dark';

  const colorSchemes = [
    { id: 'default', name: t('common.schemes.default') },
    { id: 'ocean', name: t('common.schemes.ocean') },
    { id: 'forest', name: t('common.schemes.forest') },
    { id: 'sunset', name: t('common.schemes.sunset') },
    { id: 'lavender', name: t('common.schemes.lavender') },
  ];

  const panelVariants = {
    closed: {
      x: '100%',
      opacity: 0
    },
    open: {
      x: 0,
      opacity: 1
    }
  };

  return (
    <>
      {/* Theme Panel Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed right-4 bottom-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white shadow-lg transition-all hover:bg-brand/90"
        aria-label={t('common.themePanel')}
      >
        <FaPalette className="text-xl" />
      </button>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Theme Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={panelVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ type: 'spring', damping: 20 }}
            className="fixed right-0 top-0 z-50 h-full w-80 bg-background-light-primary p-6 shadow-xl dark:bg-background-dark-primary"
          >
            {/* Header */}
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-text-light-primary dark:text-text-dark-primary">
                {t('common.themePanel')}
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-2 text-text-light-secondary hover:bg-background-light-secondary dark:text-text-dark-secondary dark:hover:bg-background-dark-secondary"
                aria-label="Close panel"
              >
                <FaTimes />
              </button>
            </div>

            {/* Color Mode */}
            <div className="mb-6">
              <h3 className="mb-3 font-medium text-text-light-primary dark:text-text-dark-primary">
                {t('common.mode')}
              </h3>
              <button
                onClick={toggleTheme}
                className="flex w-full items-center justify-between rounded-lg border border-background-light-secondary p-3 text-left transition-colors hover:bg-background-light-secondary dark:border-background-dark-secondary dark:hover:bg-background-dark-secondary"
              >
                <span className="text-text-light-primary dark:text-text-dark-primary">
                  {isDark ? t('common.lightMode') : t('common.darkMode')}
                </span>
                <div
                  className={`h-6 w-11 rounded-full transition-colors ${isDark ? 'bg-brand' : 'bg-background-light-secondary dark:bg-background-dark-secondary'}`}
                >
                  <div
                    className={`h-5 w-5 transform rounded-full bg-white shadow-sm transition-transform ${isDark ? 'translate-x-6' : 'translate-x-1'}`}
                  />
                </div>
              </button>
            </div>

            {/* Color Schemes */}
            <div>
              <h3 className="mb-3 font-medium text-text-light-primary dark:text-text-dark-primary">
                {t('common.colorScheme')}
              </h3>
              <div className="space-y-2">
                {colorSchemes.map((scheme) => (
                  <button
                    key={scheme.id}
                    onClick={() => setColorScheme(scheme.id)}
                    className={`flex w-full items-center justify-between rounded-lg border p-3 text-left transition-colors
                      ${colorScheme === scheme.id
                        ? 'border-brand bg-brand/10 dark:border-brand dark:bg-brand/5'
                        : 'border-background-light-secondary hover:bg-background-light-secondary dark:border-background-dark-secondary dark:hover:bg-background-dark-secondary'
                      }`}
                  >
                    <span className="text-text-light-primary dark:text-text-dark-primary">
                      {scheme.name}
                    </span>
                    {colorScheme === scheme.id && (
                      <FaCheck className="text-brand" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ThemePanel;
