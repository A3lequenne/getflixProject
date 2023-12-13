import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import Navleft from "./Navleft";
import NavTop from "./Navtop";
import { FaRegEdit } from "react-icons/fa";

function Profile() {
  const [isOpen, setClose] = useState(false);
  const toggleNavLeft = () => {
    setClose(!isOpen);
  };
  return (
    <div className="containermain w-screen flex flex-col mt-5 overflow-hidden">
      <div className="flex h-[10vh] w-screen flex-row-reverse w-screen relative items-center md:justify-between justify-around">
        <FaBars
          className={`mr-5 text-white flex lg:hidden cursor-pointer transition-opacity duration-300 ${
            isOpen ? "invisible opacity-0" : ""
          }`}
          onClick={toggleNavLeft}
        />
        <input
          type="text"
          className="glass ml-5 sm:w-screen sm:mx-5 h-[40px] rounded-xl pr-10 pl-4 flex items-center lg:hidden"
          placeholder="Search"
        />
      </div>
      <Navleft isOpen={isOpen} toggleNavLeft={toggleNavLeft} />
      <NavTop />
      <section
        className={`lg:absolute lg:left-[20vw] lg:bottom-0 lg:w-[80vw] lg:bg-white/10 h-[85vh] text-white text-3xl flex items-center justify-center ${
          isOpen ? "bg-white/0.5" : ""
        }`}
      >
        <div class="px-6 py-6 lglass rounded-3xl items-center justify-center">
          <h3 class="w-full flex justify-center text-[#b4d429] text-3xl font-bold">
            User Profile
          </h3>
          <div class="items-center justify-center text-center mt-2">
            <dl class="sm:w-fit lg:w-fit">
              <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Full name</dt>
                <dd class="mt-1 text-sm text-white-900 sm:mt-0 sm:col-span-2">
                  Blablabla
                </dd>
              </div>
              <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                  Email address
                </dt>
                <dd class="mt-1 text-sm text-white-900 sm:mt-0 sm:col-span-2">
                  Blablabla
                </dd>
              </div>
              <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Phone number</dt>
                <dd class="mt-1 text-sm text-white-900 sm:mt-0 sm:col-span-2">
                  Blablabla
                </dd>
              </div>
              <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Address</dt>
                <dd class="mt-1 text-sm text-white-900 sm:mt-0 sm:col-span-2">
                  Blablabla
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <button className="absolute top-0 right-0 bg-[#b4d429] text-white px-4 py-2 rounded-3xl mt-4">
          Edit Profile
        </button>
      </section>
    </div>
  );
}

export default Profile;
