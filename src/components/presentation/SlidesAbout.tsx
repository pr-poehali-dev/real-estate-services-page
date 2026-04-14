import Icon from "@/components/ui/icon";
import { GOLD, GOLD_LIGHT, GOLD_BORDER, GOLD_BG, SPA_IMG, HOTEL_IMG, SERIF } from "./constants";

// Additional Tilda CDN photos from river-rock-gelendzhik.com
const PHOTO_EXTERIOR = "https://static.tildacdn.com/tild6464-3033-4166-a439-313538303332/photo.jpg";
const PHOTO_LOBBY = "https://static.tildacdn.com/tild6661-3131-4536-b736-656264633166/photo.jpg";
const PHOTO_BAY = "https://static.tildacdn.com/tild3934-6261-4230-b139-653937323535/photo.jpg";

function SlideHeader({ num, title, sub }: { num: string; title: string; sub: string }) {
  return (
    <div className="text-center mb-14">
      <div className="text-xs tracking-[0.35em] text-gray-400 uppercase mb-3 font-light">{num}</div>
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">{title}</h2>
      <div className="w-14 h-0.5 mx-auto mb-4" style={{ background: GOLD }} />
      <p className="text-gray-400 text-xs tracking-[0.25em] uppercase">{sub}</p>
    </div>
  );
}

