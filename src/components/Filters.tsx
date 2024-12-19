import React, { useState } from "react";
import { ChevronDown } from "react-feather";
import Cards from "./Cards";

const dummyDoctorsData = [
  {
    id: 1,
    name: "Dr. John Doe",
    specialization: "Male-Female Infertility",
    experience: "7 years of Experience",
    languages: "English, Hindi, Marathi",
    rating: 4.5,
    videoConsultationPrice: "₹800",
    chatConsultationPrice: "Free",
    imageUrl: "/image.png",
  },
  {
    id: 2,
    name: "Dr. Jane Smith",
    specialization: "Skin Care",
    experience: "8 years of Experience",
    languages: "English, Hindi",
    rating: 4.8,
    videoConsultationPrice: "$200",
    chatConsultationPrice: "$70",
    imageUrl: "/image.png",
  },
];

const Filters = () => {
  const [expertiseOpen, setExpertiseOpen] = useState(false);
  const [genderOpen, setGenderOpen] = useState(false);
  const [feesOpen, setFeesOpen] = useState(false);
  const [languagesOpen, setLanguagesOpen] = useState(false);

  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const expertiseOptions = [
    "Hair Care",
    "Skin Care",
    "Fitness",
    "Nutrition",
    "Male-Female Infertility",
    "Mental Health",
  ];
  const genderOptions = ["Male", "Female", "Non-binary"];
  const feesOptions = ["Below $100", "$100-$500", "Above $500"];
  const languagesOptions = ["Hindi", "English", "Spanish", "French"];

  const handleSelectFilter = (filter: string) => {
    if (!selectedFilters.includes(filter)) {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };

  const handleRemoveFilter = (filter: string) => {
    setSelectedFilters(selectedFilters.filter((item) => item !== filter));
  };

  const filteredDoctorsData = dummyDoctorsData.filter((doctor) => {
    return selectedFilters.every((filter) => {
      return (
        doctor.specialization.toLowerCase().includes(filter.toLowerCase()) ||
        doctor.languages.toLowerCase().includes(filter.toLowerCase()) ||
        (filter === "Below $100" &&
          parseFloat(doctor.chatConsultationPrice.substring(1)) < 100) ||
        (filter === "$100-$500" &&
          parseFloat(doctor.chatConsultationPrice.substring(1)) >= 100 &&
          parseFloat(doctor.chatConsultationPrice.substring(1)) <= 500) ||
        (filter === "Above $500" &&
          parseFloat(doctor.chatConsultationPrice.substring(1)) > 500)
      );
    });
  });

  return (
    <div className="mt-5 flex flex-col justify-center gap-4 flex-wrap px-4 sm:px-6">
      {/* Dropdown buttons for filters */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-10">
        {/* Expertise Dropdown */}
        <div className="relative">
          <button
            className="px-4 sm:px-6 py-2 bg-gray-100 rounded-md flex items-center gap-2 text-sm sm:text-base"
            onClick={() => setExpertiseOpen(!expertiseOpen)}
          >
            Expertise
            <ChevronDown size={16} />
          </button>
          {expertiseOpen && (
            <div className="absolute top-full mt-2 bg-white border rounded-md shadow-md w-40 z-10">
              {expertiseOptions.map((option, index) => (
                <div
                  key={index}
                  className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-100"
                  onClick={() => {
                    handleSelectFilter(option);
                    setExpertiseOpen(false);
                  }}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Gender Dropdown */}
        <div className="relative">
          <button
            className="px-4 sm:px-6 py-2 bg-gray-100 rounded-md flex items-center gap-2 text-sm sm:text-base"
            onClick={() => setGenderOpen(!genderOpen)}
          >
            Gender
            <ChevronDown size={16} />
          </button>
          {genderOpen && (
            <div className="absolute top-full mt-2 bg-white border rounded-md shadow-md w-40 z-10">
              {genderOptions.map((option, index) => (
                <div
                  key={index}
                  className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-100"
                  onClick={() => {
                    handleSelectFilter(option);
                    setGenderOpen(false);
                  }}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Fees Dropdown */}
        <div className="relative">
          <button
            className="px-4 sm:px-6 py-2 bg-gray-100 rounded-md flex items-center gap-2 text-sm sm:text-base"
            onClick={() => setFeesOpen(!feesOpen)}
          >
            Fees
            <ChevronDown size={16} />
          </button>
          {feesOpen && (
            <div className="absolute top-full mt-2 bg-white border rounded-md shadow-md w-40 z-10">
              {feesOptions.map((option, index) => (
                <div
                  key={index}
                  className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-100"
                  onClick={() => {
                    handleSelectFilter(option);
                    setFeesOpen(false);
                  }}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Languages Dropdown */}
        <div className="relative">
          <button
            className="px-4 sm:px-6 py-2 bg-gray-100 rounded-md flex items-center gap-2 text-sm sm:text-base"
            onClick={() => setLanguagesOpen(!languagesOpen)}
          >
            Languages
            <ChevronDown size={16} />
          </button>
          {languagesOpen && (
            <div className="absolute top-full mt-2 bg-white border rounded-md shadow-md w-40 z-10">
              {languagesOptions.map((option, index) => (
                <div
                  key={index}
                  className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-100"
                  onClick={() => {
                    handleSelectFilter(option);
                    setLanguagesOpen(false);
                  }}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* "All Filters" button */}
        <button className="px-4 sm:px-6 py-2 bg-[#E5EFE5] text-[#3A643B] rounded-md flex items-center gap-2 text-sm sm:text-base">
          All filters
          <ChevronDown size={16} />
        </button>
      </div>

      <div className="w-full sm:w-auto sm:ml-auto sm:mr-4 lg:mr-44">
        {/* Display Selected Filters */}
        {selectedFilters.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {selectedFilters.map((filter, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-[#EAF2EA] text-black rounded-[30px] flex items-center gap-2 text-sm"
              >
                {filter}
                <button
                  className="text-xs text-gray-600 ml-2"
                  onClick={() => handleRemoveFilter(filter)}
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="w-full px-4 sm:px-10">
        {/* Display Cards based on Filters */}
        <Cards doctorsData={filteredDoctorsData} />
      </div>
    </div>
  );
};

export default Filters;
