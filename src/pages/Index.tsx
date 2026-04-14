import Icon from "@/components/ui/icon";

const HOTEL_IMG = "https://cdn.poehali.dev/projects/be15a9b6-ab98-4efd-bac5-6352748a8cef/files/a18729cd-3fd2-472b-9084-4d53825c2232.jpg";
const ROOM_IMG = "https://cdn.poehali.dev/projects/be15a9b6-ab98-4efd-bac5-6352748a8cef/files/07daa951-173b-45e0-8d61-e5070295673a.jpg";
const SPA_IMG = "https://cdn.poehali.dev/projects/be15a9b6-ab98-4efd-bac5-6352748a8cef/files/e5e29823-8e96-4db7-bda4-a3e6f0991ebd.jpg";

const GOLD = "#C9A96E";
const DARK = "#0D1117";
const DARK2 = "#131A24";

export default function Index() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#0D1117] text-white min-h-screen" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10" style={{ background: "rgba(13,17,23,0.95)", backdropFilter: "blur(12px)" }}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: GOLD }}>
              <Icon name="Waves" size={16} className="text-black" />
            </div>
            <span className="font-bold tracking-wider text-sm" style={{ color: GOLD }}>RIVER ROCK</span>
          </div>
          <div className="hidden md:flex gap-6 text-xs tracking-widest text-white/60">
            {(["КОНЦЕПЦИЯ", "ЛОКАЦИЯ", "ДОХОДНОСТЬ", "УСЛОВИЯ", "КОНТАКТЫ"] as const).map((item, i) => (
              <button key={i} onClick={() => scrollTo(["concept", "location", "returns", "terms", "contacts"][i])}
                className="hover:text-white transition-colors uppercase">{item}</button>
            ))}
          </div>
          <a href="tel:+78001234567" className="text-xs tracking-wider" style={{ color: GOLD }}>
            +7 (800) 123-45-67
          </a>
        </div>
      </nav>

      {/* SLIDE 1 — COVER */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HOTEL_IMG} alt="River Rock Gelendzhik Bay" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(13,17,23,0.55) 0%, rgba(13,17,23,0.75) 60%, rgba(13,17,23,1) 100%)" }} />
        </div>
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="mb-8 inline-block border border-white/20 px-5 py-1.5 text-xs tracking-[0.3em] text-white/60 uppercase">
            Инвестиционное предложение · Апрель 2026
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight leading-none">
            RIVER ROCK
          </h1>
          <h2 className="text-3xl md:text-5xl font-light mb-2 tracking-widest" style={{ color: GOLD }}>
            GELENDZHIK BAY
          </h2>
          <p className="text-white/70 mt-6 tracking-[0.15em] uppercase font-light" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.3rem" }}>
            Бутик-отель премиум-класса 5★
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => scrollTo("returns")}
              className="px-8 py-4 font-bold text-sm tracking-widest uppercase text-black transition-all hover:opacity-90"
              style={{ background: GOLD }}>
              Инвестиционный расчёт
            </button>
            <button onClick={() => scrollTo("concept")}
              className="px-8 py-4 font-bold text-sm tracking-widest uppercase border border-white/30 text-white hover:border-white/60 transition-all">
              О проекте
            </button>
          </div>
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            {[
              { val: "5★", label: "Категория отеля" },
              { val: "14,85%", label: "Совокупный ROI / год" },
              { val: "4,2 года", label: "Срок окупаемости" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-bold" style={{ color: GOLD }}>{s.val}</div>
                <div className="text-xs text-white/50 mt-1 tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={24} className="text-white/30" />
        </div>
      </section>

      {/* SLIDE 2 — КОНЦЕПЦИЯ */}
      <section id="concept" className="py-24 px-6" style={{ background: DARK2 }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs tracking-[0.3em] text-white/40 uppercase mb-3">Слайд 02</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Концепция проекта</h2>
            <div className="w-16 h-0.5 mx-auto mb-8" style={{ background: GOLD }} />
            <p className="text-white/40 text-sm tracking-widest uppercase">Инновационная гостиница премиум-класса</p>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-white/80 leading-relaxed mb-8" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.2rem" }}>
                Сочетание архитектурной концепции, дизайна, опыта отельного оператора международного уровня и профессионализма застройщика СЗ «Геленджик» стало новым символом премиального отдыха на Черноморском побережье.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: "Building2", label: "Архитектура", desc: "Авторская концепция с учётом рельефа бухты" },
                  { icon: "Globe", label: "Оператор", desc: "Международный стандарт River Rock Hotels & Resorts" },
                  { icon: "Gem", label: "Отделка", desc: "Элитные материалы, дизайнерская мебель" },
                  { icon: "Users", label: "Застройщик", desc: "ООО СЗ «Геленджик» — опытный девелопер" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded flex items-center justify-center" style={{ background: "rgba(201,169,110,0.15)" }}>
                      <Icon name={item.icon} size={18} style={{ color: GOLD }} />
                    </div>
                    <div>
                      <div className="font-bold text-sm mb-1">{item.label}</div>
                      <div className="text-white/50 text-xs leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img src={SPA_IMG} alt="Инфраструктура отеля" className="rounded-sm w-full h-80 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 p-6 rounded-b-sm" style={{ background: "linear-gradient(to top, rgba(13,17,23,0.9), transparent)" }}>
                <p className="text-white/80 text-sm italic" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                  «Совершенство в каждой детали. Уникальный дизайн, атмосфера приватности и роскоши.»
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 3 — ГЕЛЕНДЖИК */}
      <section className="py-24 px-6" style={{ background: DARK }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs tracking-[0.3em] text-white/40 uppercase mb-3">Слайд 03</div>
            <h2 className="text-4xl font-bold mb-3">Геленджик — центр черноморского побережья</h2>
            <div className="w-16 h-0.5 mx-auto mb-4" style={{ background: GOLD }} />
            <p className="text-white/40 text-sm tracking-widest uppercase">Устойчивый рост туристического потока</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-bold text-sm tracking-widest uppercase mb-6" style={{ color: GOLD }}>Туристический поток</h3>
              <div className="space-y-1">
                <div className="grid grid-cols-3 text-xs text-white/40 pb-3 border-b border-white/10 tracking-wider uppercase">
                  <span>Год</span><span className="text-center">Турпоток</span><span className="text-right">Динамика</span>
                </div>
                {[
                  { year: "2023", val: "~3,8 млн чел.", dyn: "База", color: "text-white/60" },
                  { year: "2024", val: "~4,2 млн чел.", dyn: "+10,5%", color: "text-green-400" },
                  { year: "2025 (оценка)", val: "~4,7 млн чел.", dyn: "+12%", color: "text-green-400" },
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-3 py-4 border-b border-white/5 items-center">
                    <span className="text-white/80 font-medium text-sm">{row.year}</span>
                    <span className="text-center text-white/70 text-sm">{row.val}</span>
                    <span className={`text-right font-bold text-sm ${row.color}`}>{row.dyn}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-sm tracking-widest uppercase mb-6" style={{ color: GOLD }}>Транспортная доступность</h3>
              <div className="space-y-1">
                <div className="grid grid-cols-3 text-xs text-white/40 pb-3 border-b border-white/10 tracking-wider uppercase">
                  <span className="col-span-2">Направление</span><span className="text-right">Время</span>
                </div>
                {[
                  { dir: "Аэропорт Геленджик", dist: "10 км", time: "15–20 мин" },
                  { dir: "Аэропорт Анапа", dist: "90 км", time: "1,5 часа" },
                  { dir: "Аэропорт Сочи", dist: "220 км", time: "3,5–4 ч" },
                  { dir: "Симферополь", dist: "280 км", time: "4,5 ч" },
                  { dir: "Краснодар", dist: "180 км", time: "2,5 ч" },
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-3 py-3 border-b border-white/5 items-center">
                    <div className="col-span-2">
                      <div className="text-white/80 text-sm">{row.dir}</div>
                      <div className="text-white/30 text-xs">{row.dist}</div>
                    </div>
                    <div className="text-right font-bold text-sm" style={{ color: GOLD }}>{row.time}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 4 — ОПЕРАТОР */}
      <section className="py-24 px-6" style={{ background: DARK2 }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs tracking-[0.3em] text-white/40 uppercase mb-3">Слайд 04</div>
            <h2 className="text-4xl font-bold mb-3">River Rock Hotels & Resorts</h2>
            <div className="w-16 h-0.5 mx-auto mb-4" style={{ background: GOLD }} />
            <p className="text-white/40 text-sm tracking-widest uppercase">Оператор мирового уровня</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: "Users", num: "5+ млн", label: "постоянных клиентов сети" },
              { icon: "TrendingUp", num: "от 70%", label: "минимальная загрузка отелей сети" },
              { icon: "Globe", num: "4+ региона", label: "Европа, Ближний Восток, Африка, Карибы" },
            ].map((item, i) => (
              <div key={i} className="text-center p-8 border border-white/10 rounded-sm hover:border-amber-500/30 transition-colors">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "rgba(201,169,110,0.15)" }}>
                  <Icon name={item.icon} size={24} style={{ color: GOLD }} />
                </div>
                <div className="text-3xl font-bold mb-2" style={{ color: GOLD }}>{item.num}</div>
                <div className="text-white/60 text-sm">{item.label}</div>
              </div>
            ))}
          </div>
          <div className="border border-white/10 rounded-sm p-8">
            <h3 className="font-bold text-sm tracking-widest uppercase mb-8" style={{ color: GOLD }}>🌍 География присутствия</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl">🇹🇷</span>
                  <span className="font-bold text-sm tracking-wider">ТУРЦИЯ</span>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">Анталия — Adalya Port River Rock (Oldtown)<br/>Штаб-квартира и центральный офис управления</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl">🇷🇺</span>
                  <span className="font-bold text-sm tracking-wider">РОССИЯ — 9 проектов</span>
                </div>
                <ul className="text-white/60 text-sm space-y-1 leading-relaxed">
                  <li>• Геленджик — <span style={{ color: GOLD }}>River Rock Gelendzhik Bay 5★</span></li>
                  <li>• Домбай — Lodge & Narzannyi 5★</li>
                  <li>• Кабардинка — Resort, Spa & Villas 5★</li>
                  <li>• Ессентуки — СГК 5★ (проектирование)</li>
                </ul>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl">🌍</span>
                  <span className="font-bold text-sm tracking-wider">ГЛОБАЛЬНО</span>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">
                  🇬🇪 Грузия — La Quinta by Wyndham Batumi (2025)<br/>
                  White label оператор (Wyndham и др.)<br/>
                  Операционный офис в Дубае, ОАЭ
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 5 — КОМАНДА */}
      <section className="py-24 px-6" style={{ background: DARK }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs tracking-[0.3em] text-white/40 uppercase mb-3">Слайд 05</div>
            <h2 className="text-4xl font-bold mb-3">Команда управления</h2>
            <div className="w-16 h-0.5 mx-auto mb-4" style={{ background: GOLD }} />
            <p className="text-white/40 text-sm tracking-widest uppercase">Руководство с опытом ведущих мировых гостиничных сетей</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Бугра Бербероглу",
                role: "Президент и Исполнительный директор",
                items: [
                  "Экс-генеральный директор Rixos Hotels",
                  "Старший вице-президент Kempinski (Индия, Ближний Восток, Африка)",
                  "Руководитель Emirates Palace (Абу-Даби)",
                  "Почётный консул Франции в Анталии",
                ],
              },
              {
                name: "Авсар Коч",
                role: "Соучредитель и коммерческий директор",
                items: [
                  "Руководил операциями Kempinski Hotels с оборотом >420 млн €",
                  "Бренд-стратег и эксперт по запуску объектов",
                  "За 5 лет открыл 9 отелей на различных рынках",
                  "Специализация: коммерческий гостиничный менеджмент",
                ],
              },
            ].map((person, i) => (
              <div key={i} className="border border-white/10 rounded-sm p-8 hover:border-amber-500/30 transition-colors">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold"
                    style={{ background: "rgba(201,169,110,0.2)", color: GOLD }}>
                    {person.name.split(" ").map((n: string) => n[0]).join("")}
                  </div>
                  <div>
                    <div className="font-bold text-lg">{person.name}</div>
                    <div className="text-xs tracking-wider mt-1" style={{ color: GOLD }}>{person.role}</div>
                  </div>
                </div>
                <ul className="space-y-2">
                  {person.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-white/60">
                      <span className="mt-1 flex-shrink-0" style={{ color: GOLD }}>—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 border border-white/10 rounded-sm text-center">
            <p className="text-white/60 text-sm italic" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.05rem" }}>
              Команда с подтверждённым опытом вывода отелей на операционную стабильность и достижения плановых показателей загрузки и доходности.
            </p>
          </div>
        </div>
      </section>

      {/* SLIDE 6 — ПРОГРАММА ЛОЯЛЬНОСТИ */}
      <section className="py-24 px-6" style={{ background: DARK2 }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs tracking-[0.3em] text-white/40 uppercase mb-3">Слайд 06</div>
            <h2 className="text-4xl font-bold mb-3">River Rock Infinity</h2>
            <div className="w-16 h-0.5 mx-auto mb-4" style={{ background: GOLD }} />
            <p className="text-white/40 text-sm tracking-widest uppercase">Программа лояльности — привилегии для владельцев номеров</p>
          </div>
          <div className="border border-white/10 rounded-sm overflow-hidden">
            <div className="grid grid-cols-3 text-xs tracking-widest uppercase font-bold" style={{ background: "rgba(201,169,110,0.1)" }}>
              <div className="p-4 text-white/60">Привилегия</div>
              <div className="p-4 text-center" style={{ color: GOLD }}>Gold</div>
              <div className="p-4 text-center" style={{ color: GOLD }}>Diamond</div>
            </div>
            {[
              { priv: "Приоритетный апгрейд номера", gold: "✓", diam: "✓" },
              { priv: "Персональный тревел-координатор", gold: "✓", diam: "✓" },
              { priv: "Трансфер из аэропорта", gold: "Консьерж", diam: "VIP-сервис" },
              { priv: "Скидка на проживание в сети", gold: "15%", diam: "20%" },
              { priv: "Гибкий график заезда/выезда", gold: "✓", diam: "✓" },
              { priv: "Приоритетное бронирование (высокий сезон)", gold: "✓", diam: "✓" },
              { priv: "Доступ к закрытым мероприятиям", gold: "✓", diam: "✓" },
              { priv: "Проживание собственника", gold: "14 дней/год", diam: "14 дней/год" },
            ].map((row, i) => (
              <div key={i} className={`grid grid-cols-3 border-t border-white/5 ${i % 2 === 0 ? "" : "bg-white/[0.02]"}`}>
                <div className="p-4 text-sm text-white/70">{row.priv}</div>
                <div className="p-4 text-center text-sm font-medium text-white/80">{row.gold}</div>
                <div className="p-4 text-center text-sm font-medium" style={{ color: GOLD }}>{row.diam}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-5 border border-white/10 rounded-sm text-center">
            <p className="text-white/60 text-sm italic" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.05rem" }}>
              Владелец номера получает не только доход, но и премиальный отдых в сети отелей River Rock на особых условиях.
            </p>
          </div>
        </div>
      </section>

      {/* SLIDE 7 — ЛОКАЦИЯ */}
      <section id="location" className="py-24 px-6" style={{ background: DARK }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs tracking-[0.3em] text-white/40 uppercase mb-3">Слайд 07</div>
            <h2 className="text-4xl font-bold mb-3">Уникальная локация</h2>
            <div className="w-16 h-0.5 mx-auto mb-4" style={{ background: GOLD }} />
            <p className="text-white/40 text-sm tracking-widest uppercase">Элитный район Толстого мыса · Сосновые рощи · Море</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-1">
              <div className="grid grid-cols-3 text-xs text-white/40 pb-3 border-b border-white/10 tracking-wider uppercase">
                <span className="col-span-2">Объект</span><span className="text-right">Время</span>
              </div>
              {[
                { obj: "Яхтенная марина", note: "На территории", time: "1–2 мин", hot: true },
                { obj: "Вертолётная площадка", note: "~1,5 км", time: "3 мин", hot: false },
                { obj: "Аэропорт Геленджик", note: "10 км", time: "15–20 мин", hot: false },
                { obj: "Набережная «Круча»", note: "~1 км", time: "10 мин пешком", hot: false },
                { obj: "Пляж «Сады морей»", note: "~1,5 км", time: "5–10 мин", hot: false },
                { obj: "Санаторная зона", note: "~1–2 км", time: "3–5 мин", hot: false },
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-3 py-3 border-b border-white/5 items-center">
                  <div className="col-span-2">
                    <span className={`text-sm ${row.hot ? "font-bold" : "text-white/80"}`} style={row.hot ? { color: GOLD } : {}}>{row.obj}</span>
                    <div className="text-white/30 text-xs">{row.note}</div>
                  </div>
                  <div className="text-right text-sm font-medium" style={{ color: GOLD }}>{row.time}</div>
                </div>
              ))}
            </div>
            <div className="space-y-1">
              <div className="grid grid-cols-3 text-xs text-white/40 pb-3 border-b border-white/10 tracking-wider uppercase">
                <span className="col-span-2">Объект</span><span className="text-right">Время</span>
              </div>
              {[
                { obj: "Винодельня «Шато де Талю»", note: "~7 км", time: "15 мин" },
                { obj: "Центральная набережная", note: "~7 км", time: "15 мин" },
                { obj: "Центр города (ТЦ, кино)", note: "~6 км", time: "15 мин" },
                { obj: "Центр «Белый Мыс»", note: "~9 км", time: "20 мин / 30 мин (яхта)" },
                { obj: "Аквапарк «Золотая Бухта»", note: "~10 км", time: "20 мин" },
                { obj: "Гольф-клуб «Геленджик»", note: "~12 км", time: "20 мин" },
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-3 py-3 border-b border-white/5 items-center">
                  <div className="col-span-2">
                    <span className="text-sm text-white/80">{row.obj}</span>
                    <div className="text-white/30 text-xs">{row.note}</div>
                  </div>
                  <div className="text-right text-sm font-medium" style={{ color: GOLD }}>{row.time}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-sm overflow-hidden h-64">
            <img src={HOTEL_IMG} alt="Локация" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-end p-6" style={{ background: "linear-gradient(to top, rgba(13,17,23,0.9) 0%, transparent 60%)" }}>
              <p className="text-white/80 text-sm italic" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.1rem" }}>
                «Уникальное сочетание природного уединения и доступности всей премиальной инфраструктуры курорта.»
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 8 — ЗАГРУЗКА */}
      <section className="py-24 px-6" style={{ background: DARK2 }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs tracking-[0.3em] text-white/40 uppercase mb-3">Слайд 08</div>
            <h2 className="text-4xl font-bold mb-3">Загрузка премиальных отелей</h2>
            <div className="w-16 h-0.5 mx-auto mb-4" style={{ background: GOLD }} />
            <p className="text-white/40 text-sm tracking-widest uppercase">Комплексы 4–5★ работают с высокой загрузкой круглый год</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="space-y-6">
                {[
                  { season: "Высокий (июль–август)", val: "85–95%", pct: 90, note: "Практически полная загрузка", color: "#22c55e" },
                  { season: "Межсезонье (осень–весна)", val: "50–60%", pct: 55, note: "Спа и деловой туризм", color: GOLD },
                  { season: "Низкий / Новогодний", val: "50–80%", pct: 65, note: "Лидеры (Kempinski) — до 80%", color: GOLD },
                  { season: "Среднегодовая (прогноз)", val: "~65–70%", pct: 67, note: "Для качественного премиального объекта", color: GOLD },
                ].map((row, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-white/80">{row.season}</span>
                      <span className="font-bold text-sm" style={{ color: row.color }}>{row.val}</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full rounded-full transition-all" style={{ width: `${row.pct}%`, background: row.color }} />
                    </div>
                    <div className="text-xs text-white/40 mt-1">{row.note}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="border border-white/10 rounded-sm p-8 text-center">
              <div className="text-xs tracking-widest text-white/40 uppercase mb-4">В финансовой модели принята</div>
              <div className="text-6xl font-bold mb-2" style={{ color: GOLD }}>65%</div>
              <div className="text-white/60 text-sm mb-6">Консервативная загрузка</div>
              <div className="w-full h-px bg-white/10 my-6" />
              <div className="text-xs text-white/40 leading-relaxed">
                Запас прочности относительно рыночных показателей лидеров рынка (Kempinski, Metropol)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 9 — РОСТ СТОИМОСТИ */}
      <section className="py-24 px-6" style={{ background: DARK }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs tracking-[0.3em] text-white/40 uppercase mb-3">Слайд 09</div>
            <h2 className="text-4xl font-bold mb-3">Рост стоимости недвижимости</h2>
            <div className="w-16 h-0.5 mx-auto mb-4" style={{ background: GOLD }} />
            <p className="text-white/40 text-sm tracking-widest uppercase">Премиальный сегмент · Краснодарский край</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2 border border-white/10 rounded-sm p-8">
              <h3 className="font-bold text-sm tracking-widest uppercase mb-6" style={{ color: GOLD }}>Среднегодовой рост стоимости м² (4–5★)</h3>
              <div className="space-y-1">
                <div className="grid grid-cols-3 text-xs text-white/40 pb-3 border-b border-white/10 tracking-wider uppercase">
                  <span>Год</span><span className="text-center">Рост</span><span className="text-right">Источник</span>
                </div>
                {[
                  { year: "2024", growth: "+15–17%", src: 'Аналитика курорта "Лучи"' },
                  { year: "2025", growth: "+14,5%", src: "ЕМИСС (Краснодарский край)" },
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-3 py-4 border-b border-white/5 items-center">
                    <span className="text-white/80 font-medium">{row.year}</span>
                    <span className="text-center font-bold text-green-400">{row.growth}</span>
                    <span className="text-right text-white/40 text-xs">{row.src}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="border border-white/10 rounded-sm p-8 text-center flex flex-col items-center justify-center" style={{ borderColor: "rgba(201,169,110,0.3)" }}>
              <div className="text-xs tracking-widest text-white/40 uppercase mb-3">В модели принято</div>
              <div className="text-5xl font-bold mb-2" style={{ color: GOLD }}>7%</div>
              <div className="text-white/60 text-sm mb-4">в год</div>
              <div className="w-full h-px bg-white/10 my-4" />
              <div className="text-xs text-white/50 leading-relaxed">
                Запас прочности <strong className="text-white/80">2×</strong> относительно рыночной динамики
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 10 — ИНФРАСТРУКТУРА */}
      <section className="py-24 px-6" style={{ background: DARK2 }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs tracking-[0.3em] text-white/40 uppercase mb-3">Слайд 10</div>
            <h2 className="text-4xl font-bold mb-3">Инфраструктура отеля</h2>
            <div className="w-16 h-0.5 mx-auto mb-4" style={{ background: GOLD }} />
            <p className="text-white/40 text-sm tracking-widest uppercase">Пятизвёздочный премиальный бутик-отель с эксклюзивным сервисом</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "UtensilsCrossed", label: "Ресторан авторской кухни" },
                  { icon: "Sparkles", label: "Спа-комплекс полного цикла" },
                  { icon: "Waves", label: "Бассейны с подогревом" },
                  { icon: "Dumbbell", label: "Тренажёрный зал премиум" },
                  { icon: "Wine", label: "Лобби-бар и лаунж-зоны" },
                  { icon: "Presentation", label: "Конференц-залы" },
                  { icon: "TreePine", label: "Благоустроенная территория" },
                  { icon: "Anchor", label: "Яхтенная марина" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 border border-white/5 rounded-sm hover:border-amber-500/20 transition-colors">
                    <Icon name={item.icon} size={18} style={{ color: GOLD }} className="flex-shrink-0" />
                    <span className="text-sm text-white/70">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <img src={ROOM_IMG} alt="Номер отеля" className="rounded-sm w-full h-56 object-cover" />
              <img src={SPA_IMG} alt="Спа" className="rounded-sm w-full h-40 object-cover" />
              <div className="p-5 border border-white/10 rounded-sm">
                <p className="text-white/70 text-sm italic leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.05rem" }}>
                  «Совершенство в каждой детали. Уникальный дизайн, элитные материалы отделки, дизайнерская мебель, атмосфера приватности и роскоши.»
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 11 — ПЛАНИРОВКИ */}
      <section className="py-24 px-6" style={{ background: DARK }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs tracking-[0.3em] text-white/40 uppercase mb-3">Слайд 11</div>
            <h2 className="text-4xl font-bold mb-3">Планировочные решения</h2>
            <div className="w-16 h-0.5 mx-auto mb-4" style={{ background: GOLD }} />
            <p className="text-white/40 text-sm tracking-widest uppercase">Варианты номеров · Все сдаются с полной меблировкой и отделкой</p>
          </div>
          <div className="space-y-3">
            {[
              { type: "Стандарт с видом на горы", area: "от 31 м²", desc: "Панорамное остекление, дизайнерская отделка", price: "" },
              { type: "Стандарт с видом на море", area: "от 34 м²", desc: "Вид на бухту, премиальная сантехника", price: "" },
              { type: "Улучшенный с видом на море", area: "от 37 м²", desc: "Увеличенная площадь, угловое остекление", price: "от 50 490 000 ₽", highlight: true },
              { type: "Люкс / Семейный", area: "от 50 м²", desc: "Отдельная спальня, гостиная зона", price: "" },
              { type: "Президентский люкс", area: "от 80 м²", desc: "Две спальни, терраса, эксклюзивный дизайн", price: "" },
            ].map((row, i) => (
              <div key={i} className={`grid md:grid-cols-4 gap-4 p-6 border rounded-sm items-center hover:border-amber-500/30 transition-colors ${"highlight" in row && row.highlight ? "border-amber-500/30 bg-amber-500/5" : "border-white/10"}`}>
                <div className="md:col-span-2">
                  <div className="font-bold text-sm mb-1">{row.type}</div>
                  <div className="text-white/50 text-sm">{row.desc}</div>
                </div>
                <div className="text-xl font-bold" style={{ color: GOLD }}>{row.area}</div>
                <div className="text-right">
                  {row.price ? (
                    <span className="text-sm font-bold" style={{ color: GOLD }}>{row.price}</span>
                  ) : (
                    <span className="text-xs text-white/30">По запросу</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SLIDE 12 — РАСЧЁТ ОКУПАЕМОСТИ */}
      <section id="returns" className="py-24 px-6" style={{ background: DARK2 }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs tracking-[0.3em] text-white/40 uppercase mb-3">Слайд 12</div>
            <h2 className="text-4xl font-bold mb-3">Расчёт окупаемости</h2>
            <div className="w-16 h-0.5 mx-auto mb-4" style={{ background: GOLD }} />
            <p className="text-white/40 text-sm tracking-widest uppercase">Пример для лота 37,4 м² · Консервативный сценарий</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="border border-white/10 rounded-sm p-6">
              <h3 className="font-bold text-sm tracking-widest uppercase mb-5" style={{ color: GOLD }}>Исходные данные</h3>
              <div className="space-y-3">
                {[
                  ["Стоимость лота (37,4 м²)", "50 490 000 ₽"],
                  ["ADR (средний тариф)", "28 000 ₽/сутки"],
                  ["Среднегодовая загрузка", "65%"],
                  ["Доля инвестора от выручки", "60%"],
                  ["Налог (ИП УСН «Доходы»)", "6%"],
                  ["Рост стоимости актива", "7% в год"],
                ].map(([k, v], i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-white/5">
                    <span className="text-sm text-white/60">{k}</span>
                    <span className="text-sm font-bold text-white/90">{v}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-white/10 rounded-sm p-6">
              <h3 className="font-bold text-sm tracking-widest uppercase mb-5" style={{ color: GOLD }}>Годовой операционный доход</h3>
              <div className="space-y-3">
                {[
                  { k: "Валовая выручка", v: "≈ 6 643 000 ₽", bold: false },
                  { k: "Доля инвестора (60%)", v: "≈ 3 985 800 ₽", bold: false },
                  { k: "Налог УСН 6%", v: "–239 148 ₽", bold: false },
                  { k: "Чистый годовой доход", v: "≈ 3 746 652 ₽", bold: true },
                ].map((item, i) => (
                  <div key={i} className={`flex justify-between items-center py-2 border-b border-white/5 ${item.bold ? "mt-2 pt-4 border-t border-white/20" : ""}`}>
                    <span className={`text-sm ${item.bold ? "font-bold text-white" : "text-white/60"}`}>{item.k}</span>
                    <span className="text-sm font-bold" style={item.bold ? { color: GOLD } : { color: "rgba(255,255,255,0.9)" }}>{item.v}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-4 rounded-sm text-center" style={{ background: "rgba(201,169,110,0.1)" }}>
                <div className="text-xs text-white/40 uppercase tracking-wider mb-1">Операционный ROI</div>
                <div className="text-3xl font-bold" style={{ color: GOLD }}>7,42%</div>
                <div className="text-xs text-white/40 mt-1">годовых</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="md:col-span-2 border border-white/10 rounded-sm p-6">
              <h3 className="font-bold text-sm tracking-widest uppercase mb-5" style={{ color: GOLD }}>Совокупный результат за 5 лет</h3>
              <div className="space-y-3">
                {[
                  ["Арендный доход (чистый)", "≈ 17 161 000 ₽"],
                  ["Прирост капитала (7% в год)", "≈ 20 320 000 ₽"],
                  ["Суммарная прибыль", "≈ 37 481 000 ₽"],
                  ["Итоговый капитал", "≈ 87 971 000 ₽"],
                ].map(([k, v], i) => (
                  <div key={i} className="flex justify-between items-center py-3 border-b border-white/5">
                    <span className="text-sm text-white/60">{k}</span>
                    <span className="text-sm font-bold" style={{ color: GOLD }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="border border-white/10 rounded-sm p-6 text-center">
                <div className="text-xs text-white/40 uppercase tracking-wider mb-2">Совокупный ROI / год</div>
                <div className="text-4xl font-bold" style={{ color: GOLD }}>14,85%</div>
              </div>
              <div className="border border-white/10 rounded-sm p-6 text-center">
                <div className="text-xs text-white/40 uppercase tracking-wider mb-2">Срок окупаемости</div>
                <div className="text-4xl font-bold" style={{ color: GOLD }}>4,2 года</div>
                <div className="text-xs text-white/40 mt-1">(с учётом продажи)</div>
              </div>
            </div>
          </div>

          <div className="border rounded-sm p-6 mb-4" style={{ borderColor: "rgba(201,169,110,0.3)", background: "rgba(201,169,110,0.05)" }}>
            <h3 className="font-bold text-sm tracking-widest uppercase mb-5" style={{ color: GOLD }}>При льготной рассрочке (ПВ 30% + 11 мес. по 200 000 ₽ + остаток)</h3>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { label: "Эффективная стоимость лота", val: "≈ 46 454 000 ₽" },
                { label: "Операционный ROI", val: "≈ 8,07%" },
                { label: "Совокупный ROI (5 лет)", val: "≈ 17,87%" },
                { label: "Срок окупаемости", val: "≈ 3,9 года" },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="text-xs text-white/40 mb-2 leading-tight">{item.label}</div>
                  <div className="text-xl font-bold" style={{ color: GOLD }}>{item.val}</div>
                </div>
              ))}
            </div>
          </div>
          <p className="text-xs text-white/30 text-center italic">
            Расчёт выполнен по консервативному сценарию. При рыночном росте стоимости 14–15% показатели будут существенно выше.
          </p>
        </div>
      </section>

      {/* SLIDE 13 — УСЛОВИЯ */}
      <section id="terms" className="py-24 px-6" style={{ background: DARK }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs tracking-[0.3em] text-white/40 uppercase mb-3">Слайд 13</div>
            <h2 className="text-4xl font-bold mb-3">Условия приобретения</h2>
            <div className="w-16 h-0.5 mx-auto mb-4" style={{ background: GOLD }} />
            <p className="text-white/40 text-sm tracking-widest uppercase">Гибкие варианты оплаты и система скидок</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { type: "100% оплата", conditions: "Единовременный платёж", discount: "–5%", highlight: true, price: "≈ 47 965 000 ₽" },
              { type: "Стандартная рассрочка", conditions: "ПВ 30%, остаток равными платежами до 12 мес.", discount: "–3%", highlight: false, price: "≈ 48 975 000 ₽" },
              { type: "Льготная рассрочка", conditions: "ПВ 30% + 11 мес. по 200 000 ₽ + остаток в конце", discount: "–3%", highlight: false, price: "≈ 48 975 000 ₽" },
            ].map((item, i) => (
              <div key={i} className={`border rounded-sm p-8 text-center ${item.highlight ? "" : "border-white/10"}`}
                style={item.highlight ? { borderColor: GOLD, background: "rgba(201,169,110,0.05)" } : {}}>
                <div className="font-bold text-lg mb-3">{item.type}</div>
                <div className="text-white/50 text-sm mb-6 leading-relaxed">{item.conditions}</div>
                <div className="text-4xl font-bold mb-2" style={{ color: GOLD }}>{item.discount}</div>
                <div className="text-xs text-white/40 mb-4">скидка</div>
                <div className="pt-4 border-t border-white/10">
                  <div className="text-xs text-white/40 mb-1">Цена (лот ~50,5 млн ₽)</div>
                  <div className="font-bold text-sm">{item.price}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="border border-white/10 rounded-sm p-6 text-center">
            <p className="text-white/60 text-sm leading-relaxed">
              Рассрочка беспроцентная · Договор по <strong className="text-white/80">ФЗ-214</strong> с <strong className="text-white/80">эскроу-счетами</strong> · Скидка от полной стоимости лота
            </p>
          </div>
        </div>
      </section>

      {/* SLIDE 14 — ПОЧЕМУ */}
      <section className="py-24 px-6" style={{ background: DARK2 }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs tracking-[0.3em] text-white/40 uppercase mb-3">Слайд 14</div>
            <h2 className="text-4xl font-bold mb-3">Почему River Rock Gelendzhik Bay</h2>
            <div className="w-16 h-0.5 mx-auto mb-4" style={{ background: GOLD }} />
            <p className="text-white/40 text-sm tracking-widest uppercase">Ключевые преимущества для инвестора</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: "MapPin", factor: "Локация", desc: "Элитный район Толстого мыса, сосновые рощи, выход к морю" },
              { icon: "Globe", factor: "Оператор", desc: "Международная сеть с опытом Rixos / Kempinski" },
              { icon: "Anchor", factor: "Инфраструктура", desc: "Яхт-марина, гольф, виноделие, аквапарк — всё в 20 мин" },
              { icon: "TrendingUp", factor: "Доходность", desc: "ROI 7,4–8,1% операционный, 14,9–17,9% совокупный" },
              { icon: "Shield", factor: "Запас прочности", desc: "Модель на консервативных вводных (7% при рынке 14–17%)" },
              { icon: "Star", factor: "Лояльность", desc: "14 дней отдыха в год, скидки до 20%, VIP-сервис" },
              { icon: "BarChart2", factor: "Ликвидность", desc: "Реальный актив в премиальной локации с ростом турпотока" },
              { icon: "BadgePercent", factor: "Скидки", desc: "До 5% при 100% оплате, 3% при рассрочке" },
            ].map((item, i) => (
              <div key={i} className="border border-white/10 rounded-sm p-6 hover:border-amber-500/30 transition-all hover:-translate-y-1">
                <div className="w-10 h-10 rounded flex items-center justify-center mb-4" style={{ background: "rgba(201,169,110,0.15)" }}>
                  <Icon name={item.icon} size={20} style={{ color: GOLD }} />
                </div>
                <div className="font-bold text-sm mb-2">{item.factor}</div>
                <div className="text-white/50 text-xs leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SLIDE 15 — КОНТАКТЫ */}
      <section id="contacts" className="py-24 px-6" style={{ background: DARK }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-xs tracking-[0.3em] text-white/40 uppercase mb-8">Слайд 15 · Контакты</div>
          <h2 className="text-5xl font-bold mb-2">RIVER ROCK</h2>
          <h3 className="text-3xl font-light tracking-widest mb-2" style={{ color: GOLD }}>GELENDZHIK BAY</h3>
          <p className="text-white/50 tracking-[0.2em] uppercase mb-12" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.1rem" }}>Бутик-отель премиум-класса 5★</p>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
            <div className="border border-white/10 rounded-sm p-6">
              <Icon name="MapPin" size={24} style={{ color: GOLD }} className="mx-auto mb-3" />
              <div className="font-bold text-sm mb-1">Расположение</div>
              <div className="text-white/50 text-sm">Геленджик, Толстый мыс</div>
            </div>
            <div className="border border-white/10 rounded-sm p-6">
              <Icon name="Globe" size={24} style={{ color: GOLD }} className="mx-auto mb-3" />
              <div className="font-bold text-sm mb-1">Сайт</div>
              <a href="https://river-rock-gelendzhik.com/" target="_blank" rel="noopener noreferrer"
                className="text-sm transition-colors hover:opacity-80" style={{ color: GOLD }}>
                river-rock-gelendzhik.com
              </a>
            </div>
          </div>

          <div className="border border-white/10 rounded-sm p-6 max-w-2xl mx-auto text-center mb-10">
            <div className="text-xs text-white/40 leading-relaxed">
              Проектная декларация размещена на <strong className="text-white/60">наш.дом.рф</strong><br />
              Строительство осуществляет <strong className="text-white/60">ООО «СЗ «Геленджик»</strong> в соответствии с ФЗ-214
            </div>
          </div>

          <a href="https://river-rock-gelendzhik.com/" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 font-bold text-sm tracking-widest uppercase text-black transition-all hover:opacity-90"
            style={{ background: GOLD }}>
            <Icon name="ExternalLink" size={16} />
            Фотоконтент и подробности
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-8 px-6 text-center" style={{ background: "#080C12" }}>
        <div className="flex items-center justify-center gap-2 mb-3">
          <Icon name="Waves" size={16} style={{ color: GOLD }} />
          <span className="font-bold tracking-widest text-sm" style={{ color: GOLD }}>RIVER ROCK GELENDZHIK BAY</span>
        </div>
        <p className="text-white/20 text-xs">
          © 2026 River Rock Hotels & Resorts · Инвестиционный материал носит информационный характер
        </p>
      </footer>
    </div>
  );
}