import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const Menus = [
    {
      title: "Home",
      url: "/home",
      gap: true,
      src: "src/assets/home-20-svgrepo-com.svg",
    },
    {
      title: "About",
      url: "/about",
      gap: true,
      src: "src/assets/globe-svgrepo-com.svg",
    },
    {
      title: "Contact",
      url: "/contact",
      gap: true,
      src: "src/assets/contact-phone-talking-svgrepo-com.svg",
    },
    {
      gap: true,
      title: "search",
      src: "src/assets/search-alt-2-svgrepo-com.svg",
    },
  ];
  return (
    <>
      <nav className="flex">
        <div
          className={`${
            open ? "w-72" : "w-20"
          } duration-300 h-screen flex-wrap relative bg-opacity-90 bg-blur-lg bg-orange-500 rounded-3xl p-5 pt-8 ml-2`}
        >
          <img
            src="src/assets/chevron-left-dot-svgrepo-com.svg"
            alt="Logo"
            className={`w-7 absolute cursor-pointer -right-3 top-9  border-2 border-white rounded-full  ${
              !open && "rotate-180"
            }`}
            onClick={() => {
              setOpen(!open);
            }}
          />
          <div className="flex gap-x-4 items-center">
            <img
              src="src/assets/Africa-continent.svg"
              alt="african-logo"
              className={`cursor-pointer w-20 duration-500 ${
                open && "rotate-[360deg]"
              } `}
            />
            <h1
              className={`text-white origin-left font-medium text-xl duration-300 ${
                !open && "scale:0"
              } ${!open && "hidden"} ml-1`}
            >
              African Countries
            </h1>
          </div>
          <ul className="pt-6">
            {Menus.map((menu) => {
              return (
                <div
                  key={menu.title}
                  className={`flex text-white text-md items-center gap-x-4 cursor-pointer p2 hover:bg-light-white rounded-md ${
                    menu.gap ? "mt-6" : "mt-2"
                  }`}
                >
                  <img src={menu.src} alt="icons" className="w-10 flex" />
                  <Link to={menu.url}>
                    <span className={`${!open && "hidden"}`}>{menu.title}</span>
                  </Link>
                </div>
              );
            })}
          </ul>
        </div>
        <div className="p-7 text-2xl font-semibold"></div>
      </nav>
    </>
  );
};

export default Navbar;
