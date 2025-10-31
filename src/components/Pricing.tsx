import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Check } from "lucide-react";

export function Pricing() {
  const plans = [
    {
      name: "Старт",
      price: "от 150 000 ₽",
      period: "за проект",
      description: "Для малого бизнеса и стартапов",
      features: [
        "Простой чат-бот",
        "1 канал интеграции",
        "Базовая аналитика",
        "2 месяца поддержки",
        "Обучение команды",
      ],
      popular: false,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "Бизнес",
      price: "от 450 000 ₽",
      period: "за проект",
      description: "Для среднего бизнеса",
      features: [
        "AI-ассистент с ML",
        "3+ каналов интеграции",
        "Продвинутая аналитика",
        "6 месяцев поддержки",
        "CRM интеграция",
        "Обучение и онбординг",
        "Приоритетная поддержка",
      ],
      popular: true,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      name: "Энтерпрайз",
      price: "от 1 500 000 ₽",
      period: "за проект",
      description: "Для крупных компаний",
      features: [
        "Кастомное AI-решение",
        "Неограниченные интеграции",
        "Глубокая аналитика с BI",
        "12 месяцев поддержки",
        "Выделенная команда",
        "SLA 99.9%",
        "Регулярные обновления",
        "Консультации экспертов",
      ],
      popular: false,
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section id="pricing" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 mb-4">
            Тарифы
          </span>
          <h2 className="text-4xl md:text-5xl mb-4">
            Выберите подходящий <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">план</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Прозрачные цены без скрытых платежей. Оплата поэтапно по мере выполнения работ.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`p-8 relative ${
                plan.popular
                  ? "border-2 border-purple-500 shadow-xl scale-105"
                  : "border border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm">
                    Популярный
                  </span>
                </div>
              )}

              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${plan.gradient} flex items-center justify-center mb-6`}>
                <div className="w-8 h-8 bg-white rounded-lg" />
              </div>

              <h3 className="text-2xl mb-2">{plan.name}</h3>
              <p className="text-gray-600 mb-6 min-h-[48px]">{plan.description}</p>

              <div className="mb-6">
                <div className="text-4xl mb-1">{plan.price}</div>
                <div className="text-gray-500">{plan.period}</div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                    : ""
                }`}
                variant={plan.popular ? "default" : "outline"}
              >
                Выбрать план
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center text-gray-600">
          <p className="mb-2">Нужно индивидуальное решение?</p>
          <Button variant="link" className="text-blue-600">
            Свяжитесь с нами для расчета стоимости →
          </Button>
        </div>
      </div>
    </section>
  );
}
