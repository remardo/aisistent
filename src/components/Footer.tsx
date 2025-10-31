import { Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company */}
          <div>
            <h3 className="text-2xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              AIsistant
            </h3>
            <p className="text-gray-400 mb-4">
              Разрабатываем цифровых сотрудников на базе искусственного интеллекта
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4">Услуги</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#/services/chatbots" className="hover:text-white transition-colors">
                  Чат-боты
                </a>
              </li>
              <li>
                <a href="#/services/ai-assistants" className="hover:text-white transition-colors">
                  AI-помощники
                </a>
              </li>
              <li>
                <a href="#/services/automation" className="hover:text-white transition-colors">
                  Автоматизация
                </a>
              </li>
              <li>
                <a href="#/services/analytics" className="hover:text-white transition-colors">
                  Аналитика
                </a>
              </li>
              <li>
                <a href="#/services" className="hover:text-white transition-colors">
                  Все услуги
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4">Компания</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#/cases" className="hover:text-white transition-colors">
                  Кейсы
                </a>
              </li>
              <li>
                <a 
                  href="#/"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.hash = '/';
                    setTimeout(() => {
                      document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Блог
                </a>
              </li>
              <li>
                <a 
                  href="#/"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.hash = '/';
                    setTimeout(() => {
                      document.getElementById('news')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Новости
                </a>
              </li>
              <li>
                <a href="#/" className="hover:text-white transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="#/" className="hover:text-white transition-colors">
                  Карьера
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4">Контакты</h4>
            <ul className="space-y-2 text-gray-400">
              <li>+7 (495) 123-45-67</li>
              <li>hello@aisistant.ru</li>
              <li>Москва, ул. Примерная, 1</li>
              <li className="pt-2">
                <a href="#" className="hover:text-white transition-colors">
                  Политика конфиденциальности
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Условия использования
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© 2025 AIsistant. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
