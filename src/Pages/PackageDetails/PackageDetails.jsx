import Loader from "../../components/Shared/Loader";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { BsCurrencyDollar } from "react-icons/bs";
import { Link, NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";


import ReactDatePicker from "react-datepicker";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import "react-datepicker/dist/react-datepicker.css";
import useGuide from "../../hooks/useGuide";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import TourGuideCard from "../Home/OurTourGuide/TourGuideCard";
import useBooking from "../../hooks/useBooking";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const PackageDetails = () => {
  const { booking } = useBooking();
  const [tourDate, setTourDate] = useState(new Date());
  const { user } = useAuth();
  const { id } = useParams();
  const [guides] = useGuide();
  const navigate = useNavigate();
  const location = useLocation();

  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const {
    data: details = {},
    isPending: loading,
  } = useQuery({
    queryKey: ["packagesDetails"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/package/${id}`);
      return res.data;
    },
  });

  const firstImage = details?.images?.[0];
  const twoImage = details?.images?.[1];
  const threeImage = details?.images?.[2];
  const allPic = [twoImage, threeImage].filter(Boolean);

  const handleBookNow = async(event) => {
    event.preventDefault();
    const form = event.target;
    const tourGuideName = form.elements.tourGuideName.value;
    const packageName = details?.tripTitle;
    const name = user?.displayName;
    const email = user?.email;
    const image = user?.photoURL;
    const price = details?.price;
    const date = tourDate;
    const status = "In Review";

    const bookingData = {
      tourGuideName,
      packageName,
      name,
      email,
      image,
      price,
      date,
      status
    }

    Swal.fire({
      title: "Confirm Booking",
      text: "Are you ready to embark on this journey?",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#0D2040",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Book it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const bookRes = await axiosSecure.post('/booking-post', bookingData)
          if(bookRes?.data?.insertedId){
            if(booking?.length > 2){
              toast.success("Congratulations! You Got 20% Off as a loyal customer.");
            }
            Swal.fire({
              title: "Booked!",
              text: "Your adventure awaits.",
              icon: "success",
              confirmButtonColor: "#D4AF37"
            });
            navigate('/dashboard/my-booking')
          }
        } catch (err) {
          console.log(err)
        }
      }
    });
  };

  if (loading || !details)
    return (
      <Loader />
    );

  return (
    <div className="bg-brand-light min-h-screen pb-20">
      <Helmet>
        <title>Shadow Tourist || {details?.tripTitle || 'Package Details'}</title>
      </Helmet>

      {/* Immersive Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] w-full">
        <div className="absolute inset-0 bg-brand-dark">
          <img
            src={firstImage || "https://i.ibb.co/GQ4Qp0j/man-helmet-sitting-atv-quad-bike-mountains-1.jpg"}
            alt={details?.tripTitle}
            className="w-full h-full object-cover opacity-70"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 max-w-7xl mx-auto flex flex-col justify-end h-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="px-4 py-1 bg-brand-secondary text-brand-primary font-bold tracking-widest uppercase text-xs rounded-full mb-4 inline-block">
              {details?.tourType}
            </span>
            <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-serif font-bold drop-shadow-lg mb-4 max-w-4xl leading-tight">
              {details?.tripTitle}
            </h1>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Content Area */}
          <div className="lg:w-2/3 space-y-12">
            
            {/* Gallery */}
            {allPic.length > 0 && (
              <section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {allPic.map((pic, idx) => (
                    <div key={idx} className="overflow-hidden rounded-2xl shadow-md h-64 md:h-80">
                      <img className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src={pic} alt={`Gallery Image ${idx+1}`} />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Description */}
            <section className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-3xl font-serif text-brand-primary font-bold mb-6">About This Journey</h2>
              <p className="text-gray-600 font-light leading-relaxed text-lg">
                {details?.description}
              </p>
            </section>

            {/* Itinerary */}
            <section className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-3xl font-serif text-brand-primary font-bold mb-8">Itinerary</h2>
              <div className="space-y-4">
                {details?.tourPlan?.map((day, index) => (
                  <div key={index} className="collapse collapse-plus bg-gray-50 border border-gray-100 rounded-xl">
                    <input type="radio" name="itinerary-accordion" defaultChecked={index === 0} />
                    <div className="collapse-title text-xl font-medium text-brand-primary bg-white rounded-t-xl border-b border-gray-100">
                      <span className="text-brand-secondary font-bold mr-2">Day {day.day}:</span> Plan
                    </div>
                    <div className="collapse-content bg-white pt-4 text-gray-600 font-light rounded-b-xl">
                      <p>{day.activities}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Tour Guides */}
            <section className="pt-4">
              <h2 className="text-3xl font-serif text-brand-primary font-bold mb-8">Meet Your Guides</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {guides.slice(0, 4).map(guide => (
                  <TourGuideCard key={guide._id} guide={guide} />
                ))}
              </div>
              <div className="mt-8 text-center sm:text-left">
                <Link to={'/allGuides'}>
                  <button className="btn-outline-luxury px-8 py-2 rounded-full text-sm tracking-widest uppercase">
                    View All Guides
                  </button>
                </Link>
              </div>
            </section>
          </div>

          {/* Sticky Booking Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-32 glass-card rounded-2xl p-8 bg-white/90">
              <div className="flex items-end gap-1 mb-6 border-b border-gray-200 pb-6">
                <span className="text-gray-500 font-medium mb-2 mr-1">from</span>
                <BsCurrencyDollar className="text-brand-secondary text-2xl mb-2" />
                <span className="text-5xl font-bold text-brand-dark tracking-tight">{details?.price}</span>
              </div>
              
              <h3 className="text-2xl font-serif text-brand-primary font-bold mb-6">Reserve Your Spot</h3>
              
              <form onSubmit={handleBookNow} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wider">Package</label>
                  <input
                    type="text"
                    className="input input-bordered w-full bg-gray-50 text-gray-600 focus:outline-none"
                    value={details?.tripTitle || ''} 
                    readOnly
                  />
                </div>
                
                {user && (
                  <>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wider">Name</label>
                        <input type="text" className="input input-bordered w-full bg-gray-50 text-xs" value={user?.displayName || ''} readOnly />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wider">Email</label>
                        <input type="text" className="input input-bordered w-full bg-gray-50 text-xs" value={user?.email || ''} readOnly />
                      </div>
                    </div>
                  </>
                )}

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wider">Select Date</label>
                  <div className="relative">
                    <ReactDatePicker
                      selected={tourDate}
                      onChange={(date) => setTourDate(date)}
                      className="input input-bordered w-full focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary transition-all"
                      minDate={new Date()}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wider">Select Guide</label>
                  <select name="tourGuideName" className="select select-bordered w-full focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary">
                    {guides.map(guide => (
                      <option key={guide._id} value={guide.name}>{guide.name}</option>
                    ))}
                  </select>
                </div>

                <div className="pt-4">
                  {!user ? (
                    <NavLink to="/login" state={{from: location}} replace>
                      <button type="button" className="w-full btn-luxury py-4 rounded-xl text-sm tracking-widest uppercase">
                        Login to Book
                      </button>
                    </NavLink>
                  ) : (
                    <button type="submit" className="w-full btn-luxury py-4 rounded-xl text-sm tracking-widest uppercase">
                      Confirm Booking
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PackageDetails;
