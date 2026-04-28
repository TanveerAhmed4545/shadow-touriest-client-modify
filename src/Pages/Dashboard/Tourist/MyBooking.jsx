import useWindowSize from 'react-use/lib/useWindowSize';
import Lottie from "lottie-react";
import loaderAnimation from "../../../assets/loader.json";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import ReactConfetti from 'react-confetti';
import { motion } from "framer-motion";
import { BsCalendar2Check, BsPersonBadge, BsTrash, BsCreditCard } from "react-icons/bs";

const MyBooking = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [currentPage, setCurrentPage] = useState(0);

  const { data: booking = [], isLoading, refetch } = useQuery({
    queryKey: ['bookingGetEmail', user?.email, currentPage],
    queryFn: async () => {
      const res = await axiosSecure.get(`/booking-get/${user.email}/?page=${currentPage}`);
      return res.data;
    }
  });

  useEffect(() => {
    if (booking?.length === 4) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 4000);
    }
  }, [booking]);
  
  const { data: totalCount = {}, isLoading: loading } = useQuery({
    queryKey: ['bookingCount', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/bookingCount/${user.email}`);
      return res.data;
    }
  });

  const { count } = totalCount;
  const itemsPerPage = 10;
  const numberOfPages = Math.ceil(count / itemsPerPage) || 0;
  const pages = numberOfPages > 0 ? [...Array(numberOfPages).keys()] : [];

  const handlePrevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < pages.length - 1) setCurrentPage(currentPage + 1);
  };

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Cancel Booking",
      text: "Are you sure you want to cancel this booking? This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#0D2040",
      confirmButtonText: "Yes, Cancel Booking"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const { data } = await axiosSecure.delete(`/booking-delete/${id}`);
          if (data.deletedCount > 0) {
            Swal.fire({
              title: "Cancelled",
              text: "Your booking has been cancelled.",
              icon: "success",
              confirmButtonColor: "#D4AF37"
            });
            refetch(); 
          }
        } catch (error) {
          Swal.fire({
            title: "Error!",
            text: "Failed to cancel booking. Please try again later.",
            icon: "error"
          });
        }
      }
    });
  };

  if (isLoading || loading) return (
    <div className="flex justify-center items-center h-64">
      <Lottie className="w-48" animationData={loaderAnimation} loop={true} />
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto flex flex-col min-h-[80vh]">
      {showConfetti && <ReactConfetti width={width} height={height} />}
      <Helmet>
        <title>Shadow Tourist || My Bookings</title>
      </Helmet>
      
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-serif font-bold text-brand-primary">My Bookings</h1>
          <p className="text-gray-500 mt-2">Manage your upcoming trips and adventures.</p>
        </div>
      </div>

      {booking.length === 0 ? (
        <div className="text-center py-20 glass-card rounded-2xl">
          <BsCalendar2Check className="mx-auto text-6xl text-gray-300 mb-4" />
          <h3 className="text-xl font-bold text-gray-600 mb-2">No Bookings Found</h3>
          <p className="text-gray-400 mb-6">Looks like you haven&apos;t booked any adventures yet.</p>
          <Link to="/">
            <button className="btn-outline-luxury px-8 py-2 rounded-full text-sm font-semibold tracking-widest uppercase">
              Explore Packages
            </button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {booking.map((book) => (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              key={book._id} 
              className="glass-card rounded-2xl p-6 flex flex-col hover:shadow-lg transition-shadow duration-300 border border-gray-100 bg-white"
            >
              <div className="flex justify-between items-start mb-4 pb-4 border-b border-gray-100">
                <div>
                  <h3 className="text-xl font-serif font-bold text-brand-primary line-clamp-1">{book.packageName}</h3>
                  <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                    <BsPersonBadge />
                    <span>Guide: <span className="font-semibold text-brand-dark">{book.tourGuideName}</span></span>
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-2xl font-bold text-brand-secondary">${book.price}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <img src={book.image || "https://i.ibb.co/v3n5428/placeholder-avatar.jpg"} alt="Guide" className="w-12 h-12 rounded-full object-cover border border-gray-200" />
                <div>
                  <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full ${
                    book.status === 'Accepted' ? 'bg-green-100 text-green-700' :
                    book.status === 'Rejected' ? 'bg-red-100 text-red-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    {book.status}
                  </span>
                </div>
              </div>

              <div className="mt-auto flex gap-3 pt-4 border-t border-gray-100">
                <button
                  disabled={book?.status === 'Accepted' || book?.status === 'Rejected'}
                  onClick={() => handleDelete(book._id)}
                  className="flex-1 btn btn-ghost bg-red-50 text-red-600 hover:bg-red-100 border border-red-100 rounded-xl flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
                >
                  <BsTrash /> Cancel
                </button>
                
                <Link to={`/dashboard/payment/${book?._id}`} className="flex-1">
                  <button 
                    disabled={book?.status !== 'Accepted'}
                    className="w-full btn btn-ghost bg-brand-primary text-white hover:bg-brand-dark rounded-xl flex items-center justify-center gap-2 transition-colors disabled:opacity-50 disabled:bg-gray-200 disabled:text-gray-400"
                  >
                    <BsCreditCard /> Pay Now
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      )}
           
      {pages.length > 1 && (
        <div className="flex justify-center items-center gap-2 py-8 mt-auto">
          <button onClick={handlePrevPage} disabled={currentPage === 0} className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-200 hover:bg-gray-50 disabled:opacity-50 text-gray-500">
            &laquo;
          </button>
          {pages.map((page, idx) => (
            <button
              onClick={() => setCurrentPage(page)}
              key={idx} 
              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                currentPage === page ? 'bg-brand-primary text-white shadow-md' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              {page + 1}
            </button>
          ))}
          <button onClick={handleNextPage} disabled={currentPage === pages.length - 1} className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-200 hover:bg-gray-50 disabled:opacity-50 text-gray-500">
            &raquo;
          </button>
        </div>
      )}
    </div>
  );
};

export default MyBooking;