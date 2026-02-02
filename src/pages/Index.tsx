import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const services = [
    {
      id: 1,
      title: 'Продажа недвижимости',
      icon: 'Home',
      items: [
        {
          name: 'Полное сопровождение сделки до регистрации перехода права собственности',
          price: '3% от стоимости объекта',
          note: '(минимум 90 000 руб.)',
        },
        {
          name: 'Размещение рекламы объекта недвижимости (Avito, ЦИАН и ПР.)',
          price: 'согласно счету исполнителя',
        },
        {
          name: 'Фото-фиксация объекта недвижимости профессиональным фотографом',
          price: 'от 1 800 до 5 000 руб.',
        },
        {
          name: 'Изготовление и размещение рекламного баннера',
          price: 'согласно счету исполнителя',
        },
        {
          name: 'Выезд агента на объект, осмотры и показы потенциальным покупателям',
          price: '1 000 руб. за каждый выезд',
        },
      ],
    },
    {
      id: 2,
      title: 'Подбор и сопровождение покупки',
      icon: 'Search',
      items: [
        {
          name: 'Подбор объекта недвижимости',
          description: 'Поиск, анализ и сопровождение сделки до регистрации',
          price: '50 000 руб. + 1% от итоговой стоимости объекта',
        },
        {
          name: 'Агентское сопровождение покупателя',
          description: 'Контроль сделки на всех этапах',
          price: '60 000 руб.',
        },
      ],
    },
    {
      id: 3,
      title: 'Юридические услуги',
      icon: 'Scale',
      items: [
        {
          name: 'Полное юридическое сопровождение сделки',
          description: 'Проверка документов и обеспечение безопасности расчетов',
          price: '60 000 руб.',
        },
        {
          name: 'Дополнительные услуги: сделки с участием органов опеки',
          price: '+15 000 руб.',
        },
        {
          name: 'Подготовка технической документации (дома, участки, узаконивание)',
          price: 'от 15 000 до 30 000 руб.',
          note: 'в зависимости от сложности',
        },
        {
          name: 'Снятие с регистрационного учета лиц, утративших право пользования жилым помещением',
          price: '30 000 руб.',
        },
        {
          name: 'Сопровождение сделки по переуступке права аренды земельного участка',
          price: '60 000 руб.',
        },
      ],
    },
    {
      id: 4,
      title: 'Аренда и документы',
      icon: 'FileText',
      items: [
        {
          name: 'Сдача жилой недвижимости в аренду или подбор арендатора',
          price: '50% от стоимости аренды',
        },
        {
          name: 'Подготовка договора (купля-продажа, дарение)',
          description: 'При обращении со «входящего потока»',
          price: '4 000 руб.',
        },
      ],
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-[#E6EDFF] sticky top-0 bg-white z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold text-[#007BFB]">САМОЛЁТ</div>
              <div className="px-3 py-1 bg-[#007BFB] text-white text-sm font-medium rounded">
                ПЛЮС
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <a href="#" className="text-[#727E9F] hover:text-[#007BFB] transition-colors">
                Квартиры
              </a>
              <a href="#" className="text-[#727E9F] hover:text-[#007BFB] transition-colors">
                Услуги
              </a>
              <a href="#" className="text-[#727E9F] hover:text-[#007BFB] transition-colors">
                Новости
              </a>
              <a href="#" className="text-[#727E9F] hover:text-[#007BFB] transition-colors">
                Контакты
              </a>
            </nav>

            <div className="flex items-center gap-4">
              <a href="tel:+78003016787" className="text-[#007BFB] font-medium">
                +7 800 301-67-87
              </a>
              <Button className="bg-[#007BFB] hover:bg-[#0066D6]">
                Заказать звонок
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="py-16 bg-gradient-to-b from-[#F8FBFF] to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-[#1A1F2C] mb-4">
                Стоимость услуг
              </h1>
              <p className="text-lg text-[#727E9F] max-w-2xl mx-auto">
                Прозрачные цены на все виды услуг агентства недвижимости САМОЛЁТ ПЛЮС
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card
                  key={service.id}
                  className="border-[#E6EDFF] hover:shadow-lg transition-shadow animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 rounded-full bg-[#E6EDFF] flex items-center justify-center">
                        <Icon name={service.icon} className="text-[#007BFB]" size={24} />
                      </div>
                      <CardTitle className="text-2xl text-[#1A1F2C]">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {service.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="pb-4 border-b border-[#E6EDFF] last:border-0"
                        >
                          <h3 className="font-medium text-[#1A1F2C] mb-1">{item.name}</h3>
                          {item.description && (
                            <p className="text-sm text-[#727E9F] mb-2">{item.description}</p>
                          )}
                          <div className="flex items-baseline gap-2">
                            <span className="text-lg font-bold text-[#007BFB]">{item.price}</span>
                            {item.note && (
                              <span className="text-sm text-[#727E9F]">{item.note}</span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#F8FBFF]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 animate-fade-in">
              <h2 className="text-3xl font-bold text-[#1A1F2C] mb-3">
                Получите консультацию
              </h2>
              <p className="text-[#727E9F]">
                Оставьте заявку, и наш специалист свяжется с вами в ближайшее время
              </p>
            </div>

            <Card className="border-[#E6EDFF] animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[#1A1F2C] mb-2">
                      Ваше имя
                    </label>
                    <Input
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="border-[#E6EDFF] focus:border-[#007BFB]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#1A1F2C] mb-2">
                      Телефон
                    </label>
                    <Input
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="border-[#E6EDFF] focus:border-[#007BFB]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#1A1F2C] mb-2">
                      Сообщение
                    </label>
                    <Textarea
                      placeholder="Опишите, какая услуга вас интересует..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="border-[#E6EDFF] focus:border-[#007BFB] min-h-[120px]"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-[#007BFB] hover:bg-[#0066D6]">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-16 border-t border-[#E6EDFF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 animate-fade-in">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#E6EDFF] flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" className="text-[#007BFB]" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#1A1F2C] mb-1">Телефон</h3>
                  <a href="tel:+78003016787" className="text-[#727E9F] hover:text-[#007BFB]">
                    +7 800 301-67-87
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#E6EDFF] flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" className="text-[#007BFB]" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#1A1F2C] mb-1">Email</h3>
                  <a
                    href="mailto:kemerovo@samoletplus.ru"
                    className="text-[#727E9F] hover:text-[#007BFB]"
                  >
                    kemerovo@samoletplus.ru
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#E6EDFF] flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" className="text-[#007BFB]" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#1A1F2C] mb-1">Адрес</h3>
                  <p className="text-[#727E9F]">г. Кемерово, Проспект Кузнецкий, 4 офис 4</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#1A1F2C] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="text-xl font-bold">САМОЛЁТ</div>
              <div className="px-2 py-1 bg-[#007BFB] text-white text-xs font-medium rounded">
                ПЛЮС
              </div>
            </div>

            <p className="text-sm text-gray-400">
              © 2024 САМОЛЁТ ПЛЮС. Все права защищены.
            </p>

            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="MessageCircle" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Mail" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
