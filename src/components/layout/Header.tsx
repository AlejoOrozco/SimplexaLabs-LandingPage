import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui';
import { cn } from '@/lib/utils';
import { BRAND_HEADER_LOGO, BRAND_NAME } from '@/constants/brand';
import { APP_LOGIN_URL } from '@/constants/contact';

interface NavLink {
  readonly href: string;
  readonly label: string;
}

const NAV_LINKS: readonly NavLink[] = [
  { href: '#problema-solucion', label: 'Servicios' },
  { href: '#pricing', label: 'Precios' },
  { href: '#programa-fundador', label: 'Nosotros' },
  { href: '#how-it-works', label: 'Cómo funciona' },
  { href: '#cta-final', label: 'Contacto' },
];

const SCROLL_THRESHOLD_PX = 16;

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > SCROLL_THRESHOLD_PX);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={cn('header', isScrolled && 'header--scrolled')}>
      <div className="header__inner">
        <a href="/" className="header__logo" aria-label={`${BRAND_NAME} — inicio`}>
          <img
            src={BRAND_HEADER_LOGO}
            alt={BRAND_NAME}
            className="header__logo-img"
            width={288}
            height={192}
            decoding="async"
          />
        </a>

        <nav className="header__nav" aria-label="Principal">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="header__nav-link">
              {link.label}
            </a>
          ))}
          <a href={APP_LOGIN_URL} className="header__login">
            Iniciar sesión
          </a>
          <Button variant="primary" className="header__cta" href={APP_LOGIN_URL}>
            Demo Gratis
          </Button>
        </nav>

        <button
          type="button"
          className="header__menu-btn"
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="header__mobile"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav className="header__mobile-nav" aria-label="Menú móvil">
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              ))}
              <a href={APP_LOGIN_URL} className="header__mobile-login" onClick={closeMenu}>
                Iniciar sesión
              </a>
              <Button
                variant="primary"
                className="header__mobile-cta"
                href={APP_LOGIN_URL}
                onClick={closeMenu}
              >
                Demo Gratis
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
