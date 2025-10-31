import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { TrendingUp, Users, Clock, ArrowRight } from "lucide-react";

export function CaseStudies() {
  const cases = [
    {
      company: "E-commerce платформа",
      title: "Увеличение продаж на 340% с AI-ассистентом",
      description: "Внедрили интеллектуального помощника для обработки заявок. Время отклика сократилось с 4 часов до 2 минут.",
      image: "https://images.unsplash.com/photo-1717386255767-52643970d483?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGF1dG9tYXRpb24lMjBkaWdpdGFsfGVufDF8fHx8MTc2MTc3NzI0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      stats: [
        { icon: TrendingUp, label: "Рост продаж", value: "+340%" },
        { icon: Clock, label: "Время отклика", value: "2 мин" },
        { icon: Users, label: "Обработано заявок", value: "15К+" },
      ],
      industry: "E-commerce",
    },
    {
      company: "Финансовая компания",
      title: "Автоматизация обработки документов",
      description: "Разработали систему распознавания и анализа финансовых документов с точностью 98.7%.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MTg0MjY3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      stats: [
        { icon: TrendingUp, label: "Точность", value: "98.7%" },
        { icon: Clock, label: "Экономия времени", value: "80%" },
        { icon: Users, label: "Документов/день", value: "5000+" },
      ],
      industry: "Финансы",
    },
    {
      company: "Служба поддержки",
      title: "Чат-бот для обработки 70% обращений",
      description: "Умный бот обрабатывает типовые запросы, освобождая операторов для сложных задач.",
      image: "https://images.unsplash.com/photo-1553775282-20af80779df7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHNlcnZpY2UlMjBzdXBwb3J0fGVufDF8fHx8MTc2MTgwNTQwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      stats: [
        { icon: TrendingUp, label: "Автоматизация", value: "70%" },
        { icon: Clock, label: "Доступность", value: "24/7" },
        { icon: Users, label: "Довольных клиентов", value: "95%" },
      ],
      industry: "Поддержка",
    },
  ];

  return (
    <section id="cases" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-700 mb-4">
            Кейсы
          </span>
          <h2 className="text-4xl md:text-5xl mb-4">
            Результаты наших <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">клиентов</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Реальные истории успеха компаний, которые внедрили AI-решения от AIsistant
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mb-12">
          {cases.map((caseStudy, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative h-64 md:h-auto">
                  <ImageWithFallback
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-sm">
                      {caseStudy.industry}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <p className="text-sm text-gray-500 mb-2">{caseStudy.company}</p>
                    <h3 className="text-2xl md:text-3xl mb-4">{caseStudy.title}</h3>
                    <p className="text-gray-600 mb-6">{caseStudy.description}</p>

                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {caseStudy.stats.map((stat, idx) => {
                        const Icon = stat.icon;
                        return (
                          <div key={idx} className="text-center">
                            <Icon className="w-5 h-5 mx-auto mb-2 text-blue-600" />
                            <div className="text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">
                              {stat.value}
                            </div>
                            <div className="text-xs text-gray-600">{stat.label}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <a href={`#/case/${index + 1}`}>
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

        <div className="text-center">
          <a href="#/cases">
            <Button size="lg" variant="outline">
              Посмотреть все кейсы
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
