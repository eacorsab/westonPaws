import { useEffect } from "react";
import React from "react";
import about from "../assets/about/ABOUTUSSLIDE.jpeg";
import backgroundImage from "../assets/bg-pet-purple.png";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="relative h-full">
        <img
          src={about}
          alt="About Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute  bottom-1/3 right-10 transform translate-y-[-50%] mr-4 text-white">
          <h1 className="text-4xl font-bold">ABOUT US</h1>
        </div>
      </div>
      <div
        className="bg-cover bg-center h-[400px] w-full flex items-center justify-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="bg-black h-full w-full bg-opacity-30 flex items-center">
          <div className="mx-auto  flex flex-col items-center w-[1000px]">
            <h1 className="text-white text-2xl text-center">
              For paws only has the best groomer in Weston. The groomers have
              more than 14 years of experience grooming our best friends (pets).
              For paws only offers you the best spa for your pet, that they
              never will forget. In for paws only groomers will always do the
              for your pets, because for paws will always make sure that you and
              your pets be happy.
            </h1>
            <div className="my-6 text-center">
              <h1 className="text-yellow-500 uppercase text-3xl">
                ATTENTION SCHEDULE
              </h1>
              <h1 className="text-white uppercase text-3xl">
                MON 09H00 – 16H00
              </h1>
              <h1 className="text-white uppercase text-3xl">
                TUES-SAT 08H30 – 17H00
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
