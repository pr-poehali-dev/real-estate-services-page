import { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";

const GOLD = "#C9A96E";

const HOTEL = { lat: 44.5412, lng: 38.0521 };

const PLACES = [
  {
    id: "hotel",
    lat: 44.5412,
    lng: 38.0521,
    label: "River Rock Hotel & Resort",
    note: "Толстый мыс",
    time: "— на месте",
    color: GOLD,
    emoji: "🏨",
    category: "hotel",
  },
  {
    id: "marina",
    lat: 44.5395,
    lng: 38.0480,
    label: "Яхтенная марина",
    note: "На территории",
    time: "1–2 мин",
    color: "#3B82F6",
    emoji: "⛵",
    category: "near",
  },
  {
    id: "heli",
    lat: 44.5430,
    lng: 38.0560,
    label: "Вертолётная площадка",
    note: "~1,5 км",
    time: "3 мин",
    color: "#8B5CF6",
    emoji: "🚁",
    category: "near",
  },
  {
    id: "beach",
    lat: 44.5380,
    lng: 38.0430,
    label: "Пляж «Сады морей»",
    note: "~1,5 км",
    time: "5–10 мин",
    color: "#06B6D4",
    emoji: "🏖️",
    category: "near",
  },
  {
    id: "naberezhnaya_krucha",
    lat: 44.5445,
    lng: 38.0465,
    label: "Набережная «Круча»",
    note: "~1 км",
    time: "10 мин пешком",
    color: "#10B981",
    emoji: "🚶",
    category: "near",
  },
  {
    id: "sanatory",
    lat: 44.5460,
    lng: 38.0610,
    label: "Санаторная зона",
    note: "~1–2 км",
    time: "3–5 мин",
    color: "#34D399",
    emoji: "🌿",
    category: "near",
  },
  {
    id: "airport",
    lat: 44.5669,
    lng: 38.0125,
    label: "Аэропорт Геленджик",
    note: "10 км",
    time: "15–20 мин",
    color: "#6366F1",
    emoji: "✈️",
    category: "city",
  },
  {
    id: "naberezhnaya",
    lat: 44.5610,
    lng: 38.0780,
    label: "Центральная набережная",
    note: "~7 км",
    time: "15 мин",
    color: "#F59E0B",
    emoji: "🌊",
    category: "city",
  },
  {
    id: "center",
    lat: 44.5620,
    lng: 38.0840,
    label: "Центр города (ТЦ, кино)",
    note: "~6 км",
    time: "15 мин",
    color: "#F97316",
    emoji: "🛍️",
    category: "city",
  },
  {
    id: "aquapark",
    lat: 44.5350,
    lng: 38.1380,
    label: "Аквапарк «Золотая Бухта»",
    note: "~10 км",
    time: "20 мин",
    color: "#0EA5E9",
    emoji: "💦",
    category: "city",
  },
  {
    id: "golf",
    lat: 44.5140,
    lng: 38.1650,
    label: "Гольф-клуб «Геленджик»",
    note: "~12 км",
    time: "20 мин",
    color: "#22C55E",
    emoji: "⛳",
    category: "city",
  },
  {
    id: "chateau",
    lat: 44.5750,
    lng: 38.0020,
    label: "Винодельня «Шато де Талю»",
    note: "~7 км",
    time: "15 мин",
    color: "#A855F7",
    emoji: "🍷",
    category: "city",
  },
  {
    id: "belymys",
    lat: 44.5500,
    lng: 38.1900,
    label: "Центр «Белый Мыс»",
    note: "~9 км",
    time: "20 мин / 30 мин (яхта)",
    color: "#EC4899",
    emoji: "🏛️",
    category: "city",
  },
];

const CATEGORY_LABELS: Record<string, string> = {
  hotel: "Отель",
  near: "Рядом (1–10 мин)",
  city: "По курорту (15–20 мин)",
};

export default function LocationMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<import("leaflet").Map | null>(null);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    import("leaflet").then((L) => {
      if (!mapRef.current || mapInstance.current) return;

      const map = L.map(mapRef.current, {
        center: [44.548, 38.08],
        zoom: 13,
        zoomControl: true,
        scrollWheelZoom: true,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
        maxZoom: 18,
      }).addTo(map);

      PLACES.forEach((place) => {
        const isHotel = place.category === "hotel";
        const size = isHotel ? 42 : 32;

        const icon = L.divIcon({
          className: "",
          html: `
            <div style="
              width: ${size}px;
              height: ${size}px;
              background: ${place.color};
              border: ${isHotel ? "3px" : "2px"} solid white;
              border-radius: 50% 50% 50% 0;
              transform: rotate(-45deg);
              box-shadow: 0 2px 8px rgba(0,0,0,0.35);
              display: flex; align-items: center; justify-content: center;
            ">
              <span style="transform: rotate(45deg); font-size: ${isHotel ? "18px" : "14px"}; line-height:1;">
                ${place.emoji}
              </span>
            </div>`,
          iconSize: [size, size],
          iconAnchor: [size / 2, size],
          popupAnchor: [0, -size],
        });

        const marker = L.marker([place.lat, place.lng], { icon }).addTo(map);

        marker.bindPopup(`
          <div style="font-family: sans-serif; min-width: 160px; padding: 2px 0;">
            <div style="font-weight: 700; font-size: 13px; color: #1F2937; margin-bottom: 2px;">
              ${place.emoji} ${place.label}
            </div>
            <div style="color: #9CA3AF; font-size: 11px;">${place.note}</div>
            <div style="color: ${place.color}; font-weight: 700; font-size: 12px; margin-top: 4px;">
              ⏱ ${place.time}
            </div>
          </div>`, {
          closeButton: false,
          maxWidth: 220,
        });

        marker.on("click", () => setActiveId(place.id));
      });

      const circle = L.circle([HOTEL.lat, HOTEL.lng], {
        radius: 1500,
        color: GOLD,
        fillColor: GOLD,
        fillOpacity: 0.06,
        weight: 1.5,
        dashArray: "6,4",
      }).addTo(map);

      L.circle([HOTEL.lat, HOTEL.lng], {
        radius: 500,
        color: GOLD,
        fillColor: GOLD,
        fillOpacity: 0.12,
        weight: 1,
        dashArray: "3,3",
      }).addTo(map);

      mapInstance.current = map;
    });

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  const grouped = ["hotel", "near", "city"].map((cat) => ({
    cat,
    items: PLACES.filter((p) => p.category === cat),
  }));

  const handleLegendClick = (place: typeof PLACES[0]) => {
    setActiveId(place.id);
    import("leaflet").then((L) => {
      if (!mapInstance.current) return;
      mapInstance.current.setView([place.lat, place.lng], 14, { animate: true });
      mapInstance.current.eachLayer((layer) => {
        if ((layer as import("leaflet").Marker).getLatLng) {
          const m = layer as import("leaflet").Marker;
          if (
            Math.abs(m.getLatLng().lat - place.lat) < 0.0005 &&
            Math.abs(m.getLatLng().lng - place.lng) < 0.0005
          ) {
            m.openPopup();
          }
        }
      });
    });
  };

  return (
    <div className="grid md:grid-cols-3 gap-6" style={{ minHeight: 520 }}>
      {/* MAP */}
      <div className="md:col-span-2 rounded-sm overflow-hidden shadow-xl border border-gray-200" style={{ minHeight: 480 }}>
        <div ref={mapRef} style={{ height: "100%", minHeight: 480 }} />
      </div>

      {/* LEGEND */}
      <div className="overflow-y-auto" style={{ maxHeight: 520 }}>
        {grouped.map(({ cat, items }) => (
          <div key={cat} className="mb-5">
            <div
              className="text-xs tracking-widest uppercase font-bold mb-2 pb-1 border-b border-gray-200"
              style={{ color: GOLD }}
            >
              {CATEGORY_LABELS[cat]}
            </div>
            <div className="space-y-1">
              {items.map((p) => (
                <button
                  key={p.id}
                  onClick={() => handleLegendClick(p)}
                  className={`w-full text-left flex items-start gap-2 px-2 py-2 rounded transition-colors ${
                    activeId === p.id ? "bg-amber-50" : "hover:bg-gray-50"
                  }`}
                >
                  <span
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs mt-0.5"
                    style={{ background: p.color + "22", border: `2px solid ${p.color}` }}
                  >
                    {p.emoji}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-semibold text-gray-800 leading-tight">{p.label}</div>
                    <div className="text-xs text-gray-400">{p.note}</div>
                  </div>
                  <span className="text-xs font-bold flex-shrink-0" style={{ color: p.color }}>
                    {p.time}
                  </span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
