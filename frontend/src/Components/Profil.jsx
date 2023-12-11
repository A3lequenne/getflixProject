import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa6';
import Navleft from './Navleft';
import NavTop from './Navtop';



function Profile() {
    const [isOpen, setClose] = useState(false);
    const toggleNavLeft = () => {
      setClose(!isOpen);
    };
    return (
        <div className='containermain w-screen flex flex-col mt-5 overflow-hidden'>
        <div className='flex h-[10vh] w-screen flex-row-reverse w-screen relative items-center md:justify-between justify-around'>
          <FaBars
            className={`mr-5 text-white flex lg:hidden cursor-pointer transition-opacity duration-300 ${isOpen ? 'invisible opacity-0' : ''}`}
            onClick={toggleNavLeft}
          />
          <input
            type="text"
            className='glass ml-5 sm:w-screen sm:mx-5 h-[40px] rounded-xl pr-10 pl-4 flex items-center lg:hidden'
            placeholder="Search"
          />
        </div>
        <Navleft isOpen={isOpen} toggleNavLeft={toggleNavLeft} />
        <NavTop />
        <section className={`lg:absolute lg:left-[20vw] lg:bottom-0 lg:w-[80vw] lg:bg-white/10 h-[85vh] text-white text-3xl flex items-center justify-center ${isOpen ? 'bg-white/0.5' : ''}`}>

        <div class="w-[100%] h-[100vh]  flex items-center justify-center overflow-hidden">
            <div class="w-[80%] h-[80%] flex flex-row items-center justify-center rounded-3xl">
                <div class="flex-1 glass rounded-3xl shadow-xl p-8">
                    <h4 class="w-full flex justify-center text-center py-4 text-[#b4d429] text-3xl font-bold">Personal Info</h4>
                    <ul class="mt-2 text-white text-center">
                        <li class="flex  py-3">
                            <span class="font-bold w-100">Full name:</span>
                            <span class="text-white">blablabla</span>
                        </li>
                        <li class="flex py-2">
                            <span class="font-bold w-100">Birthday:</span>
                            <span class="text-white">blablabla</span>
                        </li>
                        <li class="flex  py-2">
                            <span class="font-bold w-100">Joined:</span>
                            <span class="text-white">blablabla</span>
                        </li>
                        <li class="flex  py-2">
                            <span class="font-bold w-100">Mobile:</span>
                            <span class="text-white">blablabla</span>
                        </li>
                        <li class="flex py-2">
                            <span class="font-bold w-100">Email:</span>
                            <span class="text-white">blablabla</span>
                        </li>
                        <li class="flex py-2">
                            <span class="font-bold w-100">Location:</span>
                            <span class="text-white">blablabla</span>
                        </li>
                        <li class="flex py-2">
                            <span class="font-bold w-100">Languages:</span>
                            <span class="text-white">blablabla</span>
                        </li>

                    </ul>
                </div>
                </div>
                </div>

        </section>
      </div>
       )
     }
     

export default Profile
