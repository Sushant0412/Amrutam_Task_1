"use client";

import { Star } from "lucide-react";
import LeftHalf from "./LeftHalf";

interface DoctorProfileHeaderProps {
  name: string;
  specialization: string;
  rating: number;
  followers: number;
  following: number;
  posts: number;
  imageUrl: string;
  bio: string;
  languages: string[];
}

export default function Profile({
  name = "Dr. Bruce Willis",
  specialization = "Gynecologist",
  rating = 4.2,
  followers = 850,
  following = 18,
  posts = 250,
  imageUrl = "/profile.png",
  bio = "Hello! I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital Surat. love to work with all my hospital staff and senior doctors. Completed my graduation in Gynaecologist Medicine from the",
  languages = ["English", "Hindi", "Telugu"],
}: DoctorProfileHeaderProps) {
  return (
    <div className="min-h-screen">
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
        {/* Background Pattern */}
        <div className="mt-3">
          <img
            src="/profileBg.png"
            alt="profileBg"
            className="border border-white relative z-0 w-full h-full object-contain rounded-t-[20px]"
          />
        </div>
        <div className="relative z-10 bottom-1 sm:md:bottom-5 lg:bottom-10 px-6 sm:px-8 md:px-12 py-6 bg-[#FFFBF2] rounded-b-[20px] shadow-lg">
          <div className="relative z-10 flex flex-wrap gap-8 justify-between items-center">
            {/* Profile Image */}
            <div className="md:relative sm:static bottom-24 flex-shrink-0 mx-auto sm:mx-0 sm:bottom-0 sm:top-0 lg:top-[-80px]">
              <img
                src={imageUrl}
                alt="Profile"
                className="w-[120px] sm:w-[150px] md:w-[180px] h-[120px] sm:h-[150px] md:h-[180px] lg:top-3 rounded-full border border-white object-cover"
              />
            </div>

            {/* Profile Info */}
            <div className="flex-grow">
              <div className="flex items-center flex-col sm:flex-row sm:gap-12 sm:items-start mt-6 md:mt-0">
                <div className="text-center sm:text-left">
                  <div className="flex items-center gap-3">
                    <h1 className="text-2xl font-semibold">{name}</h1>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-5 h-5 text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="12"
                        fill="currentColor"
                        fillOpacity="0.1"
                      />
                      <path
                        d="M8 12.5L10.5 15L16 9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
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
                <div className="flex flex-wrap gap-8 sm:gap-16 mt-5 justify-center sm:justify-start text-lg">
                  <div className="text-center sm:text-left w-full sm:w-auto">
                    <div className="font-semibold">{followers}</div>
                    <div className="text-xs text-gray-600">Followers</div>
                  </div>
                  <div className="text-center sm:text-left w-full sm:w-auto">
                    <div className="font-semibold">{following}K</div>
                    <div className="text-xs text-gray-600">Following</div>
                  </div>
                  <div className="text-center sm:text-left w-full sm:w-auto">
                    <div className="font-semibold">{posts}</div>
                    <div className="text-xs text-gray-600">Posts</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Book Appointment Button */}
            <div className="flex-shrink-0 mx-auto mt-6 sm:mt-0 sm:ml-4">
              <button className="bg-[#3A643B] text-white text-md font-semibold py-2 px-2  rounded-lg h-[50px]">
                Book an Appointment
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* About Me */}
      <div className="flex flex-wrap mt-10 px-4 sm:px-12 md:px-16">
        <div className="w-full lg:w-1/2 p-4">
          <LeftHalf bio={bio} languages={languages} rating={rating} />
        </div>
        <div className="w-full lg:w-1/2 p-4"></div>
      </div>
    </div>
  );
}
