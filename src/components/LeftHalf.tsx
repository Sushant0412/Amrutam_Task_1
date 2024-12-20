import { Star, Facebook, Instagram, Youtube, Twitter } from "lucide-react";

interface LeftHalfProps {
  bio: string;
  languages: string[];
  rating: number;
}

function LeftHalf({ bio, languages, rating }: LeftHalfProps) {
  return (
    <div className="w-full">
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
        <div className="mb-6 px-10 flex flex-wrap gap-10">
          <h3 className="text-lg mb-3">Language Spoken</h3>
          <div className="flex flex-wrap gap-3 mb-1">
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

        <div className="flex flex-wrap gap-10 m-10">
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
      <div className=" border mx-16 bg-white rounded-2xl shadow-sm max-w-2xl mb-10">
        {/* Header */}
        <div className="px-10 py-4 rounded-t-2xl bg-gradient-to-l from-[#fcfbfc] to-[#f4f7ec] flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium">My Work Experience</h2>
        </div>

        <h1 className="px-10 pb-6 pt-3 text-[#3A643B] font-bold">
          I HAVE BEEN IN PRACTICE FOR: 7+ YEARS
        </h1>
        <hr className="mx-10" />
        <div className="px-10 flex flex-col gap-5 mt-5 mb-10">
          <div className="flex flex-wrap gap-3">
            <img src="/house.png" alt="" />
            <div className="flex flex-col">
              <p>Midtown Medical Clinic</p>
              <p className="text-gray-400">Senior doctor</p>
            </div>
            <p className="text-gray-600">2016-PRESENT</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <img src="/house.png" alt="" />
            <div className="flex flex-col">
              <p>Midtown Medical Clinic</p>
              <p className="text-gray-400">Senior doctor</p>
            </div>
            <p className="text-gray-600">2010-2015</p>
          </div>
        </div>
      </div>
      <div className=" border mx-16 bg-white rounded-2xl shadow-sm max-w-2xl mb-10">
        {/* Header */}
        <div className="px-10 py-4 rounded-t-2xl bg-gradient-to-l from-[#fcfbfc] to-[#f4f7ec] flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium">Featured Reviews (102) </h2>
        </div>
        <div className="px-10 rounded-xl mb-5">
          <div className="bg-[#FAFAFA] p-5 rounded-lg">
            <div className="flex flex-wrap items-center justify-between ">
              <div className="flex items-center gap-3">
                <img src="/review.png" alt="review" />
                <div className="flex flex-col">
                  <p className="font-semibold">Alicent Hightower</p>
                  <p className="text-sm text-gray-400">
                    Consulted for Skin care
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-400">20 January 2024</p>
            </div>
            <div className="mt-4 flex items-center gap-1 mb-4 justify-center sm:justify-start">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(rating)
                        ? "text-orange-500 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="text-wrap text-clip">
              Might be bit early to confirm but yes I can see noticeable
              difference in my hairfall. will write again after using it for
              longer periods
            </div>
          </div>
        </div>
        <div className="px-10 rounded-xl mb-5">
          <div className="bg-[#FAFAFA] p-5 rounded-lg">
            <div className="flex flex-wrap items-center justify-between ">
              <div className="flex items-center gap-3">
                <img src="/review.png" alt="review" />
                <div className="flex flex-col">
                  <p className="font-semibold">Alicent Hightower</p>
                  <p className="text-sm text-gray-400">
                    Consulted for Skin care
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-400">20 January 2024</p>
            </div>
            <div className="mt-4 flex items-center gap-1 mb-4 justify-center sm:justify-start">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(rating)
                        ? "text-orange-500 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="text-wrap text-clip">
              Might be bit early to confirm but yes I can see noticeable
              difference in my hairfall. will write again after using it for
              longer periods.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LeftHalf;
