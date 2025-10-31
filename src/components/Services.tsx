import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Bot, Brain, Zap, MessageSquare, BarChart3, Settings } from "lucide-react";

export function Services() {
  const services = [
    {
      slug: "chatbots",
      icon: Bot,
      title: "Чат-боты для бизнеса",
      description: "Автоматизация общения с клиентами на всех этапах воронки продаж",
      features: ["Telegram/WhatsApp", "Поддержка 24/7", "Интеграция с CRM"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      slug: "ai-assistants",
      icon: Brain,
      title: "AI-помощники",
      description: "Интеллектуальные ассистенты для решения сложных задач",
      features: ["Обработка запросов", "Умные рекомендации", "Машинное обучение"],
      color: "from-purple-500 to-pink-500",
    },
    {
      slug: "automation",
      icon: Zap,
      title: "Автоматизация процессов",
      description: "Оптимизация рутинных операций и бизнес-процессов",
      features: ["Обработка документов", "Автоматические отчеты", "Workflow"],
      color: "from-green-500 to-emerald-500",
    },
    {
      slug: "voice-assistants",
      icon: MessageSquare,
      title: "Голосовые ассистенты",
      description: "Распознавание речи и автоматические звонки",
      features: ["Прием заказов", "Обзвон клиентов", "Голосовое меню"],
      color: "from-orange-500 to-red-500",
    },
    {
      slug: "analytics",
      icon: BarChart3,
      title: "Аналитика и прогнозы",
      description: "Анализ больших данных и предиктивная аналитика",
      features: ["Big Data", "Прогнозирование", "Визуализация"],
      color: "from-indigo-500 to-blue-500",
    },
    {
      slug: "custom-solutions",
      icon: Settings,
      title: "Кастомные решения",
      description: "Разработка уникальных AI-решений под ваши задачи",
      features: ["Индивидуальная разработка", "Интеграции", "Поддержка"],
      color: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <section id="services" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 mb-4">
            Наши услуги
          </span>
          <h2 className="text-4xl md:text-5xl mb-4">
            Разработка ИИ <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">различной сложности</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            От простых чат-ботов до сложных систем машинного обучения. 
            Создаем решения, которые работают.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-2 border-gray-100 hover:border-blue-200">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href={`#/services/${service.slug}`}>
                  <Button variant="outline" className="w-full hover:bg-blue-50">
                    Узнать больше
                  </Button>
                </a>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
