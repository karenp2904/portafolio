import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar as HeroNavbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@heroui/react";
import { Icon } from '@iconify/react';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  
  const menuItems = [
    { name: "Inicio", path: "/", icon: "lucide:home" },
    { name: "Sobre mí", path: "/about", icon: "lucide:user" },
    { name: "Habilidades", path: "/skills", icon: "lucide:code" },
    { name: "Proyectos", path: "/projects", icon: "lucide:folder" },
    { name: "Contacto", path: "/contact", icon: "lucide:mail" }
  ];

  return (
    <HeroNavbar 
      onMenuOpenChange={setIsMenuOpen}
      className="gradient-primary text-white shadow-md backdrop-blur-sm bg-opacity-95 sticky top-0 z-50"
      maxWidth="xl"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          className="sm:hidden text-white"
        />
        <NavbarBrand>
          <Link to="/" className="text-2xl font-bold text-white flex items-center">
            <span className="bg-white text-primary rounded-full w-10 h-10 flex items-center justify-center mr-3">KP</span>
            Portafolio
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-6" justify="end">
        {menuItems.map((item) => (
          <NavbarItem key={item.path} isActive={location.pathname === item.path}>
            <Link 
              to={item.path} 
              className={`text-white hover:text-secondary-200 transition duration-300 flex items-center gap-2 ${
                location.pathname === item.path ? "font-semibold" : ""
              }`}
            >
              <Icon icon={item.icon} />
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu className="bg-primary bg-opacity-95 pt-6">
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.path}>
            <Link 
              to={item.path} 
              className={`text-white hover:text-secondary-200 transition duration-300 flex items-center gap-3 py-3 ${
                location.pathname === item.path ? "font-semibold bg-white/10 px-4 rounded-lg" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <Icon icon={item.icon} className="text-xl" />
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </HeroNavbar>
  );
};
