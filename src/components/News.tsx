import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Newspaper, Award, Rocket, Users } from "lucide-react";

export function News() {
  const newsItems = [
    {
      icon: Award,
      title: "AIsistant - победитель AI Innovation Awards 2025",
      description: "Наше решение для автоматизации продаж признано лучшим в категории B2B SaaS",
      date: "25 октября 2025",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Rocket,
      title: "Запуск новой платформы AI Constructor",
      description: "Теперь создавать AI-ассистентов можно самостоятельно с помощью нашего конструктора",
      date: "18 октября 2025",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "Партнерство с международной IT-компанией",
      description: "Расширяем географию и возможности наших AI-решений",
      date: "12 октября 2025",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section id="news" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-700 mb-4">
            Новости
          </span>
          <h2 className="text-4xl md:text-5xl mb-4">
            Актуальные <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">события</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {newsItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center mb-4`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                <h3 className="text-xl mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>

                <Button variant="link" className="p-0 h-auto text-blue-600">
                  Подробнее →
                </Button>
              </Card>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <Newspaper className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl mb-2">Подпишитесь на рассылку</h3>
          <p className="mb-6 text-white/90">
            Получайте свежие новости, кейсы и статьи о AI прямо на почту
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Ваш email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <Button className="bg-white text-blue-600 hover:bg-gray-100">
              Подписаться
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
