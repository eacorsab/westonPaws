import React from "react";
import backgroundImage from "../assets/bg-paws-2.png";
import { Link } from "react-router-dom";
import ph1 from "../assets/footer/ph1.jpeg"
import ph2 from "../assets/footer/ph2.jpeg"
import ph3 from "../assets/footer/ph3.jpeg"
import ph4 from "../assets/footer/ph4.jpeg"
import ph5 from "../assets/footer/ph5.jpeg"
import ph6 from "../assets/footer/ph6.jpeg"

const Footer = () => {
  return (
    <>
      <div className="bg-yellow-400 grid grid-cols-6 h-[200px] items-center">
        <img src={ph1}/>
        <img src={ph2}/>
        <img src={ph3}/>
        <img src={ph4}/>
        <img src={ph5}/>
        <img src={ph6}/>
      </div>
      <footer
        className="bg-cover bg-center  h-[300px] w-full flex items-center justify-center relative text-white"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          objectFit: "cover",
        }}
      >
        <div className="grid grid-cols-3 mx-auto items-center">
          <div className="w-[400px]">
            <p className="text-[15px]">
              For paws only has the best groomer in Weston. The groomers have
              more than 14 years of expirience grooming our best friends.
            </p>
          </div>
          <div className="block mx-auto">
            <h1 className="text-yellow-500 uppercase">Menu</h1>
            <ul>
              <li><Link to="/" className="text-white uppercase hover:text-blue-800">HOME</Link></li>
              <li><Link to="/about-us" className="text-white uppercase hover:text-blue-800">ABOUT US</Link></li>
              <li className="text-white uppercase ">SERVICES</li>
              <li className="text-white uppercase ">PRODUCTS</li>
              <li><Link to="/gallery" className="text-white uppercase hover:text-blue-800">GALLERY</Link></li>
              <li><Link to="/Contact-us" className="text-white uppercase hover:text-blue-800">CONTACT US</Link></li>
            </ul>
          </div>
          <div className="block w-[350px]">
            <h1 className="text-yellow-500 uppercase">CONTACT INFORMATION</h1>
            <p1 className="text-white text-xs">
              For future customers information, please do not hesitate to
              contact us.
            </p1>
            <div href="#" className="uppercase flex flew-wrap py-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="12"
                viewBox="0 0 384 512"
                className="fill-yellow-500"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <span className="text-white px-2 hover:text-yellow-500 text-sm ">
                {" "}
                1681 Bonaventure Blvd Weston FL, 33326
              </span>
            </div>
            <div href="#" className="uppercase flex flew-wrap py-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="16"
                viewBox="0 0 512 512"
                className="fill-yellow-500"
              >
                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
              </svg>
              <span className="text-white px-2 hover:text-yellow-500 text-sm ">
                {" "}
                954 349 1114
              </span>
            </div>

            <div href="#" className="uppercase flex flew-wrap py-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="16"
                viewBox="0 0 512 512"
                className="fill-yellow-500"
              >
                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
              </svg>
              <span className="text-white px-2 hover:text-yellow-500 text-sm ">
                {" "}
                forpawsonly65@outlook.com
              </span>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-[#028791]">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex">
            <a
              href="https://www.facebook.com/For-paws-only-172399763339434/"
              className="text-white hover:text-blue-700 mx-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="10"
                viewBox="0 0 320 512"
                fill="currentColor"
                className="h-5 w-5"
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
                className="h-5 w-5"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </a>
          </div>
          <div className="flex h-[50px] items-center px-4">
            <p className="text-sm text-yellow-500 font-bold">Weston Pet Spa</p>
            <p className="text-sm text-white px-2">© 2017 All Rights Reserved</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
