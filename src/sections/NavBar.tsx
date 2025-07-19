import React, { useState } from "react";


const NavItems = () => {
    return(
        <ul className="nav-ul">
            {[].map()}
        </ul>
    )
}

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a
            href="/"
            className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
          >
            Bosro
          </a>
          <button onClick={toggleMenu} className="text-neutral-400 hover:text-white focus: outline-none sm:hidden flex" aria-label="Toggle menu">
            <img
              src={isOpen ? "assets/menu.jpg" : "assets/close.png"}
              alt="menu-icon"
              className="w-6 h-6"
            />
          </button>
          <nav className="sm:flex hidden">
            <NavItems/>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
