import { Link } from "react-router-dom";
import IconBar from "./IconBar";
import SideBar from "./SideBar";
import { useState } from "react";

export default function Header(){
    const [sideBar, setSideBar] = useState(false);

    const handleSidebar = () => {
      setSideBar(!sideBar);
      
    }



    return (
      <>
        <div className="p-5 bg-blue-200 fixed top-0 w-full z-50 overflow-x-hidden ">
          <div className="flex">
            {/* Logo */}
            <div className="font-inter flex items-center justify-between gap-[100px] w-full sm:w-auto">
              <Link to="/">
                <img
                  src="/images/logo.png"
                  alt="Logo"
                  className="w-20 sm:w-28 md:w-32"
                />
              </Link>

              {/* Icon menu */}
              <div className="">
                <IconBar handleSidebar={handleSidebar} />
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <SideBar sideBar={sideBar} />
        </div>
      </>
    );
}