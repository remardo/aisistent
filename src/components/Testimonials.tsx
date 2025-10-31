import { Card } from "./ui/card";
import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Алексей Иванов",
      position: "CEO, TechMarket",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
      rating: 5,
      text: "AIsistant разработали для нас AI-ассистента, который обрабатывает 80% входящих запросов. Конверсия выросла на 45%, а нагрузка на поддержку снизилась вдвое.",
    },
    {
      name: "Мария Петрова",
      position: "Директор по маркетингу, FinGroup",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
      rating: 5,
      text: "Отличная команда профессионалов! Внедрили систему анализа данных, которая помогла нам оптимизировать маркетинговые кампании и увеличить ROI на 120%.",
    },
    {
      name: "Дмитрий Сидоров",
      position: "Основатель, StartupHub",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dmitry",
      rating: 5,
      text: "Работали быстро и качественно. Сделали MVP чат-бота за 3 недели. Сейчас масштабируем решение на другие направления. Рекомендую!",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 mb-4">
            Отзывы клиентов
          </span>
          <h2 className="text-4xl md:text-5xl mb-4">
            Что говорят о нас <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">клиенты</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>

              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p>{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
