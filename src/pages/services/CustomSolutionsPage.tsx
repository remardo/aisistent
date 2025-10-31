import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { ArrowLeft, CheckCircle2, Sparkles, Target, Zap, Shield, Rocket, Code, Lightbulb, Users } from "lucide-react";

export function CustomSolutionsPage() {
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
          <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 flex items-center justify-center mb-6">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl mb-4">Кастомные AI-решения</h1>
          <p className="text-2xl text-gray-600 mb-6">Индивидуальная разработка под ваши уникальные задачи</p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Создаем уникальные AI-решения с нуля под специфику вашего бизнеса. 
            От идеи до внедрения — полный цикл разработки с учетом всех ваших требований.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Target, title: "Точное соответствие", description: "Решение под ваши задачи" },
            { icon: Zap, title: "Гибкость", description: "Любые изменения по ходу" },
            { icon: Shield, title: "Безопасность", description: "Полный контроль данных" },
            { icon: Code, title: "Владение кодом", description: "Исходный код в вашей собственности" },
          ].map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <Card key={idx} className="p-6 text-center hover:shadow-lg transition-shadow">
                <Icon className="w-12 h-12 mx-auto mb-4 text-violet-600" />
                <h3 className="text-lg mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </Card>
            );
          })}
        </div>

        <section className="mb-16">
          <h2 className="text-3xl text-center mb-8">Что мы разрабатываем</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "AI-платформы для enterprise",
                description: "Комплексные системы для крупных компаний с множеством интеграций, микросервисной архитектурой и высокими требованиями к производительности.",
              },
              {
                title: "Специализированные ML-модели",
                description: "Обучение моделей машинного обучения на ваших данных для специфических задач: прогнозирование, классификация, детектирование.",
              },
              {
                title: "Computer Vision решения",
                description: "Распознавание объектов, лиц, эмоций, анализ видеопотоков, детектирование дефектов в производстве.",
              },
              {
                title: "NLP системы",
                description: "Обработка текстов, анализ тональности, извлечение сущностей, генерация контента, машинный перевод.",
              },
              {
                title: "Рекомендательные системы",
                description: "Персонализация контента, товаров, услуг на основе поведения пользователей и контентных признаков.",
              },
              {
                title: "AI для финансов",
                description: "Скоринг, детектирование фрода, алгоритмическая торговля, риск-менеджмент, прогнозирование рынка.",
              },
              {
                title: "AI для здравоохранения",
                description: "Диагностика по изображениям, анализ медицинских данных, предсказание рисков, помощь врачам в принятии решений.",
              },
              {
                title: "Промышленный AI",
                description: "Предиктивное обслуживание оборудования, оптимизация производства, контроль качества, энергоэффективность.",
              },
            ].map((feature, idx) => (
              <Card key={idx} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white flex items-center justify-center flex-shrink-0">
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

        <section className="mb-16 bg-gradient-to-br from-violet-50 to-fuchsia-50 rounded-2xl p-8">
          <h2 className="text-3xl text-center mb-8">Процесс разработки</h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {[
              "Discovery: изучаем ваш бизнес, задачи, данные, конкурентов",
              "Проектирование: разрабатываем архитектуру, выбираем технологии",
              "Прототипирование: создаем MVP для проверки гипотез",
              "Разработка: full-cycle development с Agile методологией",
              "Тестирование: QA, security audit, нагрузочное тестирование",
              "Внедрение: deployment, интеграция с вашими системами",
              "Обучение: документация, тренинги для вашей команды",
              "Поддержка: постоянное улучшение и развитие системы",
            ].map((step, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-white p-4 rounded-xl">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white flex items-center justify-center flex-shrink-0">
                  {idx + 1}
                </div>
                <p className="text-lg text-gray-700 pt-2">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl text-center mb-8">Наша экспертиза</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Lightbulb,
                title: "AI/ML Expertise",
                description: "Команда из 20+ data scientists и ML engineers с опытом в топовых tech компаниях. Публикации в научных журналах.",
              },
              {
                icon: Code,
                title: "Full-stack разработка",
                description: "Backend, frontend, mobile, DevOps — полный стек технологий для создания production-ready решений.",
              },
              {
                icon: Users,
                title: "Domain expertise",
                description: "Опыт в финтехе, ритейле, здравоохранении, производстве, логистике, HR, маркетинге.",
              },
              {
                icon: Rocket,
                title: "От идеи до продакшна",
                description: "Полный цикл: от исследований и прототипирования до масштабирования на миллионы пользователей.",
              },
            ].map((useCase, idx) => {
              const Icon = useCase.icon;
              return (
                <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                  <Icon className="w-12 h-12 text-violet-600 mb-4" />
                  <h3 className="text-xl mb-3">{useCase.title}</h3>
                  <p className="text-gray-600">{useCase.description}</p>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl text-center mb-8">Примерная стоимость</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "MVP",
                price: "от 1 000 000 ₽",
                features: [
                  "Базовый функционал",
                  "1-2 месяца разработки",
                  "Команда 3-4 человека",
                  "Готовые технологии",
                  "Тестирование на пилоте",
                  "1 месяц поддержки",
                ],
              },
              {
                name: "Полноценный продукт",
                price: "от 3 000 000 ₽",
                popular: true,
                features: [
                  "Полный функционал",
                  "3-6 месяцев разработки",
                  "Команда 5-8 человек",
                  "Кастомная разработка",
                  "Полное тестирование",
                  "3 месяца поддержки",
                ],
              },
              {
                name: "Enterprise",
                price: "от 10 000 000 ₽",
                features: [
                  "Комплексная система",
                  "6-12 месяцев разработки",
                  "Dedicated команда 10+",
                  "Разработка с нуля",
                  "Масштабируемая архитектура",
                  "12 месяцев поддержки",
                ],
              },
            ].map((plan, idx) => (
              <Card
                key={idx}
                className={`p-6 ${plan.popular ? 'border-2 border-violet-500 shadow-xl scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="px-3 py-1 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-sm">
                      Популярный
                    </span>
                  </div>
                )}
                <h3 className="text-2xl mb-2">{plan.name}</h3>
                <div className="text-3xl bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent mb-6">
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
                  className={`w-full ${plan.popular ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700' : ''}`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  Обсудить проект
                </Button>
              </Card>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-6">
            * Стоимость зависит от сложности проекта, объема работ и сроков. Точная оценка после обсуждения деталей.
          </p>
        </section>

        <div className="text-center bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-2xl p-12 text-white">
          <Rocket className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-3xl mb-4">Готовы создать уникальное AI-решение?</h2>
          <p className="text-xl text-white/90 mb-6">
            Расскажите о вашей задаче и получите предложение от команды экспертов
          </p>
          <Button size="lg" className="bg-white text-violet-600 hover:bg-gray-100">
            Обсудить проект
          </Button>
        </div>
      </div>
    </div>
  );
}
