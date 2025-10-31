import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

// SVG иконки для WhatsApp и Telegram
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AIsistant
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <a href="#/services" className="text-gray-700 hover:text-blue-600 transition-colors">
              Услуги
            </a>
            <Link to="/cases" className="text-gray-700 hover:text-blue-600 transition-colors">
              Кейсы
            </Link>
            <Link 
              to="/" 
              onClick={() => {
                setTimeout(() => {
                  document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
            >
              Цены
            </Link>
            <Link 
              to="/blog" 
              onClick={() => {
                setTimeout(() => {
                  document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
            >
              Блог
            </Link>
            <Link 
              to="/contacts" 
              onClick={() => {
                setTimeout(() => {
                  document.getElementById('news')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
            >
              Контакты
            </Link>
          </div>

          {/* Desktop Contact Info */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+89278574787" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors">
              <Phone className="w-4 h-4" />
              <span>+8-927-857-47-87</span>
            </a>
            <div className="flex items-center gap-2">
              <a
                href="https://wa.me/89278574787"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon />
              </a>
              <a
                href="https://t.me/+89278574787"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center transition-colors"
                aria-label="Telegram"
              >
                <TelegramIcon />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-gray-200 pt-4">
            <Link
              to="/services"
              className="text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Услуги
            </Link>
            <Link
              to="/cases"
              className="text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Кейсы
            </Link>
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => {
                setMobileMenuOpen(false);
                setTimeout(() => {
                  document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
            >
              Цены
            </Link>
            <Link
              to="/blog"
              className="text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => {
                setMobileMenuOpen(false);
                setTimeout(() => {
                  document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
            >
              Блог
            </Link>
            <Link
              to="/contacts"
              className="text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => {
                setMobileMenuOpen(false);
                setTimeout(() => {
                  document.getElementById('news')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
            >
              Контакты
            </Link>
            
            {/* Mobile Contact Info */}
            <div className="pt-4 border-t border-gray-200">
              <a href="tel:+89278574787" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors mb-3">
                <Phone className="w-5 h-5" />
                <span>+8-927-857-47-87</span>
              </a>
              <div className="flex items-center gap-3">
                <a
                  href="https://wa.me/89278574787"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white transition-colors"
                >
                  <WhatsAppIcon />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="https://t.me/+89278574787"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition-colors"
                >
                  <TelegramIcon />
                  <span>Telegram</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
