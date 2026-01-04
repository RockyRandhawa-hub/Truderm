"use client"
import React, { useState } from 'react';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import Image from 'next/image';
import bookingForm from '../assets/bookignForm.jpg';
export default function AppointmentBooking() {
   const [formData, setFormData] = useState({
  name: "",
  phone: "",
  reason: "",
  date: "",
  time: ""
});

  
const handleSubmit = async () => {
  if (!formData.name || !formData.phone || !formData.reason || !formData.date || !formData.time) {
    alert("Please fill in all fields");
    return;
  }

  const formURL =
    "https://docs.google.com/forms/d/e/1FAIpQLSfQCV4GXmJ0Un4MJg3eJXmTOrYLtCVagrNwT9UcjRY8AWi2Sw/formResponse";

  const data = new FormData();

  // NEW FORM entry IDs
  data.append("entry.505206146", formData.name);
  data.append("entry.1579268769", formData.phone);
  data.append("entry.1117323250", formData.reason);
  data.append("entry.1219616435", formData.date);
  data.append("entry.2043131376", formData.time);

  try {
    await fetch(formURL, {
      method: "POST",
      body: data,
      mode: "no-cors", // REQUIRED for Google Forms
    });

    alert("Appointment booked successfully!");

    setFormData({
      name: "",
      phone: "",
      reason: "",
      date: "",
      time: "",
    });
  } catch (err) {
    alert("Something went wrong. Please try again later.");
  }
};


  return (
    <div className=" bg-white p-8 lg:p-18 pb-0 ml-[10rem]" >
      <div className="max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Form Section */}
          <div className="bg-white rounded-3xl shadow-xl p-10 lg:p-12">
            <div className="mb-8">
              <p className="text-[#B65B6A] font-bold text-md tracking-wider uppercase mb-2">
                BOOK AN
              </p>
              <h1 className="text-5xl font-bold text-[#B65B6A]">
                Appointment
              </h1>
            </div>

            <div className="space-y-6">
              {/* Name and Phone Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#B65B6A] font-semibold text-sm mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3.5 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-[#B65B6A] transition-colors"
                    placeholder="David John"
                  />
                </div>
                <div>
                  <label className="block text-[#B65B6A] font-semibold text-sm mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3.5 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-[#B65B6A] transition-colors"
                    placeholder="(123) 456 - 789"
                  />
                </div>
              </div>

              {/* Reason For Visit */}
              <div>
                <label className="block text-[#B65B6A] font-semibold text-sm mb-2">
                  Reason For Visit
                </label>
                <input
                  type="text"
                  value={formData.reason}
                  onChange={(e) => setFormData({...formData, reason: e.target.value})}
                  className="w-full px-4 py-3.5 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-[#B65B6A] transition-colors"
                  placeholder="Reason for visit"
                />
              </div>

              {/* Date and Time Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#B65B6A] font-semibold text-sm mb-2">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      className="w-full px-4 py-3.5 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-[#B65B6A] transition-colors appearance-none"
                      placeholder="dd/mm/yyyy"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[#B65B6A] font-semibold text-sm mb-2">
                    Preferred Time
                  </label>
                  <div className="relative">
                    <input
                      type="time"
                      value={formData.time}
                      onChange={(e) => setFormData({...formData, time: e.target.value})}
                      className="w-full px-4 py-3.5 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-[#B65B6A] transition-colors appearance-none"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="mt-8 bg-gradient-to-r bg-[#B65B6A] text-white font-semibold px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 group"
              >
                Submit
                <div className="bg-white rounded-full p-1.5 group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4 text-rose-500" />
                </div>
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative hidden lg:block">
            <div className="bg-gradient-to-br from-cyan-100 to-blue-200 rounded-3xl overflow-hidden shadow-xl w-[526px] h-[600px]">
              <Image
                src={bookingForm}
                alt="Professional doctor"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}