import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Initialize i18n
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// Initialize i18next
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          common: {
            darkMode: "Dark Mode",
            lightMode: "Light Mode",
            language: "Language",
            loading: "Loading...",
            themePanel: "Theme Settings",
            appearance: "Appearance",
            mode: "Color Mode",
            colorScheme: "Color Scheme",
            error: {
              title: "Oops! Something went wrong",
              tryAgain: "Try again"
            },
            schemes: {
              default: "Default",
              ocean: "Ocean",
              forest: "Forest",
              sunset: "Sunset",
              lavender: "Lavender"
            }
          },
          nav: {
            home: "Home",
            about: "About",
            projects: "Projects",
            contact: "Contact"
          },
          home: {
            greeting: "Hi, I'm",
            role: "Full Stack Developer",
            cta: "View My Work"
          }
        }
      },
      es: {
        translation: {
          common: {
            darkMode: "Modo Oscuro",
            lightMode: "Modo Claro",
            language: "Idioma",
            loading: "Cargando...",
            themePanel: "Ajustes de Tema",
            appearance: "Apariencia",
            mode: "Modo de Color",
            colorScheme: "Esquema de Color",
            error: {
              title: "¡Ups! Algo salió mal",
              tryAgain: "Intentar de nuevo"
            },
            schemes: {
              default: "Predeterminado",
              ocean: "Océano",
              forest: "Bosque",
              sunset: "Atardecer",
              lavender: "Lavanda"
            }
          },
          nav: {
            home: "Inicio",
            about: "Sobre Mí",
            projects: "Proyectos",
            contact: "Contacto"
          },
          home: {
            greeting: "Hola, soy",
            role: "Desarrollador Full Stack",
            cta: "Ver Mi Trabajo"
          }
        }
      }
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    },
    interpolation: {
      escapeValue: false
    }
  });

const resources = {
  en: {
    translation: {
      common: {
        darkMode: "Dark Mode",
        lightMode: "Light Mode",
        language: "Language",
        loading: "Loading...",
        themePanel: "Theme Settings",
        appearance: "Appearance",
        mode: "Color Mode",
        colorScheme: "Color Scheme",
        error: {
          title: "Oops! Something went wrong",
          tryAgain: "Try again"
        },
        schemes: {
          default: "Default",
          ocean: "Ocean",
          forest: "Forest",
          sunset: "Sunset",
          lavender: "Lavender"
        }
      },
      nav: {
        home: "Home",
        about: "About",
        projects: "Projects",
        contact: "Contact"
      },
      home: {
        greeting: "Hi, I'm",
        role: "Full Stack Developer",
        cta: "View My Work"
      }
    }
  },
  es: {
    translation: {
      common: {
        darkMode: "Modo Oscuro",
        lightMode: "Modo Claro",
        language: "Idioma",
        loading: "Cargando...",
        themePanel: "Ajustes de Tema",
        appearance: "Apariencia",
        mode: "Modo de Color",
        colorScheme: "Esquema de Color",
        error: {
          title: "¡Ups! Algo salió mal",
          tryAgain: "Intentar de nuevo"
        },
        schemes: {
          default: "Predeterminado",
          ocean: "Océano",
          forest: "Bosque",
          sunset: "Atardecer",
          lavender: "Lavanda"
        }
      },
      nav: {
        home: "Inicio",
        about: "Sobre Mí",
        projects: "Proyectos",
        contact: "Contacto"
      },
      home: {
        greeting: "Hola, soy",
        role: "Desarrollador Full Stack",
        cta: "Ver Mi Trabajo"
      }
    }
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  })

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
