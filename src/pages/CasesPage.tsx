import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { TrendingUp, Users, Clock, ArrowRight, Filter } from "lucide-react";
import { useState } from "react";

export function CasesPage() {
  const [selectedCategory, setSelectedCategory] = useState("Все");

  const categories = ["Все", "E-commerce", "Финансы", "Поддержка", "Маркетинг", "Логистика"];

  const allCases = [
    {
      id: 1,
      company: "E-commerce платформа",
      title: "Увеличение продаж на 340% с AI-ассистентом",
      description: "Внедрили интеллектуального помощника для обработки заявок. Время отклика сократилось с 4 часов до 2 минут.",
      image: "https://images.unsplash.com/photo-1717386255767-52643970d483?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGF1dG9tYXRpb24lMjBkaWdpdGFsfGVufDF8fHx8MTc2MTc3NzI0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      stats: [
        { icon: TrendingUp, label: "Рост продаж", value: "+340%" },
        { icon: Clock, label: "Время отклика", value: "2 мин" },
        { icon: Users, label: "Обработано заявок", value: "15К+" },
      ],
      category: "E-commerce",
      tags: ["AI-ассистент", "Автоматизация", "CRM"],
    },
    {
      id: 2,
      company: "Финансовая компания",
      title: "Автоматизация обработки документов",
      description: "Разработали систему распознавания и анализа финансовых документов с точностью 98.7%.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MTg0MjY3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      stats: [
        { icon: TrendingUp, label: "Точность", value: "98.7%" },
        { icon: Clock, label: "Экономия времени", value: "80%" },
        { icon: Users, label: "Документов/день", value: "5000+" },
      ],
      category: "Финансы",
      tags: ["OCR", "Machine Learning", "Аналитика"],
    },
    {
      id: 3,
      company: "Служба поддержки",
      title: "Чат-бот для обработки 70% обращений",
      description: "Умный бот обрабатывает типовые запросы, освобождая операторов для сложных задач.",
      image: "https://images.unsplash.com/photo-1553775282-20af80779df7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHNlcnZpY2UlMjBzdXBwb3J0fGVufDF8fHx8MTc2MTgwNTQwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      stats: [
        { icon: TrendingUp, label: "Автоматизация", value: "70%" },
        { icon: Clock, label: "Доступность", value: "24/7" },
        { icon: Users, label: "Довольных клиентов", value: "95%" },
      ],
      category: "Поддержка",
      tags: ["Чат-бот", "NLP", "Клиентский сервис"],
    },
    {
      id: 4,
      company: "Маркетинговое агентство",
      title: "AI для персонализации email-кампаний",
      description: "Система машинного обучения анализирует поведение пользователей и создает персонализированные предложения.",
      image: "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjE4MzY4OTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      stats: [
        { icon: TrendingUp, label: "Open Rate", value: "+180%" },
        { icon: Clock, label: "Время настройки", value: "1 час" },
        { icon: Users, label: "Конверсия", value: "+65%" },
      ],
      category: "Маркетинг",
      tags: ["Персонализация", "Email", "ML"],
    },
    {
      id: 5,
      company: "Логистическая компания",
      title: "Оптимизация маршрутов с помощью AI",
      description: "Алгоритм прогнозирует загруженность дорог и оптимизирует маршруты доставки в реальном времени.",
      image: "https://images.unsplash.com/photo-1630283017802-785b7aff9aac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYxNzQ4ODYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      stats: [
        { icon: TrendingUp, label: "Экономия топлива", value: "35%" },
        { icon: Clock, label: "Время доставки", value: "-40%" },
        { icon: Users, label: "Маршрутов/день", value: "2000+" },
      ],
      category: "Логистика",
      tags: ["Маршрутизация", "Оптимизация", "Big Data"],
    },
    {
      id: 6,
      company: "Розничная сеть",
      title: "Прогнозирование спроса и управление запасами",
      description: "AI-система предсказывает спрос на товары с точностью 94%, оптимизируя складские запасы.",
      image: "https://images.unsplash.com/photo-1690264460165-0ff5e1063d86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3NjE3NjgyNDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      stats: [
        { icon: TrendingUp, label: "Точность прогноза", value: "94%" },
        { icon: Clock, label: "Сокращение излишков", value: "60%" },
        { icon: Users, label: "SKU анализируется", value: "10К+" },
      ],
      category: "E-commerce",
      tags: ["Прогнозирование", "Складская логистика", "ML"],
    },
  ];

  const filteredCases = selectedCategory === "Все" 
    ? allCases 
    : allCases.filter(c => c.category === selectedCategory);

  return (
    <div className="pt-24 pb-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-700 mb-4">
            Кейсы
          </span>
          <h1 className="text-4xl md:text-6xl mb-4">
            Результаты наших <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">клиентов</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Реальные истории успеха компаний из разных отраслей, которые внедрили AI-решения от AIsistant
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <Filter className="w-5 h-5 text-gray-400" />
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition-all ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 gap-8 mb-12">
          {filteredCases.map((caseStudy) => (
            <Card key={caseStudy.id} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative h-64 md:h-auto">
                  <ImageWithFallback
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-sm">
                      {caseStudy.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <p className="text-sm text-gray-500 mb-2">{caseStudy.company}</p>
                    <h3 className="text-2xl md:text-3xl mb-4">{caseStudy.title}</h3>
                    <p className="text-gray-600 mb-4">{caseStudy.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {caseStudy.tags.map((tag, idx) => (
                        <span key={idx} className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {caseStudy.stats.map((stat, idx) => {
                        const Icon = stat.icon;
                        return (
                          <div key={idx} className="text-center">
                            <Icon className="w-5 h-5 mx-auto mb-2 text-purple-600" />
                            <div className="text-2xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-1">
                              {stat.value}
                            </div>
                            <div className="text-xs text-gray-600">{stat.label}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <a href={`#/case/${caseStudy.id}`}>
                    <Button variant="outline" className="w-full group">
                      Читать кейс полностью
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl md:text-4xl mb-4">
            Готовы стать следующей историей успеха?
          </h2>
          <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
            Оставьте заявку, и мы расскажем, как AI может трансформировать ваш бизнес
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            Получить консультацию
          </Button>
        </div>
      </div>
    </div>
  );
}
