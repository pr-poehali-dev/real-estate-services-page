import Icon from "@/components/ui/icon";
import { GOLD, HOTEL_IMG, SERIF, RR_LOGO } from "./constants";

export default function SlideCover() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background photo */}
      <div className="absolute inset-0">
        <img src={HOTEL_IMG} alt="River Rock Gelendzhik Bay" className="w-full h-full object-cover" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.82) 100%)",
          }}
        />
      </div>

      {/* Logo top-left */}
      <div className="absolute top-8 left-8 z-20 flex items-center gap-3">
        <img src={RR_LOGO} alt="River Rock" className="h-10 object-contain" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto text-white">
        <div className="mb-8 inline-block border border-white/25 px-6 py-2 text-xs tracking-[0.35em] text-white/60 uppercase">
          Инвестиционное предложение · Апрель 2026
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-3 tracking-tight leading-none">
          RIVER ROCK
        </h1>
        <h2 className="text-3xl md:text-5xl font-light tracking-[0.2em] mb-2" style={{ color: GOLD }}>
          GELENDZHIK BAY
        </h2>
        <p
          className="mt-5 tracking-[0.18em] uppercase font-light text-white/75"
          style={{ fontFamily: SERIF, fontSize: "1.35rem" }}
        >
          Бутик-отель премиум-класса 5★
        </p>

        {/* Key stats */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-md mx-auto">
          {[
            { val: "5★", label: "Категория отеля" },
            { val: "14,85%", label: "Совокупный ROI / год" },
            { val: "4,2 года", label: "Срок окупаемости" },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl md:text-3xl font-bold" style={{ color: GOLD }}>
                {s.val}
              </div>
              <div className="text-xs text-white/45 mt-1.5 tracking-wide leading-tight">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={26} className="text-white/30" />
      </div>
    </section>
  );
}
