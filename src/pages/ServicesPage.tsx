import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Bot, Brain, Zap, MessageSquare, BarChart3, Settings, ArrowRight, CheckCircle2 } from "lucide-react";

export function ServicesPage() {
  const services = [
    {
      id: 1,
      slug: "chatbots",
      icon: Bot,
      title: "Чат-боты для бизнеса",
      shortDescription: "Автоматизация общения с клиентами на всех этапах воронки продаж",
      fullDescription: "Разрабатываем умных чат-ботов для Telegram, WhatsApp, сайтов и социальных сетей. Боты обрабатывают запросы 24/7, консультируют клиентов, принимают заказы и интегрируются с вашей CRM.",
      features: [
        "Интеграция с Telegram, WhatsApp, VK",
        "Круглосуточная поддержка клиентов",
        "Автоматическая квалификация лидов",
        "Интеграция с CRM-системами",
        "Прием и обработка заказов",
        "Многоязычная поддержка",
      ],
      benefits: ["Снижение нагрузки на поддержку до 80%", "Увеличение конверсии на 45%", "Обработка неограниченного количества запросов"],
      priceFrom: "150 000 ₽",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      slug: "ai-assistants",
      icon: Brain,
      title: "AI-помощники",
      shortDescription: "Интеллектуальные ассистенты для решения сложных задач",
      fullDescription: "Создаем AI-ассистентов на базе современных языковых моделей. Они понимают контекст, дают развернутые ответы, помогают в принятии решений и обучаются на ваших данных.",
      features: [
        "Обработка сложных запросов на естественном языке",
        "Персонализированные рекомендации",
        "Анализ настроений клиентов",
        "Обучение на корпоративных данных",
        "Поддержка контекста диалога",
        "API для интеграции",
      ],
      benefits: ["Повышение качества обслуживания", "Экономия времени сотрудников до 60%", "Масштабируемость без найма персонала"],
      priceFrom: "450 000 ₽",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      slug: "automation",
      icon: Zap,
      title: "Автоматизация процессов",
      shortDescription: "Оптимизация рутинных операций и бизнес-процессов",
      fullDescription: "Автоматизируем повторяющиеся задачи с помощью AI: обработка документов, заполнение форм, генерация отчетов, управление workflow и многое другое.",
      features: [
        "Обработка и распознавание документов (OCR)",
        "Автоматическое заполнение форм",
        "Генерация отчетов и аналитики",
        "Управление бизнес-процессами",
        "Интеграция с существующими системами",
        "Мониторинг и оповещения",
      ],
      benefits: ["Сокращение времени на рутину до 90%", "Минимизация человеческих ошибок", "ROI окупаемости за 3-6 месяцев"],
      priceFrom: "300 000 ₽",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 4,
      slug: "voice-assistants",
      icon: MessageSquare,
      title: "Голосовые ассистенты",
      shortDescription: "Распознавание речи и автоматические звонки",
      fullDescription: "Создаем голосовых ассистентов для приема входящих звонков, обзвона клиентов, проведения опросов и консультаций. Естественная речь и понимание интонаций.",
      features: [
        "Прием входящих звонков",
        "Автоматический обзвон клиентов",
        "Голосовое меню (IVR)",
        "Запись и анализ разговоров",
        "Интеграция с телефонией",
        "Многоязычность",
      ],
      benefits: ["Обработка 100+ звонков одновременно", "Экономия на call-центре до 70%", "Повышение охвата аудитории"],
      priceFrom: "400 000 ₽",
      color: "from-orange-500 to-red-500",
    },
    {
      id: 5,
      slug: "analytics",
      icon: BarChart3,
      title: "Аналитика и прогнозы",
      shortDescription: "Анализ больших данных и предиктивная аналитика",
      fullDescription: "Разрабатываем системы для анализа больших объемов данных, построения прогнозов, выявления трендов и аномалий. Визуализация данных в интерактивных дашбордах.",
      features: [
        "Анализ больших данных (Big Data)",
        "Прогнозирование спроса",
        "Выявление аномалий и трендов",
        "Сегментация клиентов",
        "Интерактивные дашборды",
        "ML-модели для бизнес-задач",
      ],
      benefits: ["Точность прогнозов до 95%", "Принятие решений на основе данных", "Выявление новых возможностей для роста"],
      priceFrom: "500 000 ₽",
      color: "from-indigo-500 to-blue-500",
    },
    {
      id: 6,
      slug: "custom-solutions",
      icon: Settings,
      title: "Кастомные решения",
      shortDescription: "Разработка уникальных AI-решений под ваши задачи",
      fullDescription: "Создаем индивидуальные AI-решения для нестандартных задач вашего бизнеса. От консультации и проектирования до разработки, внедрения и поддержки.",
      features: [
        "Индивидуальная разработка под задачу",
        "Интеграция с любыми системами",
        "Обучение моделей на ваших данных",
        "Выделенная команда разработчиков",
        "Долгосрочная поддержка",
        "Регулярные обновления",
      ],
      benefits: ["Решение уникальных бизнес-задач", "Конкурентное преимущество", "Полный контроль над системой"],
      priceFrom: "От 1 000 000 ₽",
      color: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <div className="pt-24 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 mb-4">
            Наши услуги
          </span>
          <h1 className="text-4xl md:text-6xl mb-4">
            Разработка ИИ <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">различной сложности</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            От простых чат-ботов до сложных систем машинного обучения. Создаем решения, которые работают и приносят результат вашему бизнесу.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-12 mb-12">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Left Column - Icon & Title */}
                  <div className="p-8 bg-gradient-to-br from-gray-50 to-white">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-2xl mb-3">{service.title}</h2>
                    <p className="text-gray-600 mb-4">{service.shortDescription}</p>
                    <div className="text-3xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                      {service.priceFrom}
                    </div>
                    <p className="text-sm text-gray-500 mb-6">Стоимость от</p>
                    <a href={`#/services/${service.slug}`}>
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                        Подробнее
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </a>
                  </div>

                  {/* Middle Column - Features */}
                  <div className="p-8">
                    <h3 className="mb-4">Возможности</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Column - Benefits */}
                  <div className="p-8 bg-gradient-to-br from-blue-50 to-purple-50">
                    <h3 className="mb-4">Выгоды для бизнеса</h3>
                    <div className="space-y-4">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-center flex-shrink-0 text-sm">
                            {idx + 1}
                          </div>
                          <p className="text-gray-700 pt-1">{benefit}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl md:text-4xl mb-4">
            Не нашли нужную услугу?
          </h2>
          <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
            Мы разрабатываем кастомные AI-решения под любые бизнес-задачи. Опишите вашу задачу, и мы предложим оптимальное решение.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Обсудить проект
          </Button>
        </div>
      </div>
    </div>
  );
}
