"use client";

import { Star } from "lucide-react";

interface DoctorProfileHeaderProps {
  name: string;
  specialization: string;
  rating: number;
  followers: number;
  following: number;
  posts: number;
  imageUrl: string;
}

export default function Profile({
  name = "Dr. Bruce Willis",
  specialization = "Gynecologist",
  rating = 4.2,
  followers = 850,
  following = 18,
  posts = 250,
  imageUrl = "/profile.png",
}: DoctorProfileHeaderProps) {
  return (
    <div>
      {/* Navigation */}
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

      {/* Profile Header */}
      <div className="w-full px-6 sm:px-12 md:px-16 mt-10">
        {/* Profile Content */}
        {/* Background Pattern */}
        <div className="mt-3">
          <img
            src="/profileBg.png"
            alt="profileBg"
            className="relative z-0 w-full h-full object-contain rounded-t-[20px]"
          />
        </div>
        <div className="relative z-10 bottom-10 px-6 sm:px-8 md:px-12 py-6 bg-[#FFFBF2] rounded-b-[20px] shadow-lg">
          <div className="flex flex-wrap gap-8 justify-between items-center">
            {/* Profile Image */}
            <div className="flex-shrink-0 mx-auto sm:mx-0">
              <img
                src={imageUrl}
                alt="Profile"
                className=" w-[180px] h-[180px] rounded-full border border-white object-cover"
              />
            </div>

            {/* Profile Info */}
            <div className="flex-grow">
              <div className="flex flex-col sm:flex-row sm:gap-12 items-center sm:items-start mt-6">
                <div className="text-center sm:text-left">
                  <h1 className="text-2xl font-semibold">{name}</h1>
                  <p className="text-lg text-gray-600 mb-1">{specialization}</p>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4 justify-center sm:justify-start">
                    <span className="text-lg font-medium ml-1">{rating}</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-6 h-6 ${
                            i < Math.floor(rating)
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex flex-wrap gap-8 sm:gap-16 justify-center sm:justify-start text-lg">
                  <div className="text-center">
                    <div className="font-semibold">{followers}</div>
                    <div className="text-xs text-gray-600">Followers</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold">{following}K</div>
                    <div className="text-xs text-gray-600">Following</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold">{posts}</div>
                    <div className="text-xs text-gray-600">Posts</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Book Appointment Button */}
            <div className="flex-shrink-0 mx-auto mt-6 sm:mt-0 sm:ml-4">
              <button className="bg-[#3A643B] text-white text-xl font-semibold px-6 py-2 rounded-lg w-full sm:w-[274px] h-[59px]">
                Book an Appointment
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Render About page here */}
    </div>
  );
}
