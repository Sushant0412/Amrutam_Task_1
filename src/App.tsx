import React from "react";
import { ChevronDown, MapPin, ArrowRight } from "lucide-react";

function App() {
  return (
    <div className="font-sans min-h-screen bg-[#FFFBF3]">
      {/* Navbar */}
      <nav className="bg-[#FFF7E2] px-24 py-4 flex justify-between items-center">
        <div className="flex gap-8">
          <img src="/title.png" className="" alt="title" />
          <div className="flex space-x-8">
            <button className="text-[#474747] hover:text-[#3A643B] font-bold">
              Home
            </button>
            <button className="text-[#3A643B] font-bold">Find Doctors</button>
            <button className="text-[#474747] hover:text-[#3A643B] font-bold">
              About Us
            </button>
          </div>
        </div>
        <div className="space-x-4">
          <button className="px-8 py-2 text-[#3A643B] border-2 border-[#3A643B] rounded-md font-medium">
            Login
          </button>
          <button className="px-8 py-2 bg-[#3A643B] text-white rounded-md font-medium">
            Sign-up
          </button>
        </div>
      </nav>

      {/* Search Section */}
      <div className="h-[260px] relative bg-[#EAF2EA] pt-16 pb-20 px-6">
        {/* Background Circles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[-90px] left-[10%] w-[184px] h-[184px] rounded-full bg-[#CFEBCF] opacity-40" />
          <div className="absolute top-[150px] left-[20%] w-[184px] h-[184px] rounded-full bg-[#CFEBCF] opacity-40" />
          <div className="absolute top-[-90px] right-[10%] w-[184px] h-[184px] rounded-full bg-[#CFEBCF] opacity-40" />
          <div className="absolute top-[150px] right-[15%] w-[184px] h-[184px] rounded-full bg-[#CFEBCF] opacity-40" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-3xl font-semibold text-center mb-8">
            Find Expert Doctors For An In-Clinic Session Here
          </h1>

          <div className="flex justify-center gap-4 mb-15">
            {/* Location Selector */}
            <div className="relative">
              <MapPin
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#3A643B]"
                size={20}
              />
              <select className="w-[200px] pl-10 pr-4 py-3 rounded-md border border-gray-200 bg-white appearance-none cursor-pointer">
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
            <div className="relative">
              <input
                type="text"
                placeholder="eg. Doctor, specialisation, clinic name"
                className="w-[500px] px-4 py-3 rounded-md border border-gray-200"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <ArrowRight className="text-gray-700" size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Filters */}
      <div className="flex justify-center gap-4">
        <button className="px-6 py-2 bg-gray-100 rounded-md flex items-center gap-2">
          Expertise
          <ChevronDown size={16} />
        </button>
        <button className="px-6 py-2 bg-gray-100 rounded-md flex items-center gap-2">
          Gender
          <ChevronDown size={16} />
        </button>
        <button className="px-6 py-2 bg-gray-100 rounded-md flex items-center gap-2">
          Fees
          <ChevronDown size={16} />
        </button>
        <button className="px-6 py-2 bg-gray-100 rounded-md flex items-center gap-2">
          Languages
          <ChevronDown size={16} />
        </button>
        <button className="px-6 py-2 bg-[#E5EFE5] text-[#3A643B] rounded-md flex items-center gap-2">
          All filters
          <ChevronDown size={16} />
        </button>
      </div>
    </div>
  );
}

export default App;
