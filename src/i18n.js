import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation files
const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        services: "Services",
        compliance: "Compliance",
        technology: "Technology",
        about: "About",
        bookCall: "Book Strategy Call",
        theme: "Color theme",
        themeAuto: "System",
        themeDark: "Dark",
        themeLight: "Light"
      },
      home: {
        eyebrow: "AI IMPLEMENTATION CONSULTANCY",
        title: "From AI ambition to deployed systems.",
        desc: "No dream selling. Documented ROI. 90-day deployment. Your infrastructure, your IP. We design, deploy, and operationalize AI systems for ambitious companies.",
        cta1: "Book a Strategy Call",
        cta2: "View Capabilities",
        trustTitle: "Trusted by operationally intensive groups"
      }
    }
  },
  fr: {
    translation: {
      nav: {
        home: "Accueil",
        services: "Services",
        compliance: "Conformité",
        technology: "Technologie",
        about: "À\u00A0propos",
        bookCall: "Prendre RDV",
        theme: "Thème d’affichage",
        themeAuto: "Système",
        themeDark: "Sombre",
        themeLight: "Clair"
      },
      home: {
        eyebrow: "CABINET DE CONSEIL EN DÉPLOIEMENT IA",
        title: "De l'ambition IA aux systèmes déployés.",
        desc: "Pas de vente de rêve. ROI documenté. Déploiement en 90 jours. Votre infrastructure, votre IP. Nous concevons, déployons et opérationnalisons des systèmes IA pour les entreprises ambitieuses.",
        cta1: "Réserver un appel stratégique",
        cta2: "Voir nos capacités",
        trustTitle: "La confiance des groupes opérationnels intensifs"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss
    }
  });

export default i18n;

