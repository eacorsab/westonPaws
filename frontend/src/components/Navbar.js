import { useState, useEffect, useRef } from "react";
import backgroundImage from "../assets/bg-menu-patitas.png";
import logo from "../assets/logo-weston.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [serviceDropdown, setServiceDropdown] = useState(false);
  const serviceTimeout = useRef(null);

  const handleServiceEnter = () => {
    clearTimeout(serviceTimeout.current);
    setServiceDropdown(true);
  };

  const handleServiceLeave = () => {
    serviceTimeout.current = setTimeout(() => {
      setServiceDropdown(false);
    }, 300);
  };

  useEffect(() => {
    return () => clearTimeout(serviceTimeout.current);
  }, []);

  return (
    <nav
      className="bg-cover bg-center h-[100px] w-full"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex flex-wrap justify-between h-full items-center mx-auto max-w-screen-xl p-4 ">
        <a href="#" className="flex items-center space-x-2 rtl:space-x-reverse">
          <img src={logo} className="h-[75px]" alt="Weston Logo" />
        </a>
        <div
          id="mega-menu-full"
          className="items-center justify-between font-medium hidden w-full md:flex md:w-auto md:order-1 "
        >
          <ul className="grid grid-cols-6 gap-4 rounded-lg h-full rtl:space-x-reverse ">
            <Link
              to="/"
              className="text-white block py-2 px-3 font-light text-sm rounded md:p-0"
            >
              Home
            </Link>

            <Link
              to="/about-us"
              className="text-white block py-2 px-3 font-light text-sm rounded md:p-0"
            >
              About us
            </Link>
            <li
              onMouseEnter={handleServiceEnter}
              onMouseLeave={handleServiceLeave}
              className="relative group"
            >
              <a
                href="#"
                className="text-white block py-2 px-3 font-light text-sm rounded md:p-0"
              >
                Services
              </a>
              {serviceDropdown && (
                <div className="absolute top-full z-10 left-0 mt-2 w-[200px] text-xs bg-[#28123F] rounded-md shadow-lg">
                  <Link
                    to="/partial-grooming"
                    className="uppercase flex flew-wrap py-2 px-4 text-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      width="16"
                      viewBox="0 0 512 512"
                      className="fill-[#40B2C2]"
                    >
                      <path d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z" />
                    </svg>
                    <span className="px-2 text-white hover:text-yellow-500  ">
                      {" "}
                      Partial Gromming
                    </span>
                  </Link>
                  <Link
                    to="/full-grooming"
                    className=" uppercase flex flew-wrap py-2 px-4 text-gray-700 "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      width="16"
                      viewBox="0 0 512 512"
                      className="fill-[#40B2C2]"
                    >
                      <path d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z" />
                    </svg>
                    <span className="px-2 text-white hover:text-yellow-500">
                      {" "}
                      Full Gromming
                    </span>
                  </Link>
                </div>
              )}
            </li>
            <Link
              to="/products"
              className="text-white block py-2 px-3 font-light text-sm rounded md:p-0 "
            >
              Products
            </Link>

            <li>
              <Link
                to="/gallery"
                className="text-white block py-2 px-3 font-light text-sm rounded md:p-0 "
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                className="text-white block py-2 px-3 font-light text-sm rounded md:p-0 "
              >
                Contact us
              </Link>
            </li>
          </ul>
          <div className="h-[30px] w-0.5 bg-gray-300 mx-4"></div>

          <div className="flex items-center space-x-4 mx-4">
            <a
              href="https://www.facebook.com/For-paws-only-172399763339434/"
              className="text-white hover:text-blue-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="10"
                viewBox="0 0 320 512"
                fill="currentColor"
              >
                <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/for_paws_only/"
              className="text-white hover:text-blue-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="14"
                viewBox="0 0 448 512"
                fill="currentColor"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
