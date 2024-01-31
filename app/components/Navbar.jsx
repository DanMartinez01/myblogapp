import React from "react";

function Navbar() {
  return (
    <header className="flex items-center justify-between p-4">
      <a href={"/"} className="px-2 lg:px-0 font-bold">
        Tech Blog
      </a>
      <button className="block md:hidden px-2 text-3xl">
        <i className="bx bx-menu"></i>
      </button>
      <ul className="hidden md:inline-flex items-center">
        <li className="px-2 md:px-4">
          <a
            href={"/"}
            className="text-green-800 font-semibold hover:text-green-600"
          >
            {" "}
            Home{" "}
          </a>
        </li>
        <li className="px-2 md:px-4">
          <a
            href={"https://www.linkedin.com/in/danielaluciamartinez/"}
            className="text-gray-500 font-semibold hover:text-green-600"
          >
            {" "}
            Contact me{" "}
          </a>
        </li>
        {/* <li className="px-2 md:px-4 hidden md:block">
            <a
              href=""
              className="text-gray-500 font-semibold hover:text-green-600"
            >
              {" "}
              Login{" "}
            </a>
          </li> */}
        {/* <li className="px-2 md:px-4 hidden md:block">
            <a
              href=""
              className="text-gray-500 font-semibold hover:text-green-600"
            >
              {" "}
              Register{" "}
            </a>
          </li> */}
      </ul>
    </header>
  );
}

export default Navbar;
