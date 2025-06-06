import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './ThemeProvider';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();
  const isDark = theme === 'dark';

  const buttonVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.8, opacity: 0 },
    hover: { scale: 1.1 },
    tap: { scale: 0.95 },
  };

  const iconVariants = {
    initial: { rotate: -180, opacity: 0 },
    animate: { rotate: 0, opacity: 1 },
    exit: { rotate: 180, opacity: 0 },
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className={`flex h-8 w-8 items-center justify-center rounded-full
        bg-gradient-to-br transition-colors
        ${isDark
          ? 'from-accent-400 to-accent-600 text-white'
          : 'from-primary-400 to-primary-600 text-white'
        }`}
      variants={buttonVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      whileTap="tap"
      aria-label={isDark ? t('common.lightMode') : t('common.darkMode')}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={theme}
          variants={iconVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          {isDark ? (
            <FaSun className="text-2xl text-yellow-100" />
          ) : (
            <FaMoon className="text-2xl text-blue-100" />
          )}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
};

export default ThemeToggle;
