import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";
import Icon from "@/components/ui/icon";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent, formType: string) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-primary text-primary-foreground py-3 px-4 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Flame" size={28} />
            <span className="font-bold text-xl">РПК</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#about" className="hover:opacity-80 transition">О программе</a>
            <a href="#modules" className="hover:opacity-80 transition">Модули</a>
            <a href="#reviews" className="hover:opacity-80 transition">Отзывы</a>
            <a href="#contacts" className="hover:opacity-80 transition">Контакты</a>
          </nav>
          <a href="tel:+78001234567" className="text-sm font-medium flex items-center gap-1">
            <Icon name="Phone" size={16} />
            8 (800) 123-45-67
          </a>
        </div>
      </header>

      <section className="relative bg-gradient-to-br from-primary/5 to-primary/10 py-20 px-4">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              Программа повышения квалификации «Пожарная безопасность»
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Дополнительная профессиональная программа для руководителей организаций и ответственных за обеспечение пожарной безопасности
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="text-base" onClick={() => document.getElementById('lead-form-1')?.scrollIntoView({ behavior: 'smooth' })}>
                Забронировать место
              </Button>
              <Button size="lg" variant="outline" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
                Подробнее о программе
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Icon name="Clock" size={32} className="text-primary" />
                </div>
                <p className="text-sm font-medium">16-40 часов</p>
                <p className="text-xs text-muted-foreground">Продолжительность</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Icon name="Award" size={32} className="text-primary" />
                </div>
                <p className="text-sm font-medium">Гос. лицензия</p>
                <p className="text-xs text-muted-foreground">Официальный диплом</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Icon name="Users" size={32} className="text-primary" />
                </div>
                <p className="text-sm font-medium">270+ компаний</p>
                <p className="text-xs text-muted-foreground">Доверяют нам</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://cdn.poehali.dev/projects/be15a9b6-ab98-4efd-bac5-6352748a8cef/files/456dde07-59e6-4722-a02e-09422ef46c93.jpg" 
              alt="Обучение пожарной безопасности" 
              className="rounded-lg shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Преимущества обучения</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: "BadgeCheck", title: "Государственная лицензия", desc: "Официальное удостоверение установленного образца" },
              { icon: "CreditCard", title: "Рассрочка платежа", desc: "Возможность оплаты в несколько этапов без переплат" },
              { icon: "Monitor", title: "Дистанционное обучение", desc: "Учитесь из любой точки мира в удобное время" },
              { icon: "HeadphonesIcon", title: "Поддержка 24/7", desc: "Консультации преподавателей на всех этапах обучения" }
            ].map((item, i) => (
              <Card key={i} className="border-2 hover:border-primary transition-all hover:shadow-lg">
                <CardContent className="pt-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Icon name={item.icon} size={32} className="text-primary" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 px-4 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Об обучении</h2>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">1</div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Актуальная программа</h3>
                  <p className="text-sm text-muted-foreground">Соответствует всем требованиям МЧС и последним изменениям законодательства</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">2</div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Практические навыки</h3>
                  <p className="text-sm text-muted-foreground">Отработка действий при пожаре, работа с первичными средствами пожаротушения</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">3</div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Опытные преподаватели</h3>
                  <p className="text-sm text-muted-foreground">Эксперты с многолетним опытом работы в области пожарной безопасности</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">4</div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Официальный документ</h3>
                  <p className="text-sm text-muted-foreground">Удостоверение о повышении квалификации государственного образца</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img 
              src="https://cdn.poehali.dev/projects/be15a9b6-ab98-4efd-bac5-6352748a8cef/files/9f278f15-7f73-4e20-a773-b6f34e7b0737.jpg" 
              alt="Государственная лицензия" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="bg-destructive/10 border-2 border-destructive rounded-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-destructive flex items-center gap-3">
                <Icon name="AlertTriangle" size={36} />
                Штрафы за отсутствие обучения
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <p className="text-sm text-muted-foreground mb-2">Для граждан</p>
                  <p className="text-3xl font-bold text-destructive mb-2">до 5 000 ₽</p>
                  <p className="text-xs text-muted-foreground">Статья 20.4 КоАП РФ</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <p className="text-sm text-muted-foreground mb-2">Для должностных лиц</p>
                  <p className="text-3xl font-bold text-destructive mb-2">до 50 000 ₽</p>
                  <p className="text-xs text-muted-foreground">Статья 20.4 КоАП РФ</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <p className="text-sm text-muted-foreground mb-2">Для организаций</p>
                  <p className="text-3xl font-bold text-destructive mb-2">до 200 000 ₽</p>
                  <p className="text-xs text-muted-foreground">Статья 20.4 КоАП РФ</p>
                </div>
              </div>
              <p className="mt-6 text-sm text-center text-muted-foreground">
                * При повторном нарушении штрафы увеличиваются, возможна приостановка деятельности на срок до 90 суток
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Для кого подходит обучение</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: "Briefcase", title: "Руководители организаций", desc: "Директора, генеральные директора, управляющие" },
              { icon: "Shield", title: "Ответственные за ПБ", desc: "Специалисты, назначенные ответственными за пожарную безопасность" },
              { icon: "Building2", title: "Руководители подразделений", desc: "Начальники филиалов, отделов, структурных подразделений" }
            ].map((item, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-primary/10 rounded-full">
                      <Icon name={item.icon} size={40} className="text-primary" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="modules" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Модули обучения</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
            {[
              { num: "01", title: "Основы пожарной безопасности", items: ["Законодательство в области ПБ", "Классификация пожаров", "Система обеспечения ПБ"] },
              { num: "02", title: "Пожарная профилактика", items: ["Организация мероприятий по ПБ", "Противопожарный режим", "Инструктажи и обучение"] },
              { num: "03", title: "Средства пожаротушения", items: ["Первичные средства тушения", "Автоматические системы", "Правила применения"] },
              { num: "04", title: "Действия при пожаре", items: ["Алгоритм действий персонала", "Эвакуация людей", "Взаимодействие с МЧС"] }
            ].map((module, i) => (
              <Card key={i} className="border-l-4 border-l-primary hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                        {module.num}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3">{module.title}</h3>
                      <ul className="space-y-1">
                        {module.items.map((item, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                            <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Виды обучения</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-primary">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <Icon name="Monitor" size={48} className="text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center mb-4">Дистанционное обучение</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Обучение через личный кабинет в удобное время</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Видеолекции и интерактивные материалы</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Онлайн-тестирование по окончании курса</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Доступ к материалам на весь период обучения</p>
                  </div>
                </div>
                <div className="text-center pt-4 border-t">
                  <p className="text-sm text-muted-foreground mb-2">Стоимость от</p>
                  <p className="text-3xl font-bold text-primary">3 500 ₽</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <Icon name="Users" size={48} className="text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center mb-4">Очное обучение</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Занятия в оборудованных аудиториях</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Практические занятия с инструктором</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Работа с реальным оборудованием</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Сертификат выдается в день окончания</p>
                  </div>
                </div>
                <div className="text-center pt-4 border-t">
                  <p className="text-sm text-muted-foreground mb-2">Стоимость от</p>
                  <p className="text-3xl font-bold text-primary">5 900 ₽</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Как проходит обучение</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block"></div>
              <div className="space-y-8">
                {[
                  { icon: "FileCheck", title: "Регистрация", desc: "Заполните заявку и выберите удобную форму обучения" },
                  { icon: "CreditCard", title: "Оплата", desc: "Оплатите курс любым удобным способом, возможна рассрочка" },
                  { icon: "BookOpen", title: "Обучение", desc: "Изучайте материалы курса в удобном темпе (16-40 часов)" },
                  { icon: "ClipboardCheck", title: "Тестирование", desc: "Пройдите итоговый тест для проверки знаний" },
                  { icon: "Award", title: "Получение документов", desc: "Получите удостоверение установленного образца" }
                ].map((step, i) => (
                  <div key={i} className="flex gap-6 items-start relative">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl shadow-lg">
                        {i + 1}
                      </div>
                    </div>
                    <Card className="flex-1 hover:shadow-md transition-shadow">
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                          <Icon name={step.icon} size={32} className="text-primary flex-shrink-0" />
                          <div>
                            <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                            <p className="text-sm text-muted-foreground">{step.desc}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="lead-form-1" className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Получите консультацию специалиста</h2>
              <p className="mb-6 opacity-90">Ответим на все вопросы о программе обучения и поможем выбрать подходящий формат</p>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={20} />
                  <span className="text-sm">Бесплатная консультация</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={20} />
                  <span className="text-sm">Расчет стоимости для вашей компании</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={20} />
                  <span className="text-sm">Помощь в выборе программы</span>
                </div>
              </div>
            </div>
            <Card className="bg-white text-foreground">
              <CardContent className="pt-6">
                <form onSubmit={(e) => handleSubmit(e, "consultation")} className="space-y-4">
                  <Input 
                    placeholder="Ваше имя" 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                  <Input 
                    type="tel" 
                    placeholder="Телефон" 
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                  <Input 
                    type="email" 
                    placeholder="Email" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                  <Button type="submit" className="w-full" size="lg">
                    Получить консультацию
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Отзывы наших клиентов</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { name: "Александр Петров", position: "Директор ООО «СтройТех»", text: "Отличная программа обучения! Все материалы изложены доступно, преподаватели — настоящие профессионалы. Получили удостоверения вовремя.", rating: 5 },
              { name: "Елена Смирнова", position: "Ответственный за ПБ, ЗАО «Логистика+»", text: "Дистанционный формат очень удобен — обучались всей командой без отрыва от производства. Материалы актуальные, тесты понятные.", rating: 5 },
              { name: "Михаил Иванов", position: "Генеральный директор ИП Иванов", text: "Прошел уже несколько курсов в этом центре. Всегда на высоте! Рекомендую как надежного партнера в области обучения.", rating: 5 }
            ].map((review, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-3">
                    {[...Array(review.rating)].map((_, idx) => (
                      <Icon key={idx} name="Star" size={18} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-sm mb-4 text-muted-foreground italic">"{review.text}"</p>
                  <div className="flex items-center gap-3 pt-4 border-t">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                      {review.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{review.name}</p>
                      <p className="text-xs text-muted-foreground">{review.position}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Забронируйте место на курс</h2>
              <p className="text-muted-foreground">Количество мест в группе ограничено. Есть возможность рассрочки платежа!</p>
            </div>
            <form onSubmit={(e) => handleSubmit(e, "booking")} className="space-y-4 max-w-md mx-auto">
              <Input 
                placeholder="Ваше имя *" 
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <Input 
                type="tel" 
                placeholder="Телефон *" 
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
              <Input 
                type="email" 
                placeholder="Email *" 
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
              <Textarea 
                placeholder="Комментарий (необязательно)"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={3}
              />
              <div className="flex items-start gap-2 p-4 bg-primary/5 rounded-lg">
                <Icon name="Info" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  Доступна рассрочка на 3-6 месяцев без процентов и переплат
                </p>
              </div>
              <Button type="submit" className="w-full" size="lg">
                Забронировать место
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                * Поля, обязательные для заполнения
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Часто задаваемые вопросы</h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                Какие документы я получу после обучения?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                После успешного прохождения курса и сдачи итогового теста вы получите удостоверение о повышении квалификации государственного образца. Документ вносится в федеральный реестр и действителен на всей территории РФ.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                Сколько длится обучение?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Продолжительность программы зависит от выбранного курса: от 16 до 40 часов. При дистанционном обучении вы можете проходить курс в удобном темпе, при очном — согласно расписанию группы (обычно 2-5 дней).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                Можно ли оплатить обучение в рассрочку?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, мы предоставляем беспроцентную рассрочку на 3-6 месяцев. Никаких переплат и скрытых комиссий. Оформление занимает 5 минут, решение принимается в течение нескольких минут.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                Признается ли ваш диплом государственными органами?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, наш учебный центр имеет государственную лицензию на образовательную деятельность. Все выдаваемые документы соответствуют требованиям законодательства и признаются МЧС, Рострудом и другими контролирующими органами.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                Как проходит дистанционное обучение?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                После оплаты вы получаете доступ к личному кабинету с обучающими материалами: видеолекции, презентации, нормативные документы. Изучаете материал в удобное время, затем проходите онлайн-тестирование. По итогам получаете удостоверение.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                Нужно ли проходить обучение повторно?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, согласно требованиям законодательства, повышение квалификации по пожарной безопасности необходимо проходить регулярно — не реже одного раза в 3 года для руководителей и ответственных лиц.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="contacts" className="py-16 px-4 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Наши контакты</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Icon name="MapPin" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Адрес</h3>
                      <p className="text-sm text-muted-foreground">г. Москва, ул. Примерная, д. 123, офис 456</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Icon name="Phone" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Телефон</h3>
                      <p className="text-sm text-muted-foreground">8 (800) 123-45-67 (бесплатно по РФ)</p>
                      <p className="text-sm text-muted-foreground">+7 (495) 123-45-67</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Icon name="Mail" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-sm text-muted-foreground">info@rpk-education.ru</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Icon name="Clock" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Режим работы</h3>
                      <p className="text-sm text-muted-foreground">Пн-Пт: 9:00 — 18:00</p>
                      <p className="text-sm text-muted-foreground">Сб-Вс: выходной</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-muted/30 rounded-lg p-4 flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <Icon name="Map" size={64} className="mx-auto mb-4 opacity-50" />
                <p className="text-sm">Здесь может быть интерактивная карта</p>
                <p className="text-xs mt-2">Яндекс.Карты или Google Maps</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Flame" size={28} />
                <span className="font-bold text-xl">РПК</span>
              </div>
              <p className="text-sm opacity-80">Региональный Профессиональный Центр — ваш надежный партнер в области дополнительного профессионального образования</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Программы</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:opacity-100 transition">Пожарная безопасность</a></li>
                <li><a href="#" className="hover:opacity-100 transition">Охрана труда</a></li>
                <li><a href="#" className="hover:opacity-100 transition">Электробезопасность</a></li>
                <li><a href="#" className="hover:opacity-100 transition">Промышленная безопасность</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Информация</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:opacity-100 transition">О центре</a></li>
                <li><a href="#" className="hover:opacity-100 transition">Лицензии</a></li>
                <li><a href="#" className="hover:opacity-100 transition">Преподаватели</a></li>
                <li><a href="#" className="hover:opacity-100 transition">Отзывы</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li>8 (800) 123-45-67</li>
                <li>info@rpk-education.ru</li>
                <li>г. Москва, ул. Примерная, 123</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-80">
            <p>© 2024 РПК. Все права защищены.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:opacity-100 transition">Политика конфиденциальности</a>
              <a href="#" className="hover:opacity-100 transition">Договор оферты</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