export default function SlidesAbout() {
  return (
    <>
      {/* ── SLIDE 2 — КОНЦЕПЦИЯ ── */}
      <section id="concept" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SlideHeader num="Слайд 02" title="Концепция проекта" sub="Инновационная гостиница премиум-класса" />
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gray-700 leading-relaxed mb-10" style={{ fontFamily: SERIF, fontSize: "1.25rem" }}>
                Сочетание архитектурной концепции, дизайна, опыта отельного оператора
                международного уровня и профессионализма застройщика СЗ «Геленджик»
                стало новым символом премиального отдыха на Черноморском побережье.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: "Building2", label: "Архитектура", desc: "Авторская концепция с учётом рельефа бухты" },
                  { icon: "Globe", label: "Оператор", desc: "Международный стандарт River Rock Hotels & Resorts" },
                  { icon: "Gem", label: "Отделка", desc: "Элитные материалы, дизайнерская мебель" },
                  { icon: "Users", label: "Застройщик", desc: "ООО СЗ «Геленджик» — опытный девелопер" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded flex items-center justify-center" style={{ background: GOLD_LIGHT }}>
                      <Icon name={item.icon} size={18} style={{ color: GOLD }} />
                    </div>
                    <div>
                      <div className="font-bold text-sm mb-1 text-gray-800">{item.label}</div>
                      <div className="text-gray-500 text-xs leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={SPA_IMG}
                alt="Инфраструктура отеля"
                className="rounded-sm w-full h-96 object-cover shadow-xl"
                onError={(e) => { (e.target as HTMLImageElement).src = HOTEL_IMG; }}
              />
              <div
                className="absolute bottom-0 left-0 right-0 p-6 rounded-b-sm"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75), transparent)" }}
              >
                <p className="text-white/90 text-sm italic" style={{ fontFamily: SERIF }}>
                  «Совершенство в каждой детали. Уникальный дизайн, атмосфера приватности и роскоши.»
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SLIDE 3 — ГЕЛЕНДЖИК ── */}
      <section className="py-24 px-6" style={{ background: "#F7F5F0" }}>
        <div className="max-w-6xl mx-auto">
          <SlideHeader num="Слайд 03" title="Геленджик — центр черноморского побережья" sub="Устойчивый рост туристического потока" />
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-bold text-sm tracking-widest uppercase mb-6" style={{ color: GOLD }}>
                Туристический поток
              </h3>
              <div className="space-y-1">
                <div className="grid grid-cols-3 text-xs text-gray-400 pb-3 border-b border-gray-200 tracking-wider uppercase">
                  <span>Год</span>
                  <span className="text-center">Турпоток</span>
                  <span className="text-right">Динамика</span>
                </div>
                {[
                  { year: "2023", val: "~3,8 млн чел.", dyn: "База", green: false },
                  { year: "2024", val: "~4,2 млн чел.", dyn: "+10,5%", green: true },
                  { year: "2025 (оценка)", val: "~4,7 млн чел.", dyn: "+12%", green: true },
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-3 py-4 border-b border-gray-100 items-center">
                    <span className="text-gray-800 font-medium text-sm">{row.year}</span>
                    <span className="text-center text-gray-600 text-sm">{row.val}</span>
                    <span className={`text-right font-bold text-sm ${row.green ? "text-green-600" : "text-gray-500"}`}>{row.dyn}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-sm tracking-widest uppercase mb-6" style={{ color: GOLD }}>
                Транспортная доступность
              </h3>
              <div className="space-y-1">
                <div className="grid grid-cols-3 text-xs text-gray-400 pb-3 border-b border-gray-200 tracking-wider uppercase">
                  <span className="col-span-2">Направление</span>
                  <span className="text-right">Время</span>
                </div>
                {[
                  { dir: "Аэропорт Геленджик", dist: "10 км", time: "15–20 мин" },
                  { dir: "Аэропорт Анапа", dist: "90 км", time: "1,5 часа" },
                  { dir: "Аэропорт Сочи", dist: "220 км", time: "3,5–4 ч" },
                  { dir: "Симферополь", dist: "280 км", time: "4,5 ч" },
                  { dir: "Краснодар", dist: "180 км", time: "2,5 ч" },
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-3 py-3 border-b border-gray-100 items-center">
                    <div className="col-span-2">
                      <div className="text-gray-800 text-sm">{row.dir}</div>
                      <div className="text-gray-400 text-xs">{row.dist}</div>
                    </div>
                    <div className="text-right font-bold text-sm" style={{ color: GOLD }}>{row.time}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SLIDE 4 — ОПЕРАТОР ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SlideHeader num="Слайд 04" title="River Rock Hotels & Resorts" sub="Оператор мирового уровня" />
          <div className="grid md:grid-cols-3 gap-8 mb-14">
            {[
              { icon: "Users", num: "5+ млн", label: "постоянных клиентов сети" },
              { icon: "TrendingUp", num: "от 70%", label: "минимальная загрузка отелей сети" },
              { icon: "Globe", num: "4+ региона", label: "Европа, Ближний Восток, Африка, Карибы" },
            ].map((item, i) => (
              <div key={i} className="text-center p-8 border border-gray-100 rounded-sm shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: GOLD_LIGHT }}>
                  <Icon name={item.icon} size={24} style={{ color: GOLD }} />
                </div>
                <div className="text-3xl font-bold mb-2" style={{ color: GOLD }}>{item.num}</div>
                <div className="text-gray-500 text-sm">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Geography */}
          <div className="border border-gray-100 rounded-sm p-8 shadow-sm" style={{ background: "#FAFAF8" }}>
            <h3 className="font-bold text-sm tracking-widest uppercase mb-8" style={{ color: GOLD }}>
              🌍 География присутствия
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">🇹🇷</span>
                  <span className="font-bold text-sm tracking-wider text-gray-800">ТУРЦИЯ</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Анталия — Adalya Port River Rock (Oldtown)<br />
                  Штаб-квартира и центральный офис управления
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">🇷🇺</span>
                  <span className="font-bold text-sm tracking-wider text-gray-800">РОССИЯ — 9 проектов</span>
                </div>
                <ul className="text-gray-500 text-sm space-y-1 leading-relaxed">
                  <li>• Геленджик — <span className="font-semibold" style={{ color: GOLD }}>River Rock Gelendzhik Bay 5★</span></li>
                  <li>• Домбай — Lodge & Narzannyi 5★</li>
                  <li>• Кабардинка — Resort, Spa & Villas 5★</li>
                  <li>• Ессентуки — СГК 5★ (проектирование)</li>
                </ul>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">🌍</span>
                  <span className="font-bold text-sm tracking-wider text-gray-800">ГЛОБАЛЬНО</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  🇬🇪 Грузия — La Quinta by Wyndham Batumi (2025)<br />
                  White label оператор (Wyndham и др.)<br />
                  Операционный офис в Дубае, ОАЭ
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SLIDE 5 — КОМАНДА ── */}
      <section className="py-24 px-6" style={{ background: "#F7F5F0" }}>
        <div className="max-w-6xl mx-auto">
          <SlideHeader num="Слайд 05" title="Команда управления" sub="Руководство с опытом ведущих мировых гостиничных сетей" />
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
              <div key={i} className="bg-white border border-gray-100 rounded-sm p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 text-lg font-bold"
                    style={{ background: GOLD_LIGHT, color: GOLD }}
                  >
                    {person.name.split(" ").map((n: string) => n[0]).join("")}
                  </div>
                  <div>
                    <div className="font-bold text-lg text-gray-900">{person.name}</div>
                    <div className="text-xs tracking-wider mt-1" style={{ color: GOLD }}>{person.role}</div>
                  </div>
                </div>
                <ul className="space-y-2">
                  {person.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-500">
                      <span className="mt-0.5 flex-shrink-0 font-bold" style={{ color: GOLD }}>—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 bg-white border border-gray-100 rounded-sm text-center shadow-sm">
            <p className="text-gray-500 text-sm italic" style={{ fontFamily: SERIF, fontSize: "1.1rem" }}>
              Команда с подтверждённым опытом вывода отелей на операционную стабильность
              и достижения плановых показателей загрузки и доходности.
            </p>
          </div>
        </div>
      </section>

      {/* ── SLIDE 6 — ПРОГРАММА ЛОЯЛЬНОСТИ ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SlideHeader num="Слайд 06" title="River Rock Infinity" sub="Программа лояльности — привилегии для владельцев номеров" />
          <div className="border border-gray-100 rounded-sm overflow-hidden shadow-sm">
            <div className="grid grid-cols-3 text-xs tracking-widest uppercase font-bold" style={{ background: GOLD_LIGHT }}>
              <div className="p-4 text-gray-600">Привилегия</div>
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
              <div key={i} className={`grid grid-cols-3 border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}`}>
                <div className="p-4 text-sm text-gray-600">{row.priv}</div>
                <div className="p-4 text-center text-sm font-medium text-gray-700">{row.gold}</div>
                <div className="p-4 text-center text-sm font-semibold" style={{ color: GOLD }}>{row.diam}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-5 bg-gray-50 border border-gray-100 rounded-sm text-center">
            <p className="text-gray-500 text-sm italic" style={{ fontFamily: SERIF, fontSize: "1.08rem" }}>
              Владелец номера получает не только доход, но и премиальный отдых в сети отелей River Rock на особых условиях.
            </p>
          </div>
        </div>
      </section>

      {/* ── SLIDE 7 — ЛОКАЦИЯ ── */}
      <section id="location" className="py-24 px-6" style={{ background: "#F7F5F0" }}>
        <div className="max-w-6xl mx-auto">
          <SlideHeader num="Слайд 07" title="Уникальная локация" sub="Элитный район Толстого мыса · Сосновые рощи · Море" />
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="space-y-1">
              <div className="grid grid-cols-3 text-xs text-gray-400 pb-3 border-b border-gray-200 tracking-wider uppercase">
                <span className="col-span-2">Объект</span>
                <span className="text-right">Время</span>
              </div>
              {[
                { obj: "Яхтенная марина", note: "На территории", time: "1–2 мин", hot: true },
                { obj: "Вертолётная площадка", note: "~1,5 км", time: "3 мин", hot: false },
                { obj: "Аэропорт Геленджик", note: "10 км", time: "15–20 мин", hot: false },
                { obj: "Набережная «Круча»", note: "~1 км", time: "10 мин пешком", hot: false },
                { obj: "Пляж «Сады морей»", note: "~1,5 км", time: "5–10 мин", hot: false },
                { obj: "Санаторная зона", note: "~1–2 км", time: "3–5 мин", hot: false },
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-3 py-3 border-b border-gray-100 items-center">
                  <div className="col-span-2">
                    <span
                      className={`text-sm ${row.hot ? "font-bold" : "text-gray-700"}`}
                      style={row.hot ? { color: GOLD } : {}}
                    >
                      {row.obj}
                    </span>
                    <div className="text-gray-400 text-xs">{row.note}</div>
                  </div>
                  <div className="text-right text-sm font-semibold" style={{ color: GOLD }}>{row.time}</div>
                </div>
              ))}
            </div>
            <div className="space-y-1">
              <div className="grid grid-cols-3 text-xs text-gray-400 pb-3 border-b border-gray-200 tracking-wider uppercase">
                <span className="col-span-2">Объект</span>
                <span className="text-right">Время</span>
              </div>
              {[
                { obj: "Винодельня «Шато де Талю»", note: "~7 км", time: "15 мин" },
                { obj: "Центральная набережная", note: "~7 км", time: "15 мин" },
                { obj: "Центр города (ТЦ, кино)", note: "~6 км", time: "15 мин" },
                { obj: "Центр «Белый Мыс»", note: "~9 км", time: "20 мин / 30 мин (яхта)" },
                { obj: "Аквапарк «Золотая Бухта»", note: "~10 км", time: "20 мин" },
                { obj: "Гольф-клуб «Геленджик»", note: "~12 км", time: "20 мин" },
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-3 py-3 border-b border-gray-100 items-center">
                  <div className="col-span-2">
                    <span className="text-sm text-gray-700">{row.obj}</span>
                    <div className="text-gray-400 text-xs">{row.note}</div>
                  </div>
                  <div className="text-right text-sm font-semibold" style={{ color: GOLD }}>{row.time}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Photo banner */}
          <div className="relative rounded-sm overflow-hidden h-72 shadow-xl">
            <img src={HOTEL_IMG} alt="Локация" className="w-full h-full object-cover" />
            <div
              className="absolute inset-0 flex items-end p-8"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 55%)" }}
            >
              <p className="text-white/90 italic" style={{ fontFamily: SERIF, fontSize: "1.15rem" }}>
                «Уникальное сочетание природного уединения и доступности всей премиальной инфраструктуры курорта.»
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
