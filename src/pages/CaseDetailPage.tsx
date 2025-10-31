import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ArrowLeft, TrendingUp, Target, Lightbulb, CheckCircle2, Quote } from "lucide-react";

interface CaseDetailPageProps {
  caseId: string;
}

export function CaseDetailPage({ caseId }: CaseDetailPageProps) {
  // В реальном приложении данные загружались бы по ID
  const caseData = {
    id: caseId,
    company: "E-commerce платформа 'ShopMaster'",
    title: "Увеличение продаж на 340% с AI-ассистентом",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1717386255767-52643970d483?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGF1dG9tYXRpb24lMjBkaWdpdGFsfGVufDF8fHx8MTc2MTc3NzI0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    challenge: "Интернет-магазин ShopMaster сталкивался с высокой нагрузкой на службу поддержки. Среднее время ответа на запрос составляло 4 часа, что негативно влияло на конверсию. До 30% потенциальных клиентов уходили, не дождавшись ответа.",
    solution: "Мы разработали интеллектуального AI-ассистента, интегрированного с CRM-системой и базой знаний компании. Ассистент обрабатывает входящие запросы, отвечает на типовые вопросы, помогает с выбором товара и оформлением заказа.",
    results: [
      { label: "Рост продаж", value: "+340%", description: "За 6 месяцев после внедрения" },
      { label: "Время отклика", value: "2 мин", description: "Среднее время ответа на запрос" },
      { label: "Обработано заявок", value: "15 000+", description: "Автоматически за месяц" },
      { label: "Конверсия", value: "+85%", description: "Рост из входящих обращений" },
      { label: "Нагрузка на поддержку", value: "-60%", description: "Освободили операторов" },
      { label: "Удовлетворенность", value: "96%", description: "Положительные отзывы клиентов" },
    ],
    implementation: [
      "Анализ существующих процессов и болевых точек",
      "Разработка базы знаний и обучающих датасетов",
      "Создание AI-модели с использованием NLP",
      "Интеграция с CRM и системой заказов",
      "Тестирование и оптимизация на реальных запросах",
      "Обучение персонала и постепенное внедрение",
    ],
    technologies: ["GPT-4", "Natural Language Processing", "CRM Integration", "Analytics Dashboard", "24/7 Monitoring"],
    testimonial: {
      text: "Внедрение AI-ассистента от AIsistant стало настоящим прорывом для нашего бизнеса. Мы не только увеличили продажи, но и значительно повысили качество обслуживания клиентов. Теперь мы можем обрабатывать в 10 раз больше запросов с тем же штатом сотрудников.",
      author: "Алексей Иванов",
      position: "CEO ShopMaster",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    },
  };

  return (
    <div className="pt-24 pb-20 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Back Button */}
        <a href="#/cases">
          <Button variant="ghost" className="mb-8 group">
            <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Все кейсы
          </Button>
        </a>

        {/* Header */}
        <div className="mb-8">
          <span className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-700 mb-4">
            {caseData.category}
          </span>
          <h1 className="text-4xl md:text-5xl mb-4">{caseData.title}</h1>
          <p className="text-xl text-gray-600">{caseData.company}</p>
        </div>

        {/* Hero Image */}
        <div className="rounded-2xl overflow-hidden mb-12">
          <ImageWithFallback
            src={caseData.image}
            alt={caseData.title}
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {caseData.results.map((result, idx) => (
            <Card key={idx} className="p-6 text-center">
              <div className="text-3xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                {result.value}
              </div>
              <div className="mb-1">{result.label}</div>
              <div className="text-sm text-gray-500">{result.description}</div>
            </Card>
          ))}
        </div>

        {/* Challenge */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
              <Target className="w-6 h-6 text-red-600" />
            </div>
            <h2 className="text-3xl">Задача</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">{caseData.challenge}</p>
        </section>

        {/* Solution */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
              <Lightbulb className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-3xl">Решение</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">{caseData.solution}</p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {caseData.technologies.map((tech, idx) => (
              <span key={idx} className="px-4 py-2 rounded-full bg-blue-100 text-blue-700">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Implementation */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="text-3xl">Этапы внедрения</h2>
          </div>
          <div className="space-y-3">
            {caseData.implementation.map((step, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white flex items-center justify-center flex-shrink-0 mt-1">
                  {idx + 1}
                </div>
                <p className="text-lg text-gray-700 pt-1">{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonial */}
        <Card className="p-8 mb-12 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
          <Quote className="w-12 h-12 text-purple-600 mb-4" />
          <p className="text-xl text-gray-700 italic mb-6">"{caseData.testimonial.text}"</p>
          <div className="flex items-center gap-4">
            <img
              src={caseData.testimonial.avatar}
              alt={caseData.testimonial.author}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <p className="font-semibold">{caseData.testimonial.author}</p>
              <p className="text-gray-600">{caseData.testimonial.position}</p>
            </div>
          </div>
        </Card>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-white">
          <TrendingUp className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-3xl mb-4">Хотите похожий результат?</h2>
          <p className="text-xl text-white/90 mb-6">
            Оставьте заявку на бесплатную консультацию
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            Обсудить проект
          </Button>
        </div>
      </div>
    </div>
  );
}
