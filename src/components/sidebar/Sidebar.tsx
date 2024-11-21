import { logoSmall2 } from "@/assets";
import { menuItems } from "@/menus";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const { pathname } = useLocation();
  const [isHovered, setHovered] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const submenuRefs = useRef<{ [key: string]: HTMLUListElement | null }>({});

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

  const toggleSubmenu = (menuName: string) => {
    setActiveMenu((prevMenu) => (prevMenu === menuName ? null : menuName));
  };

  const handleSubmenuItemClick = () => {
    setActiveMenu(null);
  };

  const isRouteActive = (route: string) => pathname === route;

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
            <h1 className='text-xl font-semibold'>
              UI
              <span className='text-[#CE0059] '>Nexus</span>
            </h1>
            <span className='whitespace-nowrap capitalize text-xs text-slate-400'>
              simple & customizable
            </span>
          </div>
        </div>
      </a>

      <ul className='sidebar-content'>
        {menuItems.map((item) => {
          const isSubmenuOpen = activeMenu === item.name;
          const isMainRouteActive = isRouteActive(item.route || "");

          // Check if any submenu's route matches the current path
          const isSubmenuRouteActive = item.submenu?.some((sub) =>
            isRouteActive(sub.route)
          );

          return (
            <li
              key={item.name}
              className='px-[18px]'
              onClick={() => toggleSubmenu(item.name)}>
              <Link
                to={item.route || "#"}
                className={`sidebar-menu ${
                  isMainRouteActive || isSubmenuRouteActive ? "active" : ""
                }`}>
                <span className='sidebar-menu-icon'>
                  <item.icon />
                </span>
                <span className='sidebar-menu-text'>{item.name}</span>
                {item.submenu && (
                  <span className='sidebar-menu-arrow'>
                    {isSubmenuOpen ? <ChevronDown /> : <ChevronRight />}
                  </span>
                )}
              </Link>

              {item.submenu && (
                <ul
                  ref={(el) => (submenuRefs.current[item.name] = el)}
                  style={{
                    maxHeight: isSubmenuOpen
                      ? `${submenuRefs.current[item.name]?.scrollHeight}px`
                      : "0px",
                  }}
                  className={`sidebar-submenu ${
                    isSubmenuOpen ? "expanded-submenu" : ""
                  }`}
                  onClick={handleSubmenuItemClick}>
                  {item.submenu.map((sub) => (
                    <>
                      <li key={sub.name}>
                        <Link
                          to={sub.route}
                          className={`sidebar-submenu-item ${
                            isRouteActive(sub.route) ? "active" : ""
                          }`}>
                          {sub.name}
                        </Link>
                      </li>
                    </>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
