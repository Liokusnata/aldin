import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import Navbar from "../Components/Navbar";
import Info from "../Components/Info";
import Footer from "../Components/Footer";


function ServicesPage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        const offset = 80; // Sesuaikan dengan tinggi Navbar
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth',
        });
      }
    }
  }, [hash]);

  return (
    <div>
      <Navbar />
      <Info />
      <Footer />
    </div>
  );
}

export default ServicesPage;