import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface CardsProps {
  doctorsData: {
    id: number;
    name: string;
    specialization: string;
    experience: string;
    languages: string;
    rating: number;
    videoConsultationPrice: string | number;
    chatConsultationPrice: string | number;
    imageUrl: string;
  }[];
}

export default function Cards({ doctorsData }: CardsProps) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {doctorsData.map((doctor) => (
        <div
          key={doctor.id}
          className="w-full sm:w-[356px] bg-[#FFF7E2] rounded-[40px] p-6 flex flex-col items-center shadow-md"
        >
          {/* Profile Image and Rating */}
          <div className="relative mb-4">
            <div className="w-32 h-32 sm:w-[150px] sm:h-[150px] rounded-full overflow-hidden">
              <img
                src={doctor.imageUrl}
                alt={doctor.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-black px-2 py-0.5 rounded-full shadow-sm flex items-center gap-1">
              <span className="text-sm text-white font-medium">
                {doctor.rating}
              </span>
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            </div>
          </div>

          {/* Doctor Info */}
          <h2 className="text-xl sm:text-3xl font-semibold text-center mb-2">
            {doctor.name}
          </h2>
          <div>
            <div className="mt-5 flex flex-col items-start space-y-2 w-full mb-10">
              <div className="flex items-center gap-2 text-gray-600">
                <svg
                  className="ml-1"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_92)">
                    <path
                      d="M7.00001 13.6673L13.6667 7.00065C13.9782 6.69537 14.2261 6.33136 14.3961 5.92967C14.566 5.52798 14.6547 5.09658 14.6569 4.66042C14.6591 4.22426 14.5748 3.79198 14.4089 3.3886C14.243 2.98521 13.9988 2.61871 13.6904 2.3103C13.382 2.00188 13.0155 1.75766 12.6121 1.59177C12.2087 1.42587 11.7764 1.34159 11.3402 1.34379C10.9041 1.34599 10.4727 1.43464 10.071 1.6046C9.66931 1.77456 9.3053 2.02247 9.00001 2.33399L2.33335 9.00065C2.02183 9.30594 1.77392 9.66995 1.60396 10.0716C1.434 10.4733 1.34535 10.9047 1.34315 11.3409C1.34095 11.7771 1.42523 12.2093 1.59113 12.6127C1.75702 13.0161 2.00124 13.3826 2.30966 13.691C2.61807 13.9994 2.98457 14.2436 3.38796 14.4095C3.79134 14.5754 4.22361 14.6597 4.65978 14.6575C5.09594 14.6553 5.52734 14.5667 5.92903 14.3967C6.33072 14.2267 6.69473 13.9788 7.00001 13.6673Z"
                      stroke="#3A643B"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.66666 5.66666L10.3333 10.3333"
                      stroke="#3A643B"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_92">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <span className="text-sm">{doctor.specialization}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 10V16M21 10L11 5L1 10L11 15L21 10Z"
                    stroke="#3A643B"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.99951 11.9984V16.9984C7.99951 19.9984 13.9995 19.9984 16.9995 16.9984V11.9984"
                    stroke="#3A643B"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <span className="text-sm font-semibold">
                  {doctor.experience}
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <img src="/comment.png" alt="comment" />
                <span className="text-sm">Speaks: {doctor.languages}</span>
              </div>
            </div>
          </div>

          {/* Consultation Options */}
          <div className="flex gap-2 w-full mb-4">
            <div className="flex-1 p-2 border border-[#3A643B] rounded-lg text-center">
              <div className="text-xs text-gray-600">Video Consultation</div>
              <div className="font-medium">{doctor.videoConsultationPrice}</div>
            </div>
            <div className="flex-1 border border-[#3A643B] p-2 rounded-lg text-center">
              <div className="text-xs text-gray-600">Chat Consultation</div>
              <div className="font-medium text-[#3A643B]">
                {doctor.chatConsultationPrice}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <button className="w-full py-2 mb-2 border border-[#3A643B] text-[#3A643B] rounded-md hover:bg-[#3A643B]/5 transition-colors bg-white">
            <a
              href={`/doctor/${doctor.id}`}
              onClick={() => navigate(`/doctor/${doctor.id}`)}
            >
              View Profile
            </a>
          </button>
          <button className="w-full py-2 bg-[#3A643B] text-white rounded-md hover:bg-[#2D4F2E] transition-colors">
            Book a consultation
          </button>
        </div>
      ))}
    </div>
  );
}
