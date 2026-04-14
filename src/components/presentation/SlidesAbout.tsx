import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell, ResponsiveContainer, LabelList } from "recharts";
import Icon from "@/components/ui/icon";
import LocationMap from "./LocationMap";
import {
  GOLD, GOLD_LIGHT, SERIF,
  POOL_IMG, BAY_IMG, LOBBY_IMG, AERIAL_IMG, RESTAURANT_IMG,
} from "./constants";

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

          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
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
              <img src={LOBBY_IMG} alt="Лобби отеля" className="rounded-sm w-full h-96 object-cover shadow-xl" />
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

          {/* Photo strip */}
          <div className="grid grid-cols-3 gap-4">
            <img src={POOL_IMG} alt="Бассейн" className="w-full h-48 object-cover rounded-sm shadow-md" />
            <img src={RESTAURANT_IMG} alt="Ресторан" className="w-full h-48 object-cover rounded-sm shadow-md" />
            <img src={BAY_IMG} alt="Бухта Геленджик" className="w-full h-48 object-cover rounded-sm shadow-md" />
          </div>
        </div>
      </section>

      {/* ── SLIDE 3 — ГЕЛЕНДЖИК ── */}
      <section className="py-24 px-6" style={{ background: "#F7F5F0" }}>
        <div className="max-w-6xl mx-auto">
          <SlideHeader num="Слайд 03" title="Геленджик — центр черноморского побережья" sub="Устойчивый рост туристического потока" />

          <div className="grid md:grid-cols-2 gap-10 mb-12">

            {/* ── BAR CHART ── */}
            <div className="bg-white rounded-sm border border-gray-100 shadow-sm p-8">
              <h3 className="font-bold text-sm tracking-widest uppercase mb-1" style={{ color: GOLD }}>
                Туристический поток, млн чел.
              </h3>
              <p className="text-xs text-gray-400 mb-6">Геленджик, 2023–2025 гг.</p>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart
                  data={[
                    { year: "2023", value: 3.8, dyn: "База" },
                    { year: "2024", value: 4.2, dyn: "+10,5%" },
                    { year: "2025*", value: 4.7, dyn: "+12%" },
                  ]}
                  margin={{ top: 28, right: 8, left: -8, bottom: 0 }}
                  barCategoryGap="38%"
                >
                  <CartesianGrid vertical={false} stroke="#F0EDE8" />
                  <XAxis dataKey="year" tick={{ fontSize: 12, fill: "#6B7280" }} axisLine={false} tickLine={false} />
                  <YAxis domain={[3, 5.2]} tick={{ fontSize: 11, fill: "#9CA3AF" }} axisLine={false} tickLine={false} tickFormatter={(v: number) => `${v}`} />
                  <Tooltip
                    formatter={(v: number) => [`${v} млн чел.`]}
                    contentStyle={{ borderRadius: 4, border: "1px solid #E5E7EB", fontSize: 12 }}
                    cursor={{ fill: "rgba(201,169,110,0.06)" }}
                  />
                  <Bar dataKey="value" radius={[4, 4, 0, 0]} maxBarSize={80}>
                    <Cell fill="#A0AEC0" />
                    <Cell fill={GOLD} />
                    <Cell fill="#22c55e" />
                    <LabelList
                      dataKey="dyn"
                      position="top"
                      style={{ fontSize: 11, fontWeight: 700, fill: "#374151" }}
                    />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              <div className="flex gap-5 justify-center mt-4 text-xs text-gray-500">
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-sm inline-block" style={{ background: "#A0AEC0" }} />2023 — База
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-sm inline-block" style={{ background: GOLD }} />2024 — +10,5%
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-sm inline-block bg-green-500" />2025* — +12%
                </span>
              </div>
              <p className="text-center text-gray-400 text-xs mt-2">* оценка</p>
            </div>

            {/* ── MAP ── */}
            <div className="bg-white rounded-sm border border-gray-100 shadow-sm p-6 flex flex-col">
              <h3 className="font-bold text-sm tracking-widest uppercase mb-1" style={{ color: GOLD }}>
                Транспортная доступность
              </h3>
              <p className="text-xs text-gray-400 mb-4">Время в пути на автомобиле от Геленджика</p>

              <div className="flex-1">
                <svg viewBox="0 0 420 270" className="w-full" style={{ minHeight: 200 }}>
                  {/* Sea */}
                  <path d="M0,130 Q70,100 140,118 Q200,135 260,112 Q320,88 380,108 Q405,116 420,122 L420,270 L0,270 Z" fill="#DDEEFF" opacity="0.55" />
                  <text x="300" y="210" textAnchor="middle" fontSize="10" fill="#7BA7C9" fontWeight="600" opacity="0.8">Чёрное море</text>
                  <path d="M0,130 Q70,100 140,118 Q200,135 260,112 Q320,88 380,108 Q405,116 420,122" fill="none" stroke="#9EC5E8" strokeWidth="1.2" />

                  {/* Крымский мост */}
                  <path d="M52,162 Q30,175 15,180" fill="none" stroke="#9CA3AF" strokeWidth="1" strokeDasharray="3,2" />
                  <text x="8" y="192" fontSize="7" fill="#9CA3AF">Крымский</text>
                  <text x="8" y="201" fontSize="7" fill="#9CA3AF">мост</text>

                  {/* Lines from Gelendzhik */}
                  <line x1="212" y1="142" x2="104" y2="112" stroke="#C9A96E" strokeWidth="1.5" strokeDasharray="5,3" opacity="0.65" />
                  <line x1="212" y1="142" x2="155" y2="52" stroke="#C9A96E" strokeWidth="1.5" strokeDasharray="5,3" opacity="0.65" />
                  <line x1="212" y1="142" x2="348" y2="126" stroke="#C9A96E" strokeWidth="1.5" strokeDasharray="5,3" opacity="0.65" />
                  <line x1="212" y1="142" x2="52" y2="162" stroke="#C9A96E" strokeWidth="1.5" strokeDasharray="5,3" opacity="0.65" />

                  {/* GELENDZHIK */}
                  <circle cx="212" cy="142" r="12" fill="#C9A96E" opacity="0.18" />
                  <circle cx="212" cy="142" r="7" fill="#C9A96E" />
                  <circle cx="212" cy="142" r="3" fill="white" />
                  <text x="212" y="128" textAnchor="middle" fontSize="10" fontWeight="800" fill="#7A5420">Геленджик</text>
                  <text x="212" y="119" textAnchor="middle" fontSize="7.5" fill="#7A5420" opacity="0.8">River Rock</text>

                  {/* Local airport marker */}
                  <circle cx="226" cy="154" r="4" fill="#22c55e" opacity="0.9" />
                  <text x="232" y="168" textAnchor="start" fontSize="7.5" fill="#15803d" fontWeight="700">✈ 15–20 мин</text>

                  {/* ANAPA */}
                  <circle cx="104" cy="112" r="5.5" fill="#6B7280" />
                  <text x="104" y="100" textAnchor="middle" fontSize="9" fill="#374151" fontWeight="600">✈ Анапа</text>
                  <rect x="78" y="84" width="52" height="14" rx="3" fill="#C9A96E" opacity="0.15" />
                  <text x="104" y="94" textAnchor="middle" fontSize="8.5" fill="#92703A" fontWeight="700">1,5 ч · 90 км</text>

                  {/* KRASNODAR */}
                  <circle cx="155" cy="52" r="5.5" fill="#6B7280" />
                  <text x="155" y="40" textAnchor="middle" fontSize="9" fill="#374151" fontWeight="600">Краснодар</text>
                  <rect x="124" y="24" width="62" height="14" rx="3" fill="#C9A96E" opacity="0.15" />
                  <text x="155" y="34" textAnchor="middle" fontSize="8.5" fill="#92703A" fontWeight="700">2,5 ч · 180 км</text>

                  {/* SOCHI */}
                  <circle cx="348" cy="126" r="5.5" fill="#6B7280" />
                  <text x="358" y="118" textAnchor="start" fontSize="9" fill="#374151" fontWeight="600">✈ Сочи</text>
                  <rect x="355" y="122" width="62" height="14" rx="3" fill="#C9A96E" opacity="0.15" />
                  <text x="386" y="132" textAnchor="middle" fontSize="8.5" fill="#92703A" fontWeight="700">3,5–4 ч · 220 км</text>

                  {/* SIMFEROPOL */}
                  <circle cx="52" cy="162" r="5.5" fill="#6B7280" />
                  <text x="52" y="150" textAnchor="middle" fontSize="9" fill="#374151" fontWeight="600">Симферополь</text>
                  <rect x="18" y="134" width="68" height="14" rx="3" fill="#C9A96E" opacity="0.15" />
                  <text x="52" y="144" textAnchor="middle" fontSize="8.5" fill="#92703A" fontWeight="700">4,5 ч · 280 км</text>
                </svg>
              </div>

              {/* Legend strip */}
              <div className="flex flex-wrap gap-x-5 gap-y-1.5 mt-3 pt-3 border-t border-gray-100">
                {[
                  { dir: "✈ Геленджик", time: "15–20 мин", accent: true },
                  { dir: "✈ Анапа", time: "1,5 ч" },
                  { dir: "Краснодар", time: "2,5 ч" },
                  { dir: "✈ Сочи", time: "3,5–4 ч" },
                  { dir: "Симферополь", time: "4,5 ч" },
                ].map((row, i) => (
                  <div key={i} className="flex items-center gap-1">
                    <span className="text-xs text-gray-500">{row.dir}</span>
                    <span className="text-xs font-bold" style={{ color: row.accent ? "#22c55e" : GOLD }}>{row.time}</span>
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

          <div className="border border-gray-100 rounded-sm p-8 shadow-sm" style={{ background: "#FAFAF8" }}>
            <h3 className="font-bold text-sm tracking-widest uppercase mb-8" style={{ color: GOLD }}>🌍 География присутствия</h3>
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
                  <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 text-lg font-bold"
                    style={{ background: GOLD_LIGHT, color: GOLD }}>
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
          <LocationMap />
          <div className="mt-8 relative rounded-sm overflow-hidden h-48 shadow-xl">
            <img src={AERIAL_IMG} alt="Локация" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-end p-8"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 55%)" }}>
              <p className="text-white/90 italic" style={{ fontFamily: SERIF, fontSize: "1.1rem" }}>
                «Уникальное сочетание природного уединения и доступности всей премиальной инфраструктуры курорта.»
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}