import React from "react";
import Navbar from "../Components/Navbar";
import BookAppointment from "../Components/BookAppointment";
import Reviews from "../Components/Reviews";
import Footer from "../Components/Footer";

function ReviewsPage() {
  return (
    <div>
      <Navbar />
      <BookAppointment />
      <Reviews />
      <Footer />
    </div>
  );
}

export default ReviewsPage;