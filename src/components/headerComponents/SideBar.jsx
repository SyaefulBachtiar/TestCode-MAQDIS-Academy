import { User, Settings, LogOut, HomeIcon, SatelliteIcon, SquareDashedTopSolidIcon, TerminalSquareIcon, BanknoteArrowDown, LucideHandPlatter, ChartColumnIncreasingIcon, UserCircle, EclipseIcon, Activity } from "lucide-react";
import { Link } from "react-router-dom";

export default function SideBar({ sideBar }) {
  const navigasi = [
    { nama: "Dashboard", icon: <HomeIcon />},
    { nama: "Statistik", icon: <SatelliteIcon/> },
    { nama: "Setoran", icon: <SquareDashedTopSolidIcon/> },
  ];

  const apps = [
    { nama: "Transaksi", icon: <TerminalSquareIcon /> },
    { nama: "Banner", icon: <BanknoteArrowDown /> },
    { nama: "Surat Al-Quran", icon: <LucideHandPlatter /> },
    { nama: "Juz", icon: <ChartColumnIncreasingIcon /> },
    { nama: "E-course", icon: <EclipseIcon/> },
    { nama: "User", icon: <UserCircle/> },
    { nama: "Code Aktivitas", icon: <Activity/> },
  ];

  return (
    <>
      <div
        className={`h-screen w-[300px] py-10 pb-[200px] bg-blue-200/40 backdrop-blur-sm fixed top-[66px] left-0 z-50 transform transition-transform duration-300 ease-in-out shadow-md  overflow-y-scroll ${
          sideBar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Profil Section */}
        <div className="px-4 mb-8">
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">John Doe</h3>
                <p className="text-sm text-gray-600">Administrator</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="flex-1 bg-white/40 hover:bg-white/60 rounded-lg p-2 flex items-center justify-center gap-2 transition-colors">
                <Settings className="w-4 h-4" />
                <span className="text-sm">Settings</span>
              </button>
              <button className="flex-1 bg-red-100/40 hover:bg-red-100/60 rounded-lg p-2 flex items-center justify-center gap-2 transition-colors">
                <LogOut className="w-4 h-4" />
                <span className="text-sm">Logout</span>
              </button>
            </div>
          </div>
        </div>

        {/* Navigasi */}
        <div className="px-4">
          <ul className="flex flex-col gap-6">
            {navigasi.map((nav, i) => (
              <li key={i}>
                <Link
                  to={`/${nav.nama}`}
                  className="inline-block bg-cyan-100/40 backdrop-blur-sm rounded-xl p-4 w-full hover:bg-cyan-400/40 hover:scale-105 transition-transform duration-200 border border-cyan-100 font-inter"
                >
                  <div className="flex flex-row gap-3">
                    <span>{nav.icon}</span>
                    <p>{nav.nama}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          {/* Apps and content */}
          <div className="mt-10">
            <h1 className="font-bold my-10">APP AND CONTENT</h1>
            <ul className="flex flex-col gap-6">
              {apps.map((app, i) => (
                <li key={i}>
                  <Link
                    to={`/${app.nama}`}
                    className="inline-block bg-cyan-100/40 backdrop-blur-sm rounded-xl p-4 w-full hover:bg-cyan-400/40 hover:scale-105 transition-transform duration-200 border border-cyan-100 font-inter"
                  >
                    <div className="flex flex-row gap-3">
                      <span>{app.icon}</span>
                      <p>{app.nama}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
