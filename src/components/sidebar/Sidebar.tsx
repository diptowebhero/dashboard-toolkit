import { logoSmall2 } from "@/assets";
import { LayoutDashboardIcon, MailIcon } from "lucide-react";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}
const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const [isHovered, setHovered] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        window.innerWidth < 1024 &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setSidebarOpen]);

  return (
    <aside
      ref={sidebarRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`sidebar ${isHovered ? "hovered" : ""} ${
        sidebarOpen ? "collapsed expanded expandedSidebar" : ""
      }`}>
      <a href='/'>
        <div className='sidebar-header'>
          <div className='sidebar-logo-icon'>
            <img
              src={logoSmall2}
              className='h-[47px] object-cover'
              alt='LOGO'
            />
          </div>
          <div className='flex flex-col logo-text'>
            <h1 className='text-xl'>
              Admin
              <span className='text-[#CE0059] font-semibold'>Dashboard</span>
            </h1>
            <span className='whitespace-nowrap capitalize text-xs text-slate-400'>
              simple & customizable
            </span>
          </div>
        </div>
      </a>
      <ul className='sidebar-content'>
        <li className='px-[18px]'>
          <Link to='/' className='sidebar-menu active'>
            <span className='sidebar-menu-icon'>
              <LayoutDashboardIcon />
            </span>
            <span className='sidebar-menu-text'>Dashboard</span>
          </Link>
        </li>

        <div className='sidebar-menu-header'>Applications</div>
        <li className='px-[18px]'>
          <Link to='email' className='sidebar-menu'>
            <span className='sidebar-menu-icon'>
              <MailIcon />
            </span>
            <span className='sidebar-menu-text'>Email</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
