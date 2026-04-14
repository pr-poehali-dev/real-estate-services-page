import Icon from "@/components/ui/icon";
import { GOLD, GOLD_LIGHT, GOLD_BORDER, GOLD_BG, SERIF } from "./constants";

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

export default function SlidesFinance() {
  return (
    <>
      {/* ── SLIDE 12 — РАСЧЁТ ОКУПАЕМОСТИ ── */}
      <section id="returns" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SlideHeader num="Слайд 12" title="Расчёт окупаемости" sub="Пример для лота 37,4 м² · Консервативный сценарий" />

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Input data */}
            <div className="border border-gray-100 rounded-sm p-7 shadow-sm bg-gray-50/50">
              <h3 className="font-bold text-sm tracking-widest uppercase mb-6" style={{ color: GOLD }}>
                Исходные данные
              </h3>
              <div className="space-y-3">
                {[
                  ["Стоимость лота (37,4 м²)", "50 490 000 ₽"],
                  ["ADR (средний тариф)", "28 000 ₽/сутки"],
                  ["Среднегодовая загрузка", "65%"],
                  ["Доля инвестора от выручки", "60%"],
                  ["Налог (ИП УСН «Доходы»)", "6%"],
                  ["Рост стоимости актива", "7% в год"],
                ].map(([k, v], i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-sm text-gray-500">{k}</span>
                    <span className="text-sm font-bold text-gray-800">{v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Annual income */}
            <div className="border border-gray-100 rounded-sm p-7 shadow-sm">
              <h3 className="font-bold text-sm tracking-widest uppercase mb-6" style={{ color: GOLD }}>
                Годовой операционный доход
              </h3>
              <div className="space-y-3">
                {[
                  { k: "Валовая выручка", v: "≈ 6 643 000 ₽", bold: false },
                  { k: "Доля инвестора (60%)", v: "≈ 3 985 800 ₽", bold: false },
                  { k: "Налог УСН 6%", v: "–239 148 ₽", bold: false },
                  { k: "Чистый годовой доход", v: "≈ 3 746 652 ₽", bold: true },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`flex justify-between items-center py-2 border-b ${item.bold ? "border-t border-gray-200 mt-2 pt-4" : "border-gray-100"}`}
                  >
                    <span className={`text-sm ${item.bold ? "font-bold text-gray-900" : "text-gray-500"}`}>{item.k}</span>
                    <span
                      className="text-sm font-bold"
                      style={item.bold ? { color: GOLD } : { color: "#374151" }}
                    >
                      {item.v}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-5 p-4 rounded-sm text-center" style={{ background: GOLD_LIGHT }}>
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Операционный ROI</div>
                <div className="text-4xl font-bold" style={{ color: GOLD }}>7,42%</div>
                <div className="text-xs text-gray-400 mt-1">годовых</div>
              </div>
            </div>
          </div>

          {/* 5-year result */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="md:col-span-2 border border-gray-100 rounded-sm p-7 shadow-sm">
              <h3 className="font-bold text-sm tracking-widest uppercase mb-6" style={{ color: GOLD }}>
                Совокупный результат за 5 лет
              </h3>
              <div className="space-y-1">
                {[
                  ["Арендный доход (чистый)", "≈ 17 161 000 ₽"],
                  ["Прирост капитала (7% в год)", "≈ 20 320 000 ₽"],
                  ["Суммарная прибыль", "≈ 37 481 000 ₽"],
                  ["Итоговый капитал", "≈ 87 971 000 ₽"],
                ].map(([k, v], i) => (
                  <div key={i} className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-sm text-gray-500">{k}</span>
                    <span className="text-sm font-bold" style={{ color: GOLD }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="border border-gray-100 rounded-sm p-6 text-center shadow-sm bg-gray-50/50">
                <div className="text-xs text-gray-400 uppercase tracking-wider mb-2">Совокупный ROI / год</div>
                <div className="text-5xl font-bold" style={{ color: GOLD }}>14,85%</div>
              </div>
              <div className="border border-gray-100 rounded-sm p-6 text-center shadow-sm bg-gray-50/50">
                <div className="text-xs text-gray-400 uppercase tracking-wider mb-2">Срок окупаемости</div>
                <div className="text-5xl font-bold" style={{ color: GOLD }}>4,2</div>
                <div className="text-sm text-gray-400 mt-1">года (с учётом продажи)</div>
              </div>
            </div>
          </div>

          {/* Installment plan */}
          <div className="rounded-sm p-7 mb-4 border" style={{ borderColor: GOLD_BORDER, background: "#FFFBF4" }}>
            <h3 className="font-bold text-sm tracking-widest uppercase mb-6" style={{ color: GOLD }}>
              При льготной рассрочке (ПВ 30% + 11 мес. по 200 000 ₽ + остаток)
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { label: "Эффективная стоимость лота", val: "≈ 46 454 000 ₽" },
                { label: "Операционный ROI", val: "≈ 8,07%" },
                { label: "Совокупный ROI (5 лет)", val: "≈ 17,87%" },
                { label: "Срок окупаемости", val: "≈ 3,9 года" },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="text-xs text-gray-400 mb-2 leading-tight">{item.label}</div>
                  <div className="text-xl font-bold" style={{ color: GOLD }}>{item.val}</div>
                </div>
              ))}
            </div>
          </div>
          <p className="text-xs text-gray-400 text-center italic">
            Расчёт выполнен по консервативному сценарию. При рыночном росте стоимости 14–15% показатели будут существенно выше.
          </p>
        </div>
      </section>

      {/* ── SLIDE 13 — УСЛОВИЯ ── */}
      <section id="terms" className="py-24 px-6" style={{ background: "#F7F5F0" }}>
        <div className="max-w-6xl mx-auto">
          <SlideHeader num="Слайд 13" title="Условия приобретения" sub="Гибкие варианты оплаты и система скидок" />
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              {
                type: "100% оплата",
                conditions: "Единовременный платёж",
                discount: "–5%",
                highlight: true,
                price: "≈ 47 965 000 ₽",
              },
              {
                type: "Стандартная рассрочка",
                conditions: "ПВ 30%, остаток равными платежами до 12 мес.",
                discount: "–3%",
                highlight: false,
                price: "≈ 48 975 000 ₽",
              },
              {
                type: "Льготная рассрочка",
                conditions: "ПВ 30% + 11 мес. по 200 000 ₽ + остаток в конце",
                discount: "–3%",
                highlight: false,
                price: "≈ 48 975 000 ₽",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`rounded-sm p-8 text-center ${item.highlight ? "shadow-md" : "bg-white border border-gray-100 shadow-sm"}`}
                style={item.highlight ? { border: `1px solid ${GOLD_BORDER}`, background: "#FFFBF4" } : {}}
              >
                <div className="font-bold text-lg mb-3 text-gray-900">{item.type}</div>
                <div className="text-gray-500 text-sm mb-6 leading-relaxed">{item.conditions}</div>
                <div className="text-5xl font-bold mb-2" style={{ color: GOLD }}>{item.discount}</div>
                <div className="text-xs text-gray-400 mb-4">скидка</div>
                <div className="pt-4 border-t border-gray-200">
                  <div className="text-xs text-gray-400 mb-1">Цена (лот ~50,5 млн ₽)</div>
                  <div className="font-bold text-sm text-gray-800">{item.price}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white border border-gray-100 rounded-sm p-6 text-center shadow-sm">
            <p className="text-gray-500 text-sm leading-relaxed">
              Рассрочка беспроцентная · Договор по{" "}
              <strong className="text-gray-700">ФЗ-214</strong> с{" "}
              <strong className="text-gray-700">эскроу-счетами</strong> · Скидка от полной стоимости лота
            </p>
          </div>
        </div>
      </section>

      {/* ── SLIDE 14 — ПОЧЕМУ ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SlideHeader num="Слайд 14" title="Почему River Rock Gelendzhik Bay" sub="Ключевые преимущества для инвестора" />
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
              <div
                key={i}
                className="border border-gray-100 rounded-sm p-6 hover:border-amber-300 hover:-translate-y-1 transition-all bg-gray-50/50 shadow-sm hover:shadow-md"
              >
                <div
                  className="w-10 h-10 rounded flex items-center justify-center mb-4"
                  style={{ background: GOLD_LIGHT }}
                >
                  <Icon name={item.icon} size={20} style={{ color: GOLD }} />
                </div>
                <div className="font-bold text-sm mb-2 text-gray-800">{item.factor}</div>
                <div className="text-gray-500 text-xs leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SLIDE 15 — КОНТАКТЫ ── */}
      <section id="contacts" className="py-24 px-6" style={{ background: "#F7F5F0" }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-xs tracking-[0.3em] text-gray-400 uppercase mb-10">Слайд 15 · Контакты</div>
          <h2 className="text-6xl font-bold mb-3 text-gray-900">RIVER ROCK</h2>
          <h3 className="text-4xl font-light tracking-widest mb-3" style={{ color: GOLD }}>GELENDZHIK BAY</h3>
          <p
            className="text-gray-500 tracking-[0.2em] uppercase mb-14"
            style={{ fontFamily: SERIF, fontSize: "1.15rem" }}
          >
            Бутик-отель премиум-класса 5★
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-10">
            <div className="bg-white border border-gray-100 rounded-sm p-7 shadow-sm">
              <Icon name="MapPin" size={26} style={{ color: GOLD }} className="mx-auto mb-3" />
              <div className="font-bold text-sm mb-1 text-gray-800">Расположение</div>
              <div className="text-gray-500 text-sm">Геленджик, Толстый мыс</div>
            </div>
            <div className="bg-white border border-gray-100 rounded-sm p-7 shadow-sm">
              <Icon name="Globe" size={26} style={{ color: GOLD }} className="mx-auto mb-3" />
              <div className="font-bold text-sm mb-1 text-gray-800">Сайт</div>
              <a
                href="https://river-rock-gelendzhik.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:opacity-75 transition-opacity"
                style={{ color: GOLD }}
              >
                river-rock-gelendzhik.com
              </a>
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-sm p-6 max-w-2xl mx-auto mb-10 shadow-sm">
            <div className="text-xs text-gray-400 leading-relaxed">
              Проектная декларация размещена на{" "}
              <strong className="text-gray-600">наш.дом.рф</strong>
              <br />
              Строительство осуществляет{" "}
              <strong className="text-gray-600">ООО «СЗ «Геленджик»</strong> в соответствии с ФЗ-214
            </div>
          </div>

          <a
            href="https://river-rock-gelendzhik.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 font-bold text-sm tracking-widest uppercase text-white transition-all hover:opacity-85 shadow-md"
            style={{ background: GOLD }}
          >
            <Icon name="ExternalLink" size={16} />
            Фотоконтент и подробности
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-8 px-6 text-center border-t border-gray-200 bg-white">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Icon name="Waves" size={16} style={{ color: GOLD }} />
          <span className="font-bold tracking-widest text-sm text-gray-700">RIVER ROCK GELENDZHIK BAY</span>
        </div>
        <p className="text-gray-400 text-xs">
          © 2026 River Rock Hotels & Resorts · Инвестиционный материал носит информационный характер
        </p>
      </footer>
    </>
  );
}
