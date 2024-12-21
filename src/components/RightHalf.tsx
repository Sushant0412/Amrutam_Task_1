"use client";

import { Check, Calendar } from "lucide-react";
import { useState } from "react";

interface TimeSlot {
  time: string;
  isSelected?: boolean;
}

export default function RightHalf() {
  const [selectedMode, setSelectedMode] = useState<
    "in-clinic" | "video" | "chat"
  >("video");
  const [selectedTime, setSelectedTime] = useState<string>("11:00 AM");
  const [selectedDateIndex, setSelectedDateIndex] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(0);

  const modes = [
    { id: "in-clinic", label: "In-Clinic", duration: "45 Mins" },
    { id: "video", label: "Video", duration: "45 Mins" },
    { id: "chat", label: "Chat", duration: "10 Mins" },
  ];

  const morningSlots: TimeSlot[] = [
    { time: "09:00 AM" },
    { time: "09:30 AM" },
    { time: "10:00 AM" },
    { time: "10:15 AM" },
    { time: "10:45 AM" },
    { time: "11:00 AM", isSelected: true },
  ];

  const eveningSlots: TimeSlot[] = [
    { time: "04:00 PM" },
    { time: "04:15 PM" },
    { time: "04:30 PM" },
    { time: "04:45 PM" },
    { time: "05:15 PM" },
  ];

  // Pre-calculate date slots to ensure consistency
  const calculateDateSlots = () => {
    const today = new Date();
    return Array.from({ length: 5 }, (_, i) => {
      const date = new Date();
      date.setDate(today.getDate() + i);
      const slots = i === 0 ? 6 : Math.floor(Math.random() * 12) + 1; // Static for today, random for others
      return {
        date: date.toLocaleDateString("en-US", {
          weekday: "short",
          day: "numeric",
          month: "short",
        }),
        day: date.toLocaleDateString("en-US", { weekday: "short" }),
        slots,
      };
    });
  };

  const dates = calculateDateSlots(); // Initialize date slots once

  const getSlotTextColor = (slots: number) => {
    if (slots < 4) return "text-red-600";
    if (slots < 7) return "text-yellow-600";
    return "text-green-600";
  };

  const datesPerPage = 3;
  const totalPages = Math.ceil(dates.length / datesPerPage);

  const paginatedDates = dates.slice(
    currentPage * datesPerPage,
    currentPage * datesPerPage + datesPerPage
  );

  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-2xl max-w-xl mx-auto border">
      {/* Appointment Fee */}
      <div className="border p-3 rounded-xl flex items-center justify-between mb-6">
        <span className="text-sm sm:text-lg font-medium">Appointment Fee</span>
        <span className="text-sm sm:text-lg text-green-700">₹699.00</span>
      </div>

      {/* Session Modes */}
      <div className="mb-6">
        <h3 className="flex items-center gap-2 text-sm sm:text-base font-medium mb-3">
          Select your mode of session
          <hr className="flex-grow border-gray-300" />
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {modes.map((mode) => (
            <button
              key={mode.id}
              onClick={() => setSelectedMode(mode.id as any)}
              className={`p-2 sm:p-3 rounded-lg text-center ${
                selectedMode === mode.id
                  ? "bg-green-50 border-green-600 border"
                  : "border border-gray-200"
              }`}
            >
              <div className="flex items-center justify-center gap-1">
                {mode.label}
                {selectedMode === mode.id && (
                  <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                )}
              </div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1">
                {mode.duration}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Date Selection */}
      <div className="mb-6">
        <h3 className="flex items-center gap-2 sm:gap-8 text-sm sm:text-base font-medium mb-3">
          Pick a time slot
          <hr className="flex-grow border-gray-300" />
          <Calendar className="w-8 h-8 sm:w-12 sm:h-12 border rounded-full p-2 sm:p-3" />
        </h3>
        <div className="flex items-center gap-2 mb-4">
          {paginatedDates.map((date, index) => (
            <button
              key={date.day}
              onClick={() =>
                setSelectedDateIndex(index + currentPage * datesPerPage)
              }
              className={`p-2 sm:p-3 rounded-lg text-center flex-1 ${
                selectedDateIndex === index + currentPage * datesPerPage
                  ? "border-green-600 border"
                  : "border border-gray-200"
              }`}
            >
              <div className="text-xs sm:text-sm">{date.day}</div>
              <div
                className={`text-xs sm:text-sm ${getSlotTextColor(date.slots)}`}
              >
                {date.slots} slots
              </div>
            </button>
          ))}
        </div>
        <div className="flex justify-between">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
            className="p-2 text-xs sm:text-sm bg-gray-200 rounded-lg disabled:opacity-50"
            disabled={currentPage === 0}
          >
            Previous
          </button>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))
            }
            className="p-2 text-xs sm:text-sm bg-gray-200 rounded-lg disabled:opacity-50"
            disabled={currentPage === totalPages - 1}
          >
            Next
          </button>
        </div>
      </div>

      {/* Time Slots */}
      <div className="mb-6">
        <h4 className="text-sm sm:text-base font-medium mb-3">Morning</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
          {morningSlots.map((slot) => (
            <button
              key={slot.time}
              onClick={() => setSelectedTime(slot.time)}
              className={`p-2 sm:p-3 rounded-lg text-center text-xs sm:text-sm ${
                selectedTime === slot.time
                  ? "bg-green-700 text-white"
                  : "border border-gray-200"
              }`}
            >
              {slot.time}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-sm sm:text-base font-medium mb-3">Evening</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
          {eveningSlots.map((slot) => (
            <button
              key={slot.time}
              onClick={() => setSelectedTime(slot.time)}
              className={`p-2 sm:p-3 rounded-lg text-center text-xs sm:text-sm ${
                selectedTime === slot.time
                  ? "bg-green-700 text-white"
                  : "border border-gray-200"
              }`}
            >
              {slot.time}
            </button>
          ))}
        </div>
      </div>

      {/* Appointment Button */}
      <button className="w-full bg-green-700 hover:bg-green-800 text-white py-2 sm:py-3 rounded-lg">
        Make An Appointment
      </button>
    </div>
  );
}
