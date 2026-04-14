import SlideCover from "@/components/presentation/SlideCover";
import SlidesAbout from "@/components/presentation/SlidesAbout";
import SlidesAnalytics from "@/components/presentation/SlidesAnalytics";
import SlidesFinance from "@/components/presentation/SlidesFinance";

export default function Index() {
  return (
    <div className="bg-white min-h-screen" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
      <SlideCover />
      <SlidesAbout />
      <SlidesAnalytics />
      <SlidesFinance />
    </div>
  );
}
