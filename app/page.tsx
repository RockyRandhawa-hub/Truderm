import Image from "next/image";
import Header from "./component/Header";
import AboutAndTreatments from "./component/AboutAndTreatments";
import TestimonialsComponent from "./component/TestimonialsComponent";
import Blogs from "./component/Blogs";
import FAQSection from "./component/FAQSection";
import { Book } from "lucide-react";
import AppointmentBooking from "./component/AppointmentBooking";
import Footer from "./component/Footer";
import { SocialShareSidebar } from "./component/SocialShareSidebar";
import BeforeAfterGallery from "./component/BeforeAfterGallery/BeforeAfterGallery";

export default function Home() {
  return (

      <div>
        <Header />
        <SocialShareSidebar />
        <AboutAndTreatments />
        {/* <Landing /> */}
        <TestimonialsComponent />
        <Blogs />
        <FAQSection />
        <AppointmentBooking />
        <BeforeAfterGallery />
        <Footer />
        
      </div>
  );
}
