"use client";

import { Star } from "lucide-react";
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";

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
  bio = "Hello! I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital Surat. love to work with all my hospital staff and seniour doctors. Completed my graduation in Gynaecologist Medicine from the",
  languages = ["English", "Hindi", "Telugu"],
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
            className="border border-white relative z-0 w-full h-full object-contain rounded-t-[20px]"
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
              <div className="flex items-center flex-col sm:flex-row sm:gap-12 sm:items-start mt-6">
                <div className="text-center ml-2 sm:text-left">
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
                <div className="flex flex-wrap gap-8 sm:gap-16 mt-5 ml-32 justify-center sm:justify-start text-lg">
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

      {/* About me */}
      <div className="flex">
        <div>
          <div className="border mx-16 bg-white rounded-2xl shadow-sm max-w-2xl mb-10">
            {/* Header */}
            <div className="px-10 py-4 rounded-t-2xl bg-gradient-to-l from-[#fcfbfc] to-[#f4f7ec] flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium">A Little About me</h2>
              <button className="text-sm border p-2 rounded-lg border-[#3a643b] font-semibold">
                Follow +
              </button>
            </div>

            {/* Bio */}
            <div className="mb-6 px-10">
              <p className="text-gray-600 text-md leading-relaxed">
                {bio}...
                <div className="flex items-center gap-8">
                  <div className="w-[80%]">
                    <hr />
                  </div>
                  <button className="text-gray-900 text-sm font-semibold ml-1 hover:underline">
                    Read More
                  </button>
                </div>
              </p>
            </div>

            {/* Languages */}
            <div className="mb-6 px-10 flex gap-10">
              <h3 className="text-lg mb-3">Language Spoken</h3>
              <div className="flex gap-3 mb-1">
                {languages.map((language) => (
                  <span
                    key={language}
                    className="px-4 py-1 flex justify-center items-center w-[100px] bg-gray-100 rounded-full text-sm font-semibold text-gray-600"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 px-10 mb-5">
              <a
                href="#"
                className="border p-2 rounded-full bg-[#f7f7fc] hover:text-gray-600"
              >
                <Facebook className="w-5 h-5 text-[#3A643B]" />
              </a>
              <a
                href="#"
                className="border p-2 rounded-full bg-[#f7f7fc] hover:text-gray-600"
              >
                <Instagram className="w-5 h-5 text-[#3A643B]" />
              </a>
              <a
                href="#"
                className="border p-2 rounded-full bg-[#f7f7fc] hover:text-gray-600"
              >
                <Twitter className="w-5 h-5 text-[#3A643B]" />
              </a>
              <a
                href="#"
                className="border p-2 rounded-full bg-[#f7f7fc] hover:text-gray-600"
              >
                <Youtube className="w-5 h-5 text-[#3A643B]" />
              </a>
            </div>
          </div>
          <div className="border mx-16 bg-white rounded-2xl shadow-sm max-w-2xl mb-10">
            {/* Header */}
            <div className="px-10 py-4 rounded-t-2xl bg-gradient-to-l from-[#fcfbfc] to-[#f4f7ec] flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium">I Specialize In</h2>
            </div>

            <div className="flex gap-10 m-10">
              <div className="flex flex-col items-center justify-center">
                <div className="w-20 flex p-2 items-center justify-center rounded-xl bg-[#fffcf2]">
                  <img src="/img1.png" className="w-16 h-16" alt="" />
                </div>
                <p>Women's Health</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="flex p-2 items-center justify-center rounded-xl bg-[#fffcf2]">
                  <img src="/img2.png" className="w-16 h-16" alt="" />
                </div>
                <p>Skin Care</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="flex p-2 items-center justify-center rounded-xl bg-[#fffcf2]">
                  <img src="/img3.png" className="w-16 h-16" alt="" />
                </div>
                <p>Immunity</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="flex p-2 items-center justify-center rounded-xl bg-[#fffcf2]">
                  <img src="/img4.png" className="w-16 h-16" alt="" />
                </div>
                <p>Hair Care</p>
              </div>
            </div>
          </div>
        </div>
        <div>hi</div>
      </div>
    </div>
  );
}
