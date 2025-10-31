import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { ArrowLeft, CheckCircle2, Zap, Clock, DollarSign, Users, Rocket } from "lucide-react";

interface ServiceDetailPageProps {
  serviceId: string;
}

export function ServiceDetailPage({ serviceId }: ServiceDetailPageProps) {
  // В реальном приложении данные загружались бы по ID
  const serviceData = {
    id: serviceId,
    title: "Чат-боты для бизнеса",
    subtitle: "Автоматизация общения с клиентами 24/7",
    description: "Разрабатываем умных чат-ботов для Telegram, WhatsApp, сайтов и социальных сетей. Боты обрабатывают запросы круглосуточно, консультируют клиентов, принимают заказы и интегрируются с вашей CRM-системой.",
    features: [
      {
        title: "Многоканальность",
        description: "Один бот работает в Telegram, WhatsApp, на сайте и в соцсетях",
      },
      {
        title: "Интеграция с CRM",
        description: "Автоматическая синхронизация данных с вашей системой учета",
      },
      {
        title: "Прием заказов",
        description: "Бот принимает и обрабатывает заказы без участия человека",
      },
      {
        title: "Квалификация лидов",
        description: "Автоматическое определение качества заявки и приоритета",
      },
      {
        title: "Аналитика",
        description: "Детальная статистика по всем диалогам и конверсиям",
      },
      {
        title: "Обучение и адаптация",
        description: "Бот становится умнее с каждым новым диалогом",
      },
    ],
    howItWorks: [
      "Анализируем ваши бизнес-процессы и определяем задачи для автоматизации",
      "Разрабатываем сценарии диалогов и логику работы бота",
      "Создаем и обучаем AI-модель на ваших данных",
      "Интегрируем бота с мессенджерами и вашими системами",
      "Тестируем и оптимизируем работу на реальных диалогах",
      "Внедряем и обучаем вашу команду работе с ботом",
    ],
    useCases: [
      {
        title: "Интернет-магазины",
        description: "Консультация по товарам, оформление заказов, статус доставки",
      },
      {
        title: "Служба поддержки",
        description: "Ответы на FAQ, прием заявок, эскалация сложных вопросов",
      },
      {
        title: "Запись на услуги",
        description: "Бронирование, выбор времени, напоминания о встречах",
      },
      {
        title: "Генерация лидов",
        description: "Квалификация заявок, сбор контактов, передача в отдел продаж",
      },
    ],
    pricing: [
      {
        name: "Простой бот",
        price: "150 000 ₽",
        features: [
          "1 канал (Telegram или WhatsApp)",
          "До 10 сценариев",
          "Базовая аналитика",
          "2 месяца поддержки",
        ],
      },
      {
        name: "Умный бот",
        price: "300 000 ₽",
        features: [
          "2-3 канала интеграции",
          "Неограниченные сценарии",
          "AI-обработка запросов",
          "CRM интеграция",
          "6 месяцев поддержки",
        ],
      },
      {
        name: "Enterprise",
        price: "от 600 000 ₽",
        features: [
          "Все каналы",
          "Кастомная разработка",
          "Интеграция с любыми системами",
          "Выделенная команда",
          "12 месяцев поддержки",
        ],
      },
    ],
    benefits: [
      { icon: Clock, title: "Работа 24/7", description: "Бот не спит и не уходит на обед" },
      { icon: Zap, title: "Мгновенные ответы", description: "Среднее время отклика - 2 секунды" },
      { icon: Users, title: "Безлимитная нагрузка", description: "Обрабатывает тысячи запросов одновременно" },
      { icon: DollarSign, title: "Экономия бюджета", description: "Окупаемость за 3-6 месяцев" },
    ],
  };

  return (
    <div className="pt-24 pb-20 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Back Button */}
        <a href="#/services">
          <Button variant="ghost" className="mb-8 group">
            <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Все услуги
          </Button>
        </a>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl mb-4">{serviceData.title}</h1>
          <p className="text-2xl text-gray-600 mb-6">{serviceData.subtitle}</p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">{serviceData.description}</p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {serviceData.benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <Card key={idx} className="p-6 text-center hover:shadow-lg transition-shadow">
                <Icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="text-lg mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </Card>
            );
          })}
        </div>

        {/* Features */}
        <section className="mb-16">
          <h2 className="text-3xl text-center mb-8">Возможности</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviceData.features.map((feature, idx) => (
              <Card key={idx} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
          <h2 className="text-3xl text-center mb-8">Как мы работаем</h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {serviceData.howItWorks.map((step, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-white p-4 rounded-xl">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-center flex-shrink-0">
                  {idx + 1}
                </div>
                <p className="text-lg text-gray-700 pt-2">{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-16">
          <h2 className="text-3xl text-center mb-8">Примеры использования</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviceData.useCases.map((useCase, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl mb-3">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-16">
          <h2 className="text-3xl text-center mb-8">Стоимость</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceData.pricing.map((plan, idx) => (
              <Card
                key={idx}
                className={`p-6 ${idx === 1 ? 'border-2 border-purple-500 shadow-xl scale-105' : ''}`}
              >
                {idx === 1 && (
                  <div className="text-center mb-4">
                    <span className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm">
                      Популярный
                    </span>
                  </div>
                )}
                <h3 className="text-2xl mb-2">{plan.name}</h3>
                <div className="text-3xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                  {plan.price}
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${idx === 1 ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700' : ''}`}
                  variant={idx === 1 ? 'default' : 'outline'}
                >
                  Выбрать план
                </Button>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <Rocket className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-3xl mb-4">Готовы начать?</h2>
          <p className="text-xl text-white/90 mb-6">
            Оставьте заявку, и мы свяжемся с вами в течение 24 часов
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Получить консультацию
          </Button>
        </div>
      </div>
    </div>
  );
}
