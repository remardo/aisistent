import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";

export function Hero() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    alert(`Спасибо! Мы свяжемся с вами по адресу: ${email}`);
    setEmail("");
  };

  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(99,102,241,0.1),transparent_50%)] -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)] -z-10" />

      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 mb-6">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm text-blue-700">Передовые AI-решения для вашего бизнеса</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 max-w-4xl mx-auto">
            Super <span className="bg-gradient-to-r from-green-500 to-emerald-400 px-2 py-1 rounded-lg text-white">Charge Sales</span>
            <br />
            with Smart Automation AI
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Разрабатываем цифровых сотрудников на базе искусственного интеллекта. 
            Автоматизируем процессы, увеличиваем продажи, экономим ваше время.
          </p>

          {/* Lead Capture Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
            <Input
              type="email"
              placeholder="Введите ваш email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button type="submit" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Начать сейчас
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </form>

          <p className="text-sm text-gray-500">
            Бесплатная консультация • Без обязательств • Результат за 2 недели
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {[
            {
              title: "AI Ассистенты",
              description: "Умные помощники для обработки заявок 24/7",
              gradient: "from-blue-500 to-cyan-500",
            },
            {
              title: "Аналитика данных",
              description: "Глубокий анализ и прогнозирование",
              gradient: "from-purple-500 to-pink-500",
            },
            {
              title: "Автоматизация",
              description: "Оптимизация бизнес-процессов",
              gradient: "from-green-500 to-emerald-500",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} mb-4 flex items-center justify-center`}>
                <div className="w-6 h-6 bg-white rounded-lg" />
              </div>
              <h3 className="text-xl mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
