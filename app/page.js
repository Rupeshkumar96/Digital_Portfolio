"use client";

import AOS from "aos";
import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import Navbar1 from "./component/Navbar1";
import Homepage from "./component/Homepage";
import About from "./component/About";
import Contact from "./component/Contact";


import RecentProject from "./component/RecentProject1";
import Footer from "./component/Footer";
import Skill from "./component/Skill";
import Certification from "./component/certifications ";
import HeroSection from "./component/HeroSection";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <div className="bg-[#0a0f1a] overflow-x-hidden">
        <Navbar1 />
        <HeroSection/>
        {/* <Homepage /> */}
        <About />
        <Skill/>
        
        <RecentProject />
        <Certification />
        <Contact />
        <Footer />
      </div>
      {/* <Login /> */}
    </>
  );
}

// bg-[#0a0f1a]
