import { useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navigation() {
  const [showSearch, setShowSearch] = useState("hidden-search");
  const [searchBtn, setSearchBtn] = useState("fa-magnifying-glass");
  const [height, setHeight] = useState("h-0");
  const inpSearch = useRef(null);
  const handleClickSearch = (e) => {
    showSearch === "hidden-search"
      ? setShowSearch("show-search")
      : setShowSearch("hidden-search");
    searchBtn === "fa-magnifying-glass"
      ? setSearchBtn("fa-circle-xmark")
      : setSearchBtn("fa-magnifying-glass");
    inpSearch.current.focus();
    inpSearch.current.value = "";
  };

  return (
    <header className="sticky top-0 z-20">
      <nav className="flex justify-between items-center bg-[256,256,256,0.9] backdrop-blur-lg">
        <button
          className="p-3 cursor-pointer hover:border-b-2 hover:text-orange-700 md:hidden"
          onClick={() =>
            height === "h-0" ? setHeight("h-37.5") : setHeight("h-0")
          }
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        <Link to="/">
          <button className="font-bold cursor-pointer">JackieStore</button>
        </Link>
        <ul className=" font-bold hidden md:flex">
          <li>
            <NavLink
              to="/"
              className="p-3 cursor-pointer block hover:border-b-2 hover:text-orange-700"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className="p-3 cursor-pointer block hover:border-b-2 hover:text-orange-700"
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="p-3 cursor-pointer block hover:border-b-2 hover:text-orange-700"
            >
              About
            </NavLink>
          </li>
        </ul>
        <div className="hidden xl:block p-3">
          <input
            type="text"
            name="txt-search-bar"
            placeholder="Search Here..."
            className={`border mr-2 p-1 rounded-md outline-0 ${showSearch}`}
            ref={inpSearch}
          />
          <button
            onClick={handleClickSearch}
            className="cursor-pointer hover:text-orange-700"
          >
            <i className={`fa-solid ${searchBtn}`}></i>
          </button>
        </div>
        <div className="block xl:hidden ">
          <button className="cursor-pointer hover:text-orange-700">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div className="p-3">
          <Link to="/carts">
            <button className="cursor-pointer hover:text-orange-700">
              <i className="fa-solid fa-cart-shopping"></i>
            </button>
          </Link>
        </div>
      </nav>
      <nav
        className={`w-full bg-[256,256,256,0.9] overflow-hidden backdrop-blur-lg ${height} transition-all ease-in duration-150 md:hidden`}
      >
        <ul className="flex flex-col" onClick={() => setHeight("h-0")}>
          <li>
            <NavLink
              to="/"
              className="p-3 cursor-pointer block hover:border-b-2 hover:text-orange-700"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className="p-3 cursor-pointer block hover:border-b-2 hover:text-orange-700"
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="p-3 cursor-pointer block hover:border-b-2 hover:text-orange-700"
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
