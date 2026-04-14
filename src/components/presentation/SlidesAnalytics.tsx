import Icon from "@/components/ui/icon";
import { GOLD, GOLD_LIGHT, GOLD_BORDER, ROOM_IMG, SPA_IMG, HOTEL_IMG, SERIF } from "./constants";

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

export default function SlidesAnalytics() {
  return (
    <>
      {/* ── SLIDE 8 — ЗАГРУЗКА ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SlideHeader num="Слайд 08" title="Загрузка премиальных отелей" sub="Комплексы 4–5★ работают с высокой загрузкой круглый год" />
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-7">
              {[
                { season: "Высокий (июль–август)", val: "85–95%", pct: 90, note: "Практически полная загрузка", color: "#22c55e" },
                { season: "Межсезонье (осень–весна)", val: "50–60%", pct: 55, note: "Спа и деловой туризм", color: GOLD },
                { season: "Низкий / Новогодний", val: "50–80%", pct: 65, note: "Лидеры (Kempinski) — до 80%", color: GOLD },
                { season: "Среднегодовая (прогноз)", val: "~65–70%", pct: 67, note: "Для качественного премиального объекта", color: GOLD },
              ].map((row, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-700">{row.season}</span>
                    <span className="font-bold text-sm" style={{ color: row.color }}>{row.val}</span>
                  </div>
                  <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${row.pct}%`, background: row.color }}
                    />
                  </div>
                  <div className="text-xs text-gray-400 mt-1">{row.note}</div>
                </div>
              ))}
            </div>
            <div className="border border-gray-100 rounded-sm p-10 text-center shadow-sm" style={{ background: "#FAFAF8" }}>
              <div className="text-xs tracking-widest text-gray-400 uppercase mb-4">В финансовой модели принята</div>
              <div className="text-7xl font-bold mb-2" style={{ color: GOLD }}>65%</div>
              <div className="text-gray-500 text-sm mb-6">Консервативная загрузка</div>
              <div className="w-full h-px bg-gray-200 my-6" />
              <div className="text-xs text-gray-400 leading-relaxed">
                Запас прочности относительно рыночных показателей лидеров рынка (Kempinski, Metropol)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SLIDE 9 — РОСТ СТОИМОСТИ ── */}
      <section className="py-24 px-6" style={{ background: "#F7F5F0" }}>
        <div className="max-w-6xl mx-auto">
          <SlideHeader num="Слайд 09" title="Рост стоимости недвижимости" sub="Премиальный сегмент · Краснодарский край" />
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 bg-white border border-gray-100 rounded-sm p-8 shadow-sm">
              <h3 className="font-bold text-sm tracking-widest uppercase mb-6" style={{ color: GOLD }}>
                Среднегодовой рост стоимости м² (4–5★)
              </h3>
              <div className="space-y-1">
                <div className="grid grid-cols-3 text-xs text-gray-400 pb-3 border-b border-gray-200 tracking-wider uppercase">
                  <span>Год</span>
                  <span className="text-center">Рост</span>
                  <span className="text-right">Источник</span>
                </div>
                {[
                  { year: "2024", growth: "+15–17%", src: 'Аналитика курорта "Лучи"' },
                  { year: "2025", growth: "+14,5%", src: "ЕМИСС (Краснодарский край)" },
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-3 py-4 border-b border-gray-100 items-center">
                    <span className="text-gray-800 font-medium">{row.year}</span>
                    <span className="text-center font-bold text-green-600">{row.growth}</span>
                    <span className="text-right text-gray-400 text-xs">{row.src}</span>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="bg-white rounded-sm p-8 text-center flex flex-col items-center justify-center shadow-sm"
              style={{ border: `1px solid ${GOLD_BORDER}` }}
            >
              <div className="text-xs tracking-widest text-gray-400 uppercase mb-3">В модели принято</div>
              <div className="text-6xl font-bold mb-2" style={{ color: GOLD }}>7%</div>
              <div className="text-gray-500 text-sm mb-4">в год</div>
              <div className="w-full h-px bg-gray-200 my-4" />
              <div className="text-xs text-gray-500 leading-relaxed">
                Запас прочности <strong className="text-gray-700">2×</strong> относительно рыночной динамики
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SLIDE 10 — ИНФРАСТРУКТУРА ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SlideHeader num="Слайд 10" title="Инфраструктура отеля" sub="Пятизвёздочный премиальный бутик-отель с эксклюзивным сервисом" />
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="grid grid-cols-2 gap-3">
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
                  <div
                    key={i}
                    className="flex items-center gap-3 p-4 border border-gray-100 rounded-sm hover:border-amber-300 transition-colors bg-gray-50/50"
                  >
                    <Icon name={item.icon} size={18} style={{ color: GOLD }} className="flex-shrink-0" />
                    <span className="text-sm text-gray-600">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <img
                src={ROOM_IMG}
                alt="Номер отеля"
                className="rounded-sm w-full h-60 object-cover shadow-lg"
                onError={(e) => { (e.target as HTMLImageElement).src = HOTEL_IMG; }}
              />
              <img
                src={SPA_IMG}
                alt="Спа"
                className="rounded-sm w-full h-44 object-cover shadow-lg"
                onError={(e) => { (e.target as HTMLImageElement).src = HOTEL_IMG; }}
              />
              <div className="p-5 bg-gray-50 border border-gray-100 rounded-sm">
                <p className="text-gray-500 text-sm italic leading-relaxed" style={{ fontFamily: SERIF, fontSize: "1.05rem" }}>
                  «Совершенство в каждой детали. Уникальный дизайн, элитные материалы отделки,
                  дизайнерская мебель, атмосфера приватности и роскоши.»
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SLIDE 11 — ПЛАНИРОВКИ ── */}
      <section className="py-24 px-6" style={{ background: "#F7F5F0" }}>
        <div className="max-w-6xl mx-auto">
          <SlideHeader num="Слайд 11" title="Планировочные решения" sub="Варианты номеров · Все сдаются с полной меблировкой и отделкой" />
          <div className="space-y-3">
            {[
              { type: "Стандарт с видом на горы", area: "от 31 м²", desc: "Панорамное остекление, дизайнерская отделка", price: "", highlight: false },
              { type: "Стандарт с видом на море", area: "от 34 м²", desc: "Вид на бухту, премиальная сантехника", price: "", highlight: false },
              { type: "Улучшенный с видом на море", area: "от 37 м²", desc: "Увеличенная площадь, угловое остекление", price: "от 50 490 000 ₽", highlight: true },
              { type: "Люкс / Семейный", area: "от 50 м²", desc: "Отдельная спальня, гостиная зона", price: "", highlight: false },
              { type: "Президентский люкс", area: "от 80 м²", desc: "Две спальни, терраса, эксклюзивный дизайн", price: "", highlight: false },
            ].map((row, i) => (
              <div
                key={i}
                className={`grid md:grid-cols-4 gap-4 p-6 border rounded-sm items-center transition-colors ${
                  row.highlight
                    ? "shadow-md"
                    : "bg-white border-gray-100 hover:border-amber-200"
                }`}
                style={row.highlight ? { borderColor: GOLD_BORDER, background: "#FFFBF4" } : {}}
              >
                <div className="md:col-span-2">
                  <div className="font-bold text-sm mb-1 text-gray-900">{row.type}</div>
                  <div className="text-gray-500 text-sm">{row.desc}</div>
                </div>
                <div className="text-xl font-bold" style={{ color: GOLD }}>{row.area}</div>
                <div className="text-right">
                  {row.price ? (
                    <span className="text-sm font-bold" style={{ color: GOLD }}>{row.price}</span>
                  ) : (
                    <span className="text-xs text-gray-400">По запросу</span>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-400 text-xs italic">
              Все номера сдаются с полной меблировкой и отделкой премиум-класса
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
