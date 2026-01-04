"use client"
import React, { useState } from "react";
import { Send,Phone,Mail, Map, MapPin } from "lucide-react";
import Footer from "../component/Footer";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo.png";
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    phone:""
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
const handleSubmit = async () => {
  if (!formData.name || !formData.email || !formData.subject || !formData.message) {
    alert("Please fill in all fields");
    return;
  }

  const formURL =
    "https://docs.google.com/forms/d/e/1FAIpQLSeQ5BH1OdgIeTVtW1fcoOsht0ttOCb0MlOrdWv0ClpR6ashGw/formResponse";

  const data = new FormData();
  data.append("entry.608891360", formData.name);
  data.append("entry.1802762795", formData.email);
  data.append("entry.1575088830", formData.subject);
  data.append("entry.1515249708", formData.message);
data.append("entry.1308927329", formData.phone); 

  try {
    await fetch(formURL, {
      method: "POST",
      body: data,
      mode: "no-cors", // REQUIRED
    });

    alert("Message sent successfully!");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  } catch (err) {
    alert("Something went wrong. Please try again later.");
  }
};


  return (
    <div className="max-h-[90vh] bg-[#ED757857]">
{/* <nav>
  <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
    <Image src={logo} alt="Logo" width={150} height={60} />
    <ul className="flex space-x-6 items-center text-sm font-medium">
      <li>
        <Link href="/" className="hover:text-blue-600 cursor-pointer text-md">
          Home
        </Link>
      </li>
      <li>
        <Link href="/about-us" className="hover:text-blue-600 cursor-pointer text-md">
          About
        </Link>
      </li>
      <li>
        <Link href="/blogs" className="hover:text-blue-600 cursor-pointer text-md">
          Blogs
        </Link>
      </li>
      <li>
        <Link href="/treatments" className="hover:text-blue-600 cursor-pointer text-md">
          Treatments
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <button className="px-4 py-1.5 border bg-black rounded-full leading-none text-white hover:bg-white hover:text-black transition text-md">
            Book Appointment
          </button>
        </Link>
      </li>
    </ul>
  </div>
</nav> */}
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="2" fill="#B65B6A" />
          </pattern>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor: '#B65B6A', stopOpacity: 0.3}} />
            <stop offset="100%" style={{stopColor: '#3B82F6', stopOpacity: 0.3}} />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
        
        {/* Floating circles */}
        <circle cx="10%" cy="15%" r="80" fill="url(#grad1)" className="animate-pulse" style={{animationDuration: '4s'}} />
        <circle cx="85%" cy="25%" r="120" fill="url(#grad1)" className="animate-pulse" style={{animationDuration: '5s', animationDelay: '1s'}} />
        <circle cx="90%" cy="75%" r="100" fill="url(#grad1)" className="animate-pulse" style={{animationDuration: '6s', animationDelay: '2s'}} />
        <circle cx="15%" cy="80%" r="90" fill="url(#grad1)" className="animate-pulse" style={{animationDuration: '5s', animationDelay: '1.5s'}} />
        
        {/* Decorative shapes */}
        <path d="M 50 50 Q 100 100 150 50 T 250 50" stroke="#B65B6A" strokeWidth="3" fill="none" opacity="0.3" className="animate-pulse" />
        <path d="M 300 200 Q 350 250 400 200 T 500 200" stroke="#3B82F6" strokeWidth="3" fill="none" opacity="0.3" className="animate-pulse" style={{animationDelay: '2s'}} />
      </svg>

      {/* Abstract geometric shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 border-4 border-pink-300 rounded-full opacity-20 animate-spin" style={{animationDuration: '20s'}}></div>
      <div className="absolute bottom-40 right-20 w-40 h-40 border-4 border-blue-300 rounded-lg opacity-20 animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-pink-200 to-blue-200 rounded-full opacity-10 animate-bounce" style={{animationDuration: '3s'}}></div>
      
      <div className="max-w-6xl mx-auto p-12 pt-20 relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-[#B65B6A]">Contact Us</h1>
        <p className="mb-8 text-[#481E0B] text-lg">Kindly reach us to get the fastest response and treatment</p>

        <div className="bg-[white] max-w-[900px] mx-auto rounded-3xl shadow-2xl border-4 border-[white] p-8 md:p-12 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-pink-200 to-transparent rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-200 to-transparent rounded-full blur-2xl opacity-50"></div>
          
          <div className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group">
                <label className="block text-[#B65B6A] font-bold mb-2 text-sm uppercase tracking-wide">Name</label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="David John"
                    className="w-full px-5 py-4 border-2 border-pink-200 rounded-xl focus:outline-none focus:border-[#B65B6A] focus:ring-4 focus:ring-pink-100 transition-all duration-300 bg-white shadow-sm group-hover:shadow-md"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#B65B6A] to-blue-400 opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none"></div>
                </div>
              </div>

              <div className="group">
                <label className="block text-[#B65B6A] font-bold mb-2 text-sm uppercase tracking-wide">Email</label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@gmail.com"
                    className="w-full px-5 py-4 border-2 border-pink-200 rounded-xl focus:outline-none focus:border-[#B65B6A] focus:ring-4 focus:ring-pink-100 transition-all duration-300 bg-white shadow-sm group-hover:shadow-md"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#B65B6A] to-blue-400 opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none"></div>
                </div>
              </div>
            </div>

            <div className="group">
              <label className="block text-[#B65B6A] font-bold mb-2 text-sm uppercase tracking-wide">Subject</label>
              <div className="relative">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Your subject"
                  className="w-full px-5 py-4 border-2 border-pink-200 rounded-xl focus:outline-none focus:border-[#B65B6A] focus:ring-4 focus:ring-pink-100 transition-all duration-300 bg-white shadow-sm group-hover:shadow-md"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#B65B6A] to-blue-400 opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none"></div>
              </div>
            </div>
             <div className="group">
              <label className="block text-[#B65B6A] font-bold mb-2 text-sm uppercase tracking-wide">Phone Number</label>
              <div className="relative">
                <input
                  type="number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91-XXXXXXXXXX"
                  className="w-full px-5 py-4 border-2 border-pink-200 rounded-xl focus:outline-none focus:border-[#B65B6A] focus:ring-4 focus:ring-pink-100 transition-all duration-300 bg-white shadow-sm group-hover:shadow-md"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#B65B6A] to-blue-400 opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none"></div>
              </div>
            </div>

            <div className="group">
              <label className="block text-[#B65B6A] font-bold mb-2 text-sm uppercase tracking-wide">Message</label>
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  placeholder="Write your message here..."
                  className="w-full px-5 py-4 border-2 border-pink-200 rounded-xl focus:outline-none focus:border-[#B65B6A] focus:ring-4 focus:ring-pink-100 transition-all duration-300 resize-none bg-white shadow-sm group-hover:shadow-md"
                ></textarea>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#B65B6A] to-blue-400 opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none"></div>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={handleSubmit}
                className="bg-gradient-to-r from-[#B65B6A] via-[#9B4D5C] to-[#8B4555] text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3 group relative overflow-hidden"
              >
                <span className="relative z-10">Submit</span>
                <Send size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </button>
            </div>
          </div>
        </div>
      </div>

   <section className="mt-16 mb-24 px-6">
      <h1 className="text-4xl md:text-5xl text-[#B65B6A] font-bold mb-12 ml-[2%]">
        Find Us Here
      </h1>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Phone Card */}
        <div className="group bg-gradient-to-br from-[#ED757836] to-[#F4C4CB66] rounded-full p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-[#B65B6A]/10">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Phone className="w-12 h-12 text-[#B65B6A]" strokeWidth={2.5} />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl text-[#B65B6A] font-bold mb-1">Phone</h3>
              <p className="text-base text-[#8B1A5C] font-semibold">+91-9179260689</p>
            </div>
          </div>
        </div>

        {/* Email Card */}
        <div className="group bg-gradient-to-br from-[#ED757836] to-[#F4C4CB66] rounded-full p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-[#B65B6A]/10">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-12 h-12 text-[#B65B6A]" strokeWidth={2.5} />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl text-[#B65B6A] font-bold mb-1">Email</h3>
              <p className="text-sm text-[#8B1A5C] font-semibold break-all">trudermskinclinic@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Location Card */}
        <div className="group bg-gradient-to-br from-[#ED757836] to-[#F4C4CB66] rounded-full p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-[#B65B6A]/10">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <MapPin className="w-12 h-12 text-[#B65B6A]" strokeWidth={2.5} />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl text-[#B65B6A] font-bold mb-1">Location</h3>
              <p className="text-sm text-[#8B1A5C] font-semibold">302, Lal-chay Badgara Crest</p>
              <p className="text-sm text-[#8B1A5C]">New Palasia, Indore</p>
            </div>
          </div>
        </div>
      </div>
    </section>
      <section className="MapSection " >
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.034457671849!2d75.88346469999999!3d22.726960599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd706fe949a7%3A0xaad31d0e05b39a13!2sTruderm%20Skin%20Clinic%20Indore%20%7C%20Dr.Garvita%20Singh!5e0!3m2!1sen!2sin!4v1765700704876!5m2!1sen!2sin"
  width="85%"
  height="600"
  style={{ border: 0 }}
  className="mb-20 relative left-1/2 transform -translate-x-1/2 border-4  rounded-3xl shadow-2xl"
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>      </section>
      <Footer  />
    </div>
  );
};

export default ContactUs;