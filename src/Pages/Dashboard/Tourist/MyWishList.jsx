import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import loaderAnimation from "../../../assets/loader.json";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { motion } from "framer-motion";
import { BsHeartFill, BsTrash, BsArrowRight } from "react-icons/bs";

const MyWishList = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: wishlists = [], isLoading, refetch } = useQuery({
    queryKey: ['wishlists', user?.email, currentPage],
    queryFn: async () => {
      const res = await axiosSecure.get(`/wishlist/${user.email}/?page=${currentPage}`);
      return res.data;
    }
  });

  const { data: totalCount = {}, isLoading: loading } = useQuery({
    queryKey: ['wishlistCount', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/wishlistCount/${user.email}`);
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
      title: "Remove from Wishlist?",
      text: "Are you sure you want to remove this item?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#0D2040",
      confirmButtonText: "Yes, remove it"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const { data } = await axiosSecure.delete(`/wishlist-delete/${id}`);
          if (data.deletedCount > 0) {
            Swal.fire({
              title: "Removed!",
              text: "Item has been removed from your wishlist.",
              icon: "success",
              confirmButtonColor: "#D4AF37"
            });
            refetch(); 
          }
        } catch (error) {
          Swal.fire({
            title: "Error!",
            text: "Failed to remove item. Please try again later.",
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
      <Helmet>
        <title>Shadow Tourist || My Wishlist</title>
      </Helmet>
      
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-serif font-bold text-brand-primary flex items-center gap-3">
            <BsHeartFill className="text-red-500" /> My Wishlist
          </h1>
          <p className="text-gray-500 mt-2">Saved destinations you want to explore later.</p>
        </div>
      </div>

      {wishlists.length === 0 ? (
        <div className="text-center py-20 glass-card rounded-2xl">
          <BsHeartFill className="mx-auto text-6xl text-gray-300 mb-4" />
          <h3 className="text-xl font-bold text-gray-600 mb-2">Your wishlist is empty</h3>
          <p className="text-gray-400 mb-6">Find your dream destination and add it to your wishlist.</p>
          <Link to="/">
            <button className="btn-outline-luxury px-8 py-2 rounded-full text-sm font-semibold tracking-widest uppercase">
              Explore Packages
            </button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {wishlists.map((wish) => (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              key={wish._id} 
              className="glass-card rounded-2xl p-6 flex flex-col hover:shadow-xl transition-all duration-300 border border-gray-100 bg-white group"
            >
              <div className="mb-4">
                <span className="px-3 py-1 bg-brand-secondary/10 text-brand-secondary text-xs font-bold uppercase tracking-wider rounded-full">
                  {wish.tourType}
                </span>
              </div>
              
              <h3 className="text-xl font-serif font-bold text-brand-primary mb-2 line-clamp-2 min-h-[56px] group-hover:text-brand-secondary transition-colors">
                {wish.tripTitle}
              </h3>
              
              <div className="text-2xl font-bold text-brand-dark mb-6">
                ${wish.price}
              </div>

              <div className="mt-auto flex gap-3 pt-4 border-t border-gray-100">
                <button
                  onClick={() => handleDelete(wish._id)}
                  className="flex-1 btn btn-ghost bg-red-50 text-red-600 hover:bg-red-100 border border-red-100 rounded-xl flex items-center justify-center gap-2 transition-colors"
                  title="Remove from Wishlist"
                >
                  <BsTrash />
                </button>
                
                <Link to={`/package-details/${wish.packageId}`} className="flex-[3]">
                  <button className="w-full btn btn-ghost bg-brand-primary text-white hover:bg-brand-dark rounded-xl flex items-center justify-center gap-2 transition-colors text-sm tracking-wide uppercase">
                    View Package <BsArrowRight />
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

export default MyWishList;