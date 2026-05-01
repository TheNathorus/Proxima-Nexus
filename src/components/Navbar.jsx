import { NavLink } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext.jsx';
import BrandLogo from './BrandLogo.jsx';
import Button from './Button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const { preference, setPreference } = useTheme();

  const toggleLanguage = () => {
    const newLang = i18n.language.startsWith('en') ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
  };

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.services'), path: '/services' },
    { name: t('nav.compliance'), path: '/compliance' },
    { name: t('nav.technology'), path: '/technology' },
    { name: t('nav.about'), path: '/about' },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <BrandLogo onClick={closeMenu} />

        <nav className="site-nav" aria-label="Main">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `site-nav__link ${isActive ? 'site-nav__link--active' : ''}`
              }
              end={link.path === '/'}
            >
              {link.name}
            </NavLink>
          ))}
          <button type="button" onClick={toggleLanguage} className="lang-toggle">
            <Globe size={17} aria-hidden />
            <span>{i18n.language.startsWith('en') ? 'FR' : 'EN'}</span>
          </button>
          <select
            className="theme-select"
            value={preference}
            onChange={(e) => setPreference(e.target.value)}
            aria-label={t('nav.theme')}
          >
            <option value="auto">{t('nav.themeAuto')}</option>
            <option value="dark">{t('nav.themeDark')}</option>
            <option value="light">{t('nav.themeLight')}</option>
          </select>
          <Button href="https://calendar.app.google/aLF3LJrpDQG7dDsZ7" variant="primary">
            {t('nav.bookCall')}
          </Button>
        </nav>

        <div className="header-mobile">
          <button type="button" onClick={toggleLanguage} className="lang-toggle">
            <span>{i18n.language.startsWith('en') ? 'FR' : 'EN'}</span>
          </button>
          <select
            className="theme-select theme-select--compact"
            value={preference}
            onChange={(e) => setPreference(e.target.value)}
            aria-label={t('nav.theme')}
          >
            <option value="auto">{t('nav.themeAuto')}</option>
            <option value="dark">{t('nav.themeDark')}</option>
            <option value="light">{t('nav.themeLight')}</option>
          </select>
          <button
            type="button"
            className="menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="mobile-drawer" role="dialog" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `mobile-drawer__link ${isActive ? 'text-cyan' : ''}`
              }
              end={link.path === '/'}
              onClick={closeMenu}
            >
              {link.name}
            </NavLink>
          ))}
          <Button
            href="https://calendar.app.google/aLF3LJrpDQG7dDsZ7"
            variant="primary"
            className="mobile-drawer__cta"
          >
            {t('nav.bookCall')}
          </Button>
        </div>
      )}
    </header>
  );
}
