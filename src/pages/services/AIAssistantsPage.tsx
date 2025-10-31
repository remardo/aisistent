import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { ArrowLeft, CheckCircle2, Brain, Zap, Shield, Rocket, BookOpen, Cpu, Users } from "lucide-react";

export function AIAssistantsPage() {
  return (
    <div className="pt-24 pb-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <a href="#/services">
          <Button variant="ghost" className="mb-8 group">
            <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Все услуги
          </Button>
        </a>

        <div className="text-center mb-12">
          <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-6">
            <Brain className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl mb-4">AI-помощники</h1>
          <p className="text-2xl text-gray-600 mb-6">Интеллектуальные ассистенты для решения сложных задач</p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Создаем AI-ассистентов на базе современных языковых моделей GPT-4, Claude и других. 
            Они понимают контекст, дают развернутые ответы, помогают в принятии решений и обучаются на ваших данных.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Brain, title: "Глубокое понимание", description: "Анализирует контекст и нюансы запросов" },
            { icon: Zap, title: "Быстрая обработка", description: "Мгновенные развернутые ответы" },
            { icon: Shield, title: "Безопасность данных", description: "Обучение на ваших защищенных данных" },
            { icon: Cpu, title: "Адаптивность", description: "Обучается и улучшается со временем" },
          ].map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <Card key={idx} className="p-6 text-center hover:shadow-lg transition-shadow">
                <Icon className="w-12 h-12 mx-auto mb-4 text-purple-600" />
                <h3 className="text-lg mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </Card>
            );
          })}
        </div>

        <section className="mb-16">
          <h2 className="text-3xl text-center mb-8">Возможности AI-помощников</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Обработка сложных запросов",
                description: "Понимает естественный язык, анализирует многоступенчатые вопросы и дает структурированные ответы.",
              },
              {
                title: "Персонализированные рекомендации",
                description: "Учитывает историю взаимодействий и предпочтения пользователя для точных рекомендаций.",
              },
              {
                title: "Анализ настроений",
                description: "Определяет эмоциональный окрас сообщений и адаптирует тон ответов.",
              },
              {
                title: "Обучение на корпоративных данных",
                description: "Тренировка на ваших документах, базах знаний и регламентах.",
              },
              {
                title: "Контекстуальные диалоги",
                description: "Запоминает историю беседы и поддерживает длинные контекстные диалоги.",
              },
              {
                title: "Многоязычность",
                description: "Поддержка 100+ языков с сохранением качества ответов.",
              },
              {
                title: "API интеграция",
                description: "Подключение к вашим системам через REST API, WebSocket или SDK.",
              },
              {
                title: "Генерация контента",
                description: "Создание текстов, отчетов, презентаций на основе данных.",
              },
            ].map((feature, idx) => (
              <Card key={idx} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white flex items-center justify-center flex-shrink-0">
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

        <section className="mb-16 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
          <h2 className="text-3xl text-center mb-8">Процесс создания AI-ассистента</h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {[
              "Определяем цели и задачи, которые должен решать ассистент",
              "Собираем и подготавливаем корпоративные данные для обучения",
              "Выбираем оптимальную языковую модель и настраиваем параметры",
              "Обучаем модель на ваших данных с fine-tuning",
              "Разрабатываем интерфейс и интегрируем с вашими системами",
              "Тестируем на реальных сценариях и оптимизируем ответы",
              "Внедряем с постепенным масштабированием нагрузки",
            ].map((step, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-white p-4 rounded-xl">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white flex items-center justify-center flex-shrink-0">
                  {idx + 1}
                </div>
                <p className="text-lg text-gray-700 pt-2">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl text-center mb-8">Применение в бизнесе</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: BookOpen,
                title: "Корпоративная база знаний",
                description: "Ассистент отвечает на вопросы сотрудников по внутренним документам и политикам компании.",
              },
              {
                icon: Users,
                title: "Помощь аналитикам",
                description: "Анализ данных, подготовка отчетов и инсайтов на основе Big Data.",
              },
              {
                icon: Shield,
                title: "Юридическая поддержка",
                description: "Анализ договоров, поиск прецедентов, консультации по законодательству.",
              },
              {
                icon: Cpu,
                title: "Техническая поддержка",
                description: "Помощь разработчикам в поиске решений, генерация кода, review.",
              },
            ].map((useCase, idx) => {
              const Icon = useCase.icon;
              return (
                <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                  <Icon className="w-12 h-12 text-purple-600 mb-4" />
                  <h3 className="text-xl mb-3">{useCase.title}</h3>
                  <p className="text-gray-600">{useCase.description}</p>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl text-center mb-8">Тарифы</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Базовый",
                price: "450 000 ₽",
                features: [
                  "Готовая языковая модель",
                  "Базовое обучение на ваших данных",
                  "До 10 000 запросов/месяц",
                  "Интеграция с 1-2 системами",
                  "3 месяца поддержки",
                ],
              },
              {
                name: "Профессиональный",
                price: "850 000 ₽",
                popular: true,
                features: [
                  "Fine-tuning под ваши задачи",
                  "До 100 000 запросов/месяц",
                  "Интеграция с любыми системами",
                  "Аналитическая панель",
                  "Приоритетная поддержка",
                  "6 месяцев поддержки",
                ],
              },
              {
                name: "Enterprise",
                price: "от 2 000 000 ₽",
                features: [
                  "Кастомная модель с нуля",
                  "Неограниченные запросы",
                  "Выделенная инфраструктура",
                  "On-premise развертывание",
                  "Полная кастомизация",
                  "12 месяцев поддержки 24/7",
                ],
              },
            ].map((plan, idx) => (
              <Card
                key={idx}
                className={`p-6 ${plan.popular ? 'border-2 border-purple-500 shadow-xl scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm">
                      Популярный
                    </span>
                  </div>
                )}
                <h3 className="text-2xl mb-2">{plan.name}</h3>
                <div className="text-3xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
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
                  className={`w-full ${plan.popular ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700' : ''}`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  Выбрать план
                </Button>
              </Card>
            ))}
          </div>
        </section>

        <div className="text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-white">
          <Rocket className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-3xl mb-4">Создайте своего AI-помощника</h2>
          <p className="text-xl text-white/90 mb-6">
            Получите консультацию и демо-версию ассистента
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            Заказать демо
          </Button>
        </div>
      </div>
    </div>
  );
}
