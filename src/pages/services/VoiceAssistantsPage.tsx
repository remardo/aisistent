import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { ArrowLeft, CheckCircle2, Phone, Mic, Volume2, BarChart, Rocket, Clock, Users, Globe } from "lucide-react";

export function VoiceAssistantsPage() {
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
          <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center mb-6">
            <Phone className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl mb-4">Голосовые ассистенты</h1>
          <p className="text-2xl text-gray-600 mb-6">Распознавание речи и автоматические звонки</p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Создаем голосовых ассистентов для приема входящих звонков, обзвона клиентов, 
            проведения опросов и консультаций. Естественная речь, понимание интонаций и контекста.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Clock, title: "Круглосуточно", description: "Прием звонков 24/7 без выходных" },
            { icon: Users, title: "Масштабируемость", description: "100+ звонков одновременно" },
            { icon: Volume2, title: "Естественная речь", description: "Голоса неотличимые от человека" },
            { icon: BarChart, title: "Аналитика", description: "Детальная статистика звонков" },
          ].map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <Card key={idx} className="p-6 text-center hover:shadow-lg transition-shadow">
                <Icon className="w-12 h-12 mx-auto mb-4 text-orange-600" />
                <h3 className="text-lg mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </Card>
            );
          })}
        </div>

        <section className="mb-16">
          <h2 className="text-3xl text-center mb-8">Функции голосовых ассистентов</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Прием входящих звонков", description: "Автоответчик с AI для квалификации обращений и маршрутизации на нужных специалистов." },
              { title: "Автоматический обзвон", description: "Массовые звонки клиентам с персонализированными сообщениями, опросами, напоминаниями." },
              { title: "Голосовое меню (IVR)", description: "Интерактивное меню с распознаванием голосовых команд, без необходимости нажимать кнопки." },
              { title: "Запись и анализ разговоров", description: "Автоматическая транскрибация, анализ тональности, выявление ключевых фраз и проблем." },
              { title: "Многоязычность", description: "Поддержка разных языков с автоматическим определением языка звонящего." },
              { title: "Интеграция с телефонией", description: "Подключение к любым телефонным системам: SIP, облачные АТС, операторы связи." },
              { title: "CRM интеграция", description: "Автоматическое создание задач, обновление статусов, запись истории звонков." },
              { title: "Умные сценарии", description: "Адаптивные диалоги на основе ответов клиента и данных из CRM." },
            ].map((feature, idx) => (
              <Card key={idx} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-600 to-red-600 text-white flex items-center justify-center flex-shrink-0">
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

        <section className="mb-16 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8">
          <h2 className="text-3xl text-center mb-8">Процесс создания</h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {[
              "Определяем цели звонков и сценарии диалогов",
              "Создаем и тренируем голосовую модель на вашем стиле общения",
              "Разрабатываем логику ветвления диалогов",
              "Интегрируем с телефонией и вашими системами",
              "Тестируем на фокус-группе и собираем обратную связь",
              "Оптимизируем на основе реальных звонков",
              "Масштабируем с мониторингом качества",
            ].map((step, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-white p-4 rounded-xl">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-600 to-red-600 text-white flex items-center justify-center flex-shrink-0">
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
              { icon: Phone, title: "Call-центр", description: "Первая линия поддержки, прием заявок, FAQ, эскалация сложных вопросов операторам." },
              { icon: Mic, title: "Продажи", description: "Обзвон лидов, квалификация, запись на встречи, напоминания о платежах." },
              { icon: Users, title: "Опросы и исследования", description: "Проведение телефонных опросов, сбор обратной связи, NPS замеры." },
              { icon: Globe, title: "Информирование", description: "Напоминания о встречах, уведомления о доставке, промо-акции." },
            ].map((useCase, idx) => {
              const Icon = useCase.icon;
              return (
                <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                  <Icon className="w-12 h-12 text-orange-600 mb-4" />
                  <h3 className="text-xl mb-3">{useCase.title}</h3>
                  <p className="text-gray-600">{useCase.description}</p>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl text-center mb-8">Цены</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Базовый",
                price: "400 000 ₽",
                features: [
                  "Прием входящих звонков",
                  "1-2 простых сценария",
                  "До 1000 звонков/месяц",
                  "Интеграция с 1 системой",
                  "3 месяца поддержки",
                ],
              },
              {
                name: "Профессиональный",
                price: "750 000 ₽",
                popular: true,
                features: [
                  "Входящие + исходящие",
                  "Сложные адаптивные сценарии",
                  "До 10 000 звонков/месяц",
                  "CRM + аналитика",
                  "Кастомный голос",
                  "6 месяцев поддержки",
                ],
              },
              {
                name: "Enterprise",
                price: "от 1 800 000 ₽",
                features: [
                  "Неограниченные звонки",
                  "Выделенная инфраструктура",
                  "Несколько языков",
                  "On-premise развертывание",
                  "Dedicated поддержка",
                  "12 месяцев поддержки 24/7",
                ],
              },
            ].map((plan, idx) => (
              <Card
                key={idx}
                className={`p-6 ${plan.popular ? 'border-2 border-orange-500 shadow-xl scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="px-3 py-1 rounded-full bg-gradient-to-r from-orange-600 to-red-600 text-white text-sm">
                      Популярный
                    </span>
                  </div>
                )}
                <h3 className="text-2xl mb-2">{plan.name}</h3>
                <div className="text-3xl bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-6">
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
                  className={`w-full ${plan.popular ? 'bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700' : ''}`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  Выбрать план
                </Button>
              </Card>
            ))}
          </div>
        </section>

        <div className="text-center bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-12 text-white">
          <Rocket className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-3xl mb-4">Протестируйте голосового ассистента</h2>
          <p className="text-xl text-white/90 mb-6">
            Получите тестовый звонок и оцените качество
          </p>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
            Заказать тест-звонок
          </Button>
        </div>
      </div>
    </div>
  );
}
