import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { ArrowLeft, CheckCircle2, Zap, FileText, BarChart, Settings, Rocket, Clock, TrendingDown, Shield } from "lucide-react";

export function AutomationPage() {
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
          <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mb-6">
            <Zap className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl mb-4">Автоматизация процессов</h1>
          <p className="text-2xl text-gray-600 mb-6">Оптимизация рутинных операций с помощью AI</p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Автоматизируем повторяющиеся задачи с помощью искусственного интеллекта: обработка документов, 
            заполнение форм, генерация отчетов, управление workflow и многое другое.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Clock, title: "Экономия времени", description: "Сокращение рутины до 90%" },
            { icon: TrendingDown, title: "Меньше ошибок", description: "Минимизация человеческого фактора" },
            { icon: Zap, title: "Высокая скорость", description: "Обработка за секунды" },
            { icon: Shield, title: "Надежность", description: "Работа без выходных и перерывов" },
          ].map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <Card key={idx} className="p-6 text-center hover:shadow-lg transition-shadow">
                <Icon className="w-12 h-12 mx-auto mb-4 text-green-600" />
                <h3 className="text-lg mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </Card>
            );
          })}
        </div>

        <section className="mb-16">
          <h2 className="text-3xl text-center mb-8">Что автоматизируем</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Обработка документов (OCR)",
                description: "Распознавание текста со сканов, PDF, фотографий. Извлечение структурированных данных из договоров, накладных, чеков.",
              },
              {
                title: "Автозаполнение форм",
                description: "Автоматическое заполнение заявок, анкет, документов на основе имеющихся данных из баз или других источников.",
              },
              {
                title: "Генерация отчетов",
                description: "Создание аналитических отчетов, дашбордов, презентаций на основе данных из различных систем.",
              },
              {
                title: "Управление workflow",
                description: "Автоматизация бизнес-процессов: согласование документов, маршрутизация задач, уведомления.",
              },
              {
                title: "Интеграция систем",
                description: "Синхронизация данных между CRM, ERP, складскими системами, интернет-магазинами.",
              },
              {
                title: "Мониторинг и оповещения",
                description: "Отслеживание KPI, событий, аномалий с автоматическими уведомлениями в нужные каналы.",
              },
              {
                title: "Обработка email",
                description: "Автоматическая сортировка, ответы, извлечение данных из писем и вложений.",
              },
              {
                title: "Планирование и расписания",
                description: "Автоматическое составление графиков работы, встреч, маршрутов доставки.",
              },
            ].map((feature, idx) => (
              <Card key={idx} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 text-white flex items-center justify-center flex-shrink-0">
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

        <section className="mb-16 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
          <h2 className="text-3xl text-center mb-8">Этапы автоматизации</h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {[
              "Аудит текущих процессов и выявление узких мест",
              "Разработка плана автоматизации с приоритизацией задач",
              "Создание прототипа и тестирование на пилотном проекте",
              "Интеграция с существующими системами и базами данных",
              "Настройка мониторинга и системы оповещений",
              "Обучение сотрудников работе с автоматизированной системой",
              "Поддержка и развитие системы с добавлением новых сценариев",
            ].map((step, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-white p-4 rounded-xl">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 text-white flex items-center justify-center flex-shrink-0">
                  {idx + 1}
                </div>
                <p className="text-lg text-gray-700 pt-2">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl text-center mb-8">Кейсы автоматизации</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: FileText,
                title: "Финансовая компания",
                description: "Автоматизировали обработку 5000+ документов в день. Точность распознавания 98.7%, экономия 80% времени.",
              },
              {
                icon: BarChart,
                title: "Ритейл",
                description: "Автоматическая генерация отчетов из 15 источников данных. Экономия 40 часов работы аналитиков в неделю.",
              },
              {
                icon: Settings,
                title: "Производство",
                description: "Автоматизация складского учета и заказов. Сокращение ошибок на 95%, ускорение обработки в 10 раз.",
              },
              {
                icon: Zap,
                title: "HR-отдел",
                description: "Обработка резюме и автозаполнение карточек кандидатов. Ускорение найма в 3 раза.",
              },
            ].map((useCase, idx) => {
              const Icon = useCase.icon;
              return (
                <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                  <Icon className="w-12 h-12 text-green-600 mb-4" />
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
                name: "Точечная автоматизация",
                price: "300 000 ₽",
                features: [
                  "1-2 процесса для автоматизации",
                  "Готовые инструменты и библиотеки",
                  "Интеграция с 1-2 системами",
                  "Базовая аналитика",
                  "2 месяца поддержки",
                ],
              },
              {
                name: "Комплексная автоматизация",
                price: "650 000 ₽",
                popular: true,
                features: [
                  "3-5 связанных процессов",
                  "Кастомная разработка под задачи",
                  "Интеграция с множеством систем",
                  "Продвинутая аналитика и отчеты",
                  "Обучение команды",
                  "6 месяцев поддержки",
                ],
              },
              {
                name: "Enterprise",
                price: "от 1 500 000 ₽",
                features: [
                  "Автоматизация всего отдела",
                  "Разработка с нуля под ваши задачи",
                  "Интеграция со всеми системами",
                  "On-premise развертывание",
                  "Dedicated команда поддержки",
                  "12 месяцев поддержки 24/7",
                ],
              },
            ].map((plan, idx) => (
              <Card
                key={idx}
                className={`p-6 ${plan.popular ? 'border-2 border-green-500 shadow-xl scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="px-3 py-1 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 text-white text-sm">
                      Популярный
                    </span>
                  </div>
                )}
                <h3 className="text-2xl mb-2">{plan.name}</h3>
                <div className="text-3xl bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-6">
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
                  className={`w-full ${plan.popular ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700' : ''}`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  Выбрать план
                </Button>
              </Card>
            ))}
          </div>
        </section>

        <div className="text-center bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-12 text-white">
          <Rocket className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-3xl mb-4">Освободите время для важных задач</h2>
          <p className="text-xl text-white/90 mb-6">
            Получите бесплатный аудит процессов и план автоматизации
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
            Получить аудит
          </Button>
        </div>
      </div>
    </div>
  );
}
