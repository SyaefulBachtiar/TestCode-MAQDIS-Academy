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
            <div className="font-inter flex items-center gap-[200px] w-[25%]">
              <Link>
              <img src="/images/logo.png" alt="Logo" />
              </Link>
              {/* Icon menu */}
              <div>
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