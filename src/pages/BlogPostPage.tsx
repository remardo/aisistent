import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ArrowLeft, Calendar, Clock, Share2, Facebook, Twitter, Linkedin } from "lucide-react";

interface BlogPostPageProps {
  slug: string;
}

export function BlogPostPage({ slug }: BlogPostPageProps) {
  // Данные статей (в реальном приложении это будет из API или базы данных)
  const blogPosts: Record<string, any> = {
    "ai-transforms-ecommerce-2025": {
      title: "Как AI трансформирует e-commerce в 2025",
      date: "15 октября 2025",
      readTime: "8 мин",
      category: "Аналитика",
      author: {
        name: "Дмитрий Соколов",
        role: "AI Product Lead",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dmitry",
      },
      image: "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjE4MzY4OTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      content: `
        <p>Искусственный интеллект кардинально меняет индустрию электронной коммерции. В 2025 году мы наблюдаем беспрецедентное внедрение AI-технологий во все аспекты онлайн-торговли.</p>

        <h2>Персонализация на новом уровне</h2>
        <p>Современные AI-системы анализируют поведение пользователей в реальном времени, предлагая персонализированные рекомендации с точностью до 95%. Это не просто "похожие товары" — это глубокое понимание потребностей клиента на основе:</p>
        <ul>
          <li>История просмотров и покупок</li>
          <li>Поведенческие паттерны</li>
          <li>Контекст текущей сессии</li>
          <li>Социально-демографические данные</li>
          <li>Сезонные тренды и предпочтения</li>
        </ul>

        <h2>Виртуальные ассистенты</h2>
        <p>Чат-боты на базе GPT-4 и Claude способны вести естественные диалоги с клиентами, понимая контекст и интонации. Они помогают с выбором товаров, отвечают на вопросы и решают проблемы круглосуточно.</p>

        <blockquote>
          "После внедрения AI-ассистента наш показатель конверсии вырос на 45%, а средний чек увеличился на 30%" — говорит директор крупного интернет-магазина.
        </blockquote>

        <h2>Визуальный поиск</h2>
        <p>Технологии компьютерного зрения позволяют пользователям искать товары по фотографиям. Загрузил фото понравившейся вещи — получил подборку похожих товаров из каталога.</p>

        <h2>Динамическое ценообразование</h2>
        <p>AI-алгоритмы анализируют спрос, конкурентов, складские остатки и внешние факторы для оптимального ценообразования в реальном времени. Это помогает максимизировать прибыль и оставаться конкурентоспособными.</p>

        <h2>Прогнозирование спроса</h2>
        <p>Machine Learning модели предсказывают спрос на товары с учетом сезонности, трендов, погоды и других факторов. Это позволяет оптимизировать закупки и избежать затоваривания или дефицита.</p>

        <h2>Выводы</h2>
        <p>AI перестал быть опцией для e-commerce — это необходимость для конкурентоспособности. Компании, которые внедряют AI-решения сейчас, получают значительное преимущество и увеличивают прибыль на 30-50%.</p>
      `,
      tags: ["AI", "E-commerce", "Персонализация", "Чат-боты", "Machine Learning"],
    },
    "chatbot-mistakes": {
      title: "7 ошибок при внедрении чат-ботов",
      date: "10 октября 2025",
      readTime: "6 мин",
      category: "Кейсы",
      author: {
        name: "Анна Петрова",
        role: "Head of Customer Success",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anna",
      },
      image: "https://images.unsplash.com/photo-1690264460165-0ff5e1063d86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3NjE3NjgyNDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      content: `
        <p>За годы работы с чат-ботами мы выявили типичные ошибки, которые совершают компании при автоматизации клиентского сервиса. Избежав их, вы сэкономите время и деньги.</p>

        <h2>1. Отсутствие четкой стратегии</h2>
        <p>Многие компании начинают с вопроса "как сделать бота?", вместо "зачем нам бот?". Перед внедрением необходимо:</p>
        <ul>
          <li>Определить бизнес-цели</li>
          <li>Выбрать метрики успеха</li>
          <li>Понять, какие процессы автоматизировать</li>
          <li>Оценить ожидаемый ROI</li>
        </ul>

        <h2>2. Слишком простой или сложный бот</h2>
        <p>Баланс — ключевой фактор. Простой бот с готовыми шаблонами разочарует пользователей. Слишком сложный бот с AI может давать неожиданные ответы.</p>

        <h2>3. Игнорирование UX</h2>
        <p>Бот должен быть удобным. Частые ошибки:</p>
        <ul>
          <li>Слишком длинные сообщения</li>
          <li>Отсутствие быстрых кнопок</li>
          <li>Невозможность вернуться назад</li>
          <li>Нет опции связаться с человеком</li>
        </ul>

        <blockquote>
          "70% пользователей закрывают чат-бота после первого же сообщения, если интерфейс неудобный"
        </blockquote>

        <h2>4. Недостаточное обучение</h2>
        <p>AI-бот требует обучения на реальных данных. Многие компании запускают бота с минимальной базой знаний, что приводит к неточным ответам.</p>

        <h2>5. Отсутствие аналитики</h2>
        <p>Без метрик невозможно понять, работает ли бот. Необходимо отслеживать:</p>
        <ul>
          <li>Количество диалогов</li>
          <li>Процент решенных запросов</li>
          <li>Точки выхода пользователей</li>
          <li>Satisfaction rate</li>
        </ul>

        <h2>6. Нет плана передачи оператору</h2>
        <p>Бот не может решить 100% запросов. Важно продумать сценарий эскалации к человеку, когда бот не справляется.</p>

        <h2>7. Запуск без тестирования</h2>
        <p>Многие компании запускают бота сразу на всю аудиторию. Правильный подход — A/B тестирование на части пользователей с постепенным масштабированием.</p>

        <h2>Заключение</h2>
        <p>Успешное внедрение чат-бота требует тщательной подготовки, правильной стратегии и постоянной оптимизации на основе данных.</p>
      `,
      tags: ["Чат-боты", "Автоматизация", "UX", "Customer Service"],
    },
    "machine-learning-for-business": {
      title: "Machine Learning для бизнеса: с чего начать",
      date: "5 октября 2025",
      readTime: "10 мин",
      category: "Обучение",
      author: {
        name: "Михаил Новиков",
        role: "Lead ML Engineer",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mikhail",
      },
      image: "https://images.unsplash.com/photo-1630283017802-785b7aff9aac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYxNzQ4ODYzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      content: `
        <p>Machine Learning — это не магия, а инструмент для решения бизнес-задач. В этой статье разберем, как начать внедрение ML в вашу компанию.</p>

        <h2>Шаг 1: Определите бизнес-задачу</h2>
        <p>ML эффективен для задач, где есть паттерны в данных:</p>
        <ul>
          <li>Прогнозирование (спрос, отток, цены)</li>
          <li>Классификация (категоризация, детектирование мошенничества)</li>
          <li>Рекомендации (товары, контент)</li>
          <li>Оптимизация (маршруты, расписания, запасы)</li>
        </ul>

        <h2>Шаг 2: Оцените данные</h2>
        <p>ML требует качественных данных. Проверьте:</p>
        <ul>
          <li>Объем данных (минимум тысячи записей)</li>
          <li>Качество (полнота, точность)</li>
          <li>Релевантность (связь с задачей)</li>
          <li>Доступность (где хранятся, как получить)</li>
        </ul>

        <blockquote>
          "80% времени в ML-проекте уходит на подготовку данных, только 20% на моделирование"
        </blockquote>

        <h2>Шаг 3: Начните с простого</h2>
        <p>Не пытайтесь сразу построить сложную систему. Начните с MVP:</p>
        <ul>
          <li>Выберите одну задачу</li>
          <li>Используйте готовые библиотеки</li>
          <li>Сделайте базовую модель</li>
          <li>Проверьте гипотезу</li>
        </ul>

        <h2>Шаг 4: Измеряйте результаты</h2>
        <p>Определите метрики успеха до начала проекта:</p>
        <ul>
          <li>Точность модели (accuracy, precision, recall)</li>
          <li>Бизнес-метрики (ROI, экономия времени)</li>
          <li>Пользовательский опыт</li>
        </ul>

        <h2>Шаг 5: Итерируйте</h2>
        <p>ML-модели требуют постоянного улучшения:</p>
        <ul>
          <li>Собирайте новые данные</li>
          <li>Переобучайте модели</li>
          <li>Тестируйте гипотезы</li>
          <li>Масштабируйте успешные решения</li>
        </ul>

        <h2>Типичные подводные камни</h2>
        <p>Чего стоит избегать:</p>
        <ul>
          <li>Переоценка возможностей ML</li>
          <li>Недооценка сложности</li>
          <li>Игнорирование качества данных</li>
          <li>Отсутствие бизнес-метрик</li>
        </ul>

        <h2>Заключение</h2>
        <p>Machine Learning — мощный инструмент, но не панацея. Начинайте с малого, фокусируйтесь на бизнес-ценности и постоянно улучшайте решения на основе данных.</p>
      `,
      tags: ["Machine Learning", "AI", "Data Science", "Бизнес"],
    },
  };

  const post = blogPosts[slug];

  if (!post) {
    return (
      <div className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl mb-4">Статья не найдена</h1>
          <p className="text-xl text-gray-600 mb-8">К сожалению, запрашиваемая статья не существует</p>
          <a href="#/blog">
            <Button>Вернуться в блог</Button>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Back Button */}
        <a href="#/blog">
          <Button variant="ghost" className="mb-8 group">
            <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Все статьи
          </Button>
        </a>

        {/* Article Header */}
        <article>
          <div className="mb-8">
            <Badge className="mb-4">{post.category}</Badge>
            <h1 className="text-4xl md:text-5xl mb-4">{post.title}</h1>
            
            <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
              <div className="flex items-center gap-2">
                <ImageWithFallback
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <div>{post.author.name}</div>
                  <div className="text-sm text-gray-500">{post.author.role}</div>
                </div>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="flex items-center gap-2 pb-6 border-b">
              <span className="text-sm text-gray-600">Поделиться:</span>
              <Button variant="outline" size="sm" className="gap-2">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <Share2 className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-8 rounded-2xl overflow-hidden">
            <ImageWithFallback
              src={post.image}
              alt={post.title}
              className="w-full h-auto"
            />
          </div>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
            style={{
              lineHeight: '1.8',
            }}
          />

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-12">
            {post.tags.map((tag: string, index: number) => (
              <Badge key={index} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Author Card */}
          <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50">
            <div className="flex items-start gap-4">
              <ImageWithFallback
                src={post.author.avatar}
                alt={post.author.name}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3 className="text-xl mb-1">{post.author.name}</h3>
                <p className="text-gray-600 mb-3">{post.author.role}</p>
                <p className="text-gray-700">
                  Эксперт в области искусственного интеллекта с опытом работы более 10 лет. 
                  Специализируется на внедрении AI-решений в бизнес.
                </p>
              </div>
            </div>
          </Card>

          {/* CTA */}
          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
            <h2 className="text-3xl mb-4">Хотите внедрить AI в свой бизнес?</h2>
            <p className="text-xl mb-6 text-white/90">
              Получите бесплатную консультацию от наших экспертов
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Получить консультацию
            </Button>
          </div>
        </article>
      </div>

      {/* Custom styles for article content */}
      <style>{`
        .prose h2 {
          font-size: 1.875rem;
          font-weight: 700;
          margin-top: 2rem;
          margin-bottom: 1rem;
          color: #1f2937;
        }
        .prose p {
          margin-bottom: 1.25rem;
          color: #4b5563;
        }
        .prose ul {
          margin-bottom: 1.25rem;
          padding-left: 1.5rem;
        }
        .prose li {
          margin-bottom: 0.5rem;
          color: #4b5563;
        }
        .prose li::marker {
          color: #3b82f6;
        }
        .prose blockquote {
          border-left: 4px solid #3b82f6;
          padding-left: 1.5rem;
          margin: 2rem 0;
          font-style: italic;
          color: #1f2937;
          background: #f3f4f6;
          padding: 1.5rem;
          border-radius: 0.5rem;
        }
      `}</style>
    </div>
  );
}
