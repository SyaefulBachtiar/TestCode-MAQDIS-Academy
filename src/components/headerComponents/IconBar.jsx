import { Menu } from "lucide-react";

export default function IconBar({handleSidebar}){
    return(
        <>
        <div onClick={handleSidebar}>
            <Menu />
        </div>
        </>
    )
}