import { Link } from "react-router-dom";

export default function SideBar({ sideBar }) {
  const navigasi = [
    {nama: "Dashboard"},
    {nama: "Statistik"},
    {nama: "Setoran"}
  ]
  
  return (
    <>
      <div
        className={`h-screen w-[300px] py-10 bg-blue-200 fixed top-[66px] left-0 z-50 transform transition-transform duration-300 ease-in-out shadow-md ${
          sideBar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Navigasi */}
        <div className="px-4">
          <ul className="flex flex-col gap-6">
            {navigasi.map((nav, i) => (
              <li key={i}>
                <Link
                  to={`/${nav.nama}`}
                  className="bg-cyan-100/40 backdrop-blur-sm rounded-xl block p-4 w-full hover:scale-105 transition-transform duration-200 border border-cyan-100 font-inter"
                >
                  {nav.nama}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

