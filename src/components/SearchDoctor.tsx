import React from "react";
import Filters from "./Filters";
import { ChevronDown, MapPin, ArrowRight } from "lucide-react";

function SearchDoctor() {
  return (
    <div className="font-sans min-h-screen">
      {/* Navbar */}
      <nav className="bg-[#FFF7E2] px-4 sm:px-8 md:px-16 lg:px-24 py-4 flex flex-wrap justify-between items-center">
        <div className="flex flex-wrap gap-4 sm:gap-8 items-center">
          <img src="/title.png" className="h-8 sm:h-10" alt="title" />
          <div className="flex space-x-4 sm:space-x-8">
            <button className="text-[#474747] hover:text-[#3A643B] font-bold text-sm sm:text-base">
              Home
            </button>
            <button className="text-[#3A643B] font-bold text-sm sm:text-base">
              Find Doctors
            </button>
            <button className="text-[#474747] hover:text-[#3A643B] font-bold text-sm sm:text-base">
              About Us
            </button>
          </div>
        </div>
        <div className="space-x-2 sm:space-x-4 mt-4 sm:mt-0">
          <button className="px-4 sm:px-8 py-2 text-[#3A643B] border-2 border-[#3A643B] rounded-md font-medium text-sm sm:text-base">
            Login
          </button>
          <button className="px-4 sm:px-8 py-2 bg-[#3A643B] text-white rounded-md font-medium text-sm sm:text-base">
            Sign-up
          </button>
        </div>
      </nav>

      {/* Search Section */}
      <div className="relative bg-[#EAF2EA] py-8 sm:py-16 px-4 sm:px-6">
        {/* Background Circles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[-90px] left-[10%] w-[184px] h-[184px] rounded-full bg-[#CFEBCF] opacity-40" />
          <div className="absolute top-[150px] left-[20%] w-[184px] h-[184px] rounded-full bg-[#CFEBCF] opacity-40" />
          <div className="absolute top-[-90px] right-[10%] w-[184px] h-[184px] rounded-full bg-[#CFEBCF] opacity-40" />
          <div className="absolute top-[150px] right-[15%] w-[184px] h-[184px] rounded-full bg-[#CFEBCF] opacity-40" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-2xl sm:text-3xl font-semibold text-center mb-6 sm:mb-8">
            Find Expert Doctors For An In-Clinic Session Here
          </h1>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            {/* Location Selector */}
            <div className="relative w-full sm:w-auto">
              <MapPin
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#3A643B]"
                size={20}
              />
              <select className="w-full sm:w-[200px] pl-10 pr-4 py-3 rounded-md border border-gray-200 bg-white appearance-none cursor-pointer">
                <option value="" disabled selected>
                  Select Location
                </option>
                <option>Location 1</option>
                <option>Location 2</option>
                <option>Location 3</option>
              </select>
              <ChevronDown
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-auto">
              <input
                type="text"
                placeholder="eg. Doctor, specialisation, clinic name"
                className="w-full sm:w-[500px] px-4 py-3 rounded-md border border-gray-200"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <ArrowRight className="text-gray-700" size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <Filters />
      <hr className="mt-4" />
    </div>
  );
}

export default SearchDoctor;
