import { ContactForm } from "../components/ContactForm";

export function ContactsPage() {
  return (
    <div className="pt-24 pb-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-4xl md:text-5xl mb-6">Контакты</h1>
        <p className="text-lg text-gray-700 mb-8">
          Оставьте заявку — мы свяжемся с вами и ответим на вопросы.
        </p>
        <ContactForm />
        <div className="mt-10 text-gray-700">
          <p className="mb-2">Телефон: <a href="tel:+89278574787" className="text-blue-600">+8-927-857-47-87</a></p>
          <p className="mb-2">Email: <a href="mailto:hello@aisistant.ru" className="text-blue-600">hello@aisistant.ru</a></p>
          <p className="mb-2">Telegram: <a href="https://t.me/+89278574787" target="_blank" rel="noreferrer" className="text-blue-600">@aisistant</a></p>
        </div>
      </div>
    </div>
  );
}

