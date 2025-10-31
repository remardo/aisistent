import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Calendar, Clock, ArrowRight, Search } from "lucide-react";
import { Input } from "../components/ui/input";
import { useState } from "react";

export function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const allPosts = [
    {
      id: 1,
      slug: "ai-transforms-ecommerce-2025",
      title: "Как AI трансформирует e-commerce в 2025",
      excerpt: "Разбираем ключевые тренды использования искусственного интеллекта в онлайн-торговле и прогнозируем будущее отрасли.",
      image: "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjE4MzY4OTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      date: "15 октября 2025",
      readTime: "8 мин",
      category: "Аналитика",
      featured: true,
    },
    {
      id: 2,
      slug: "chatbot-mistakes",
      title: "7 ошибок при внедрении чат-ботов",
      excerpt: "Распространенные проблемы, с которыми сталкиваются компании при автоматизации клиентского сервиса, и как их избежать.",
      image: "https://images.unsplash.com/photo-1690264460165-0ff5e1063d86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3NjE3NjgyNDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      date: "10 октября 2025",
      readTime: "6 мин",
      category: "Кейсы",
      featured: true,
    },
    {
      id: 3,
      slug: "machine-learning-for-business",
      title: "Machine Learning для бизнеса: с чего начать",
      excerpt: "Пошаговое руководство по внедрению машинного обучения в бизнес-процессы компании любого масштаба.",
      image: "https://images.unsplash.com/photo-1630283017802-785b7aff9aac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYxNzQ4ODYzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      date: "5 октября 2025",
      readTime: "10 мин",
      category: "Обучение",
      featured: true,
    },
    {
      id: 4,
      slug: "nlp-customer-service",
      title: "NLP в клиентском сервисе: реальные результаты",
      excerpt: "Как технологии обработки естественного языка помогают улучшить качество поддержки клиентов и сократить расходы.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHNlcnZpY2V8ZW58MXx8fHwxNzYxNzQ4ODYzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      date: "1 октября 2025",
      readTime: "7 мин",
      category: "Технологии",
      featured: false,
    },
    {
      id: 5,
      slug: "voice-assistants-trends",
      title: "Голосовые ассистенты в 2025: тренды и прогнозы",
      excerpt: "Анализируем развитие рынка голосовых технологий и их применение в бизнесе.",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2ljZSUyMGFzc2lzdGFudHxlbnwxfHx8fDE3NjE3NDg4NjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      date: "28 сентября 2025",
      readTime: "5 мин",
      category: "Аналитика",
      featured: false,
    },
    {
      id: 6,
      slug: "automation-roi-calculation",
      title: "Как рассчитать ROI от автоматизации",
      excerpt: "Практическое руководство по оценке эффективности инвестиций в AI-автоматизацию бизнес-процессов.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc2MTc0ODg2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      date: "25 сентября 2025",
      readTime: "9 мин",
      category: "Бизнес",
      featured: false,
    },
    {
      id: 7,
      slug: "ai-ethics-business",
      title: "Этика AI: как внедрять ответственно",
      excerpt: "Разбираем этические аспекты использования искусственного интеллекта в бизнесе и лучшие практики.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwZXRoaWNzfGVufDF8fHx8MTc2MTc0ODg2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      date: "20 сентября 2025",
      readTime: "11 мин",
      category: "Обучение",
      featured: false,
    },
    {
      id: 8,
      slug: "predictive-analytics-retail",
      title: "Предиктивная аналитика в ритейле",
      excerpt: "Как прогнозирование спроса с помощью AI помогает оптимизировать запасы и увеличить прибыль.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBzdG9yZXxlbnwxfHx8fDE3NjE3NDg4NjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      date: "15 сентября 2025",
      readTime: "8 мин",
      category: "Кейсы",
      featured: false,
    },
    {
      id: 9,
      slug: "gpt4-vs-claude-comparison",
      title: "GPT-4 vs Claude: сравнение для бизнеса",
      excerpt: "Детальное сравнение популярных языковых моделей и рекомендации по выбору для разных задач.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYxNzQ4ODYzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      date: "10 сентября 2025",
      readTime: "12 мин",
      category: "Технологии",
      featured: false,
    },
  ];

  const categories = ["Все", "Аналитика", "Кейсы", "Обучение", "Технологии", "Бизнес"];
  const [selectedCategory, setSelectedCategory] = useState("Все");

  const filteredPosts = allPosts.filter((post) => {
    const matchesCategory = selectedCategory === "Все" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = allPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="pt-24 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 mb-4">
            Блог
          </span>
          <h1 className="text-4xl md:text-6xl mb-4">
            Блог о <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">технологиях AI</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Статьи, исследования и кейсы о применении искусственного интеллекта в бизнесе
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Поиск по статьям..."
              className="pl-10 py-6"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-gradient-to-r from-blue-600 to-purple-600" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Posts */}
        {selectedCategory === "Все" && searchQuery === "" && (
          <div className="mb-16">
            <h2 className="text-3xl mb-6">Рекомендуемое</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredPosts.map((post) => (
                <a href={`#/blog/${post.slug}`} key={post.id}>
                  <Card className="overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer h-full">
                    <div className="relative h-48 overflow-hidden">
                      <ImageWithFallback
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-white/90 backdrop-blur-sm text-gray-900 hover:bg-white">
                          {post.category}
                        </Badge>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </div>
                      </div>

                      <h3 className="text-xl mb-2 group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>

                      <div className="flex items-center text-blue-600">
                        Читать далее
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* All Posts */}
        <div>
          <h2 className="text-3xl mb-6">
            {selectedCategory === "Все" && searchQuery === "" ? "Все статьи" : "Результаты"}
          </h2>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-500">Статьи не найдены</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(selectedCategory === "Все" && searchQuery === "" ? regularPosts : filteredPosts).map((post) => (
                <a href={`#/blog/${post.slug}`} key={post.id}>
                  <Card className="overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer h-full">
                    <div className="relative h-48 overflow-hidden">
                      <ImageWithFallback
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-white/90 backdrop-blur-sm text-gray-900 hover:bg-white">
                          {post.category}
                        </Badge>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </div>
                      </div>

                      <h3 className="text-xl mb-2 group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>

                      <div className="flex items-center text-blue-600">
                        Читать далее
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Card>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
