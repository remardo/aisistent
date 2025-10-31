import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Calendar, ArrowRight } from "lucide-react";

export function Blog() {
  const posts = [
    {
      slug: "ai-transforms-ecommerce-2025",
      title: "Как AI трансформирует e-commerce в 2025",
      excerpt: "Разбираем ключевые тренды использования искусственного интеллекта в онлайн-торговле и прогнозируем будущее отрасли.",
      image: "/images/ecommerce.svg",
      date: "15 октября 2025",
      category: "Аналитика",
    },
    {
      slug: "chatbot-mistakes",
      title: "7 ошибок при внедрении чат-ботов",
      excerpt: "Распространенные проблемы, с которыми сталкиваются компании при автоматизации клиентского сервиса, и как их избежать.",
      image: "/images/customer-service.svg",
      date: "10 октября 2025",
      category: "Кейсы",
    },
    {
      slug: "machine-learning-for-business",
      title: "Machine Learning для бизнеса: с чего начать",
      excerpt: "Пошаговое руководство по внедрению машинного обучения в бизнес-процессы компании любого масштаба.",
      image: "/images/ml-office.svg",
      date: "5 октября 2025",
      category: "Обучение",
    },
  ];

  return (
    <section id="blog" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 mb-4">
              Блог
            </span>
            <h2 className="text-4xl md:text-5xl">
              Последние <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">статьи</span>
            </h2>
          </div>
          <a href="#/blog">
            <Button variant="outline" className="hidden md:flex">
              Все статьи
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {posts.map((post, index) => (
            <a href={`#/blog/${post.slug}`} key={index}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>

                  <h3 className="text-xl mb-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>

                  <Button variant="link" className="p-0 h-auto text-blue-600">
                    Читать далее →
                  </Button>
                </div>
              </Card>
            </a>
          ))}
        </div>

        <div className="text-center md:hidden">
          <a href="#/blog">
            <Button variant="outline" className="w-full">
              Все статьи
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
