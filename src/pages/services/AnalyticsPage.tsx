import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { ArrowLeft, CheckCircle2, BarChart3, TrendingUp, Database, Cpu, Rocket, LineChart, PieChart, Activity } from "lucide-react";

export function AnalyticsPage() {
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
          <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center mb-6">
            <BarChart3 className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl mb-4">Аналитика и прогнозы</h1>
          <p className="text-2xl text-gray-600 mb-6">Анализ больших данных и предиктивная аналитика</p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Разрабатываем системы для анализа больших объемов данных, построения прогнозов, 
            выявления трендов и аномалий. Визуализация данных в интерактивных дашбордах.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { icon: TrendingUp, title: "Точные прогнозы", description: "Точность до 95%" },
            { icon: Database, title: "Big Data", description: "Обработка петабайтов данных" },
            { icon: Cpu, title: "Скорость", description: "Анализ в реальном времени" },
            { icon: Activity, title: "Мониторинг", description: "Отслеживание 24/7" },
          ].map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <Card key={idx} className="p-6 text-center hover:shadow-lg transition-shadow">
                <Icon className="w-12 h-12 mx-auto mb-4 text-indigo-600" />
                <h3 className="text-lg mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </Card>
            );
          })}
        </div>

        <section className="mb-16">
          <h2 className="text-3xl text-center mb-8">Возможности аналитики</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Прогнозирование спроса", description: "ML-модели предсказывают спрос на товары с учетом сезонности, трендов, внешних факторов." },
              { title: "Сегментация клиентов", description: "Кластеризация аудитории по поведению, предпочтениям, LTV для персонализации." },
              { title: "Выявление аномалий", description: "Автоматическое обнаружение нетипичных паттернов, мошенничества, сбоев." },
              { title: "Анализ оттока", description: "Прогнозирование churn rate и выявление факторов, влияющих на отток клиентов." },
              { title: "RFM-анализ", description: "Сегментация клиентов по давности, частоте и объему покупок." },
              { title: "Корзинный анализ", description: "Выявление товаров, которые часто покупают вместе для кросс-продаж." },
              { title: "Интерактивные дашборды", description: "Визуализация KPI в реальном времени с возможностью drill-down." },
              { title: "A/B тестирование", description: "Автоматический анализ экспериментов и статистическая значимость." },
            ].map((feature, idx) => (
              <Card key={idx} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white flex items-center justify-center flex-shrink-0">
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

        <section className="mb-16 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8">
          <h2 className="text-3xl text-center mb-8">Этапы внедрения</h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {[
              "Аудит данных и определение источников информации",
              "Разработка схемы хранилища данных (Data Warehouse)",
              "Создание ETL-процессов для сбора и очистки данных",
              "Построение ML-моделей для прогнозирования",
              "Разработка интерактивных дашбордов",
              "Настройка автоматических отчетов и оповещений",
              "Обучение команды работе с аналитической системой",
            ].map((step, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-white p-4 rounded-xl">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white flex items-center justify-center flex-shrink-0">
                  {idx + 1}
                </div>
                <p className="text-lg text-gray-700 pt-2">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl text-center mb-8">Применение</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: LineChart, title: "Ритейл", description: "Прогнозирование спроса, оптимизация ассортимента, управление запасами." },
              { icon: PieChart, title: "E-commerce", description: "Анализ поведения пользователей, рекомендательные системы, персонализация." },
              { icon: BarChart3, title: "Финансы", description: "Скоринг, детектирование мошенничества, риск-менеджмент." },
              { icon: TrendingUp, title: "Маркетинг", description: "Attribution modeling, LTV прогнозы, оптимизация рекламных кампаний." },
            ].map((useCase, idx) => {
              const Icon = useCase.icon;
              return (
                <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                  <Icon className="w-12 h-12 text-indigo-600 mb-4" />
                  <h3 className="text-xl mb-3">{useCase.title}</h3>
                  <p className="text-gray-600">{useCase.description}</p>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl text-center mb-8">Стоимость</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Дашборды",
                price: "500 000 ₽",
                features: [
                  "Интерактивные дашборды",
                  "Подключение до 5 источников",
                  "Готовые визуализации",
                  "Базовая аналитика",
                  "3 месяца поддержки",
                ],
              },
              {
                name: "Predictive Analytics",
                price: "1 200 000 ₽",
                popular: true,
                features: [
                  "Прогнозные ML-модели",
                  "Интеграция с любыми системами",
                  "Data Warehouse",
                  "Автоматические отчеты",
                  "Обучение команды",
                  "6 месяцев поддержки",
                ],
              },
              {
                name: "Enterprise",
                price: "от 3 000 000 ₽",
                features: [
                  "Big Data платформа",
                  "Кастомные ML-модели",
                  "Real-time аналитика",
                  "On-premise развертывание",
                  "Dedicated Data Scientists",
                  "12 месяцев поддержки 24/7",
                ],
              },
            ].map((plan, idx) => (
              <Card
                key={idx}
                className={`p-6 ${plan.popular ? 'border-2 border-indigo-500 shadow-xl scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="px-3 py-1 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-sm">
                      Популярный
                    </span>
                  </div>
                )}
                <h3 className="text-2xl mb-2">{plan.name}</h3>
                <div className="text-3xl bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-6">
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
                  className={`w-full ${plan.popular ? 'bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700' : ''}`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  Выбрать план
                </Button>
              </Card>
            ))}
          </div>
        </section>

        <div className="text-center bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-12 text-white">
          <Rocket className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-3xl mb-4">Примите решения на основе данных</h2>
          <p className="text-xl text-white/90 mb-6">
            Получите бесплатный анализ ваших данных и рекомендации
          </p>
          <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
            Получить анализ
          </Button>
        </div>
      </div>
    </div>
  );
}
