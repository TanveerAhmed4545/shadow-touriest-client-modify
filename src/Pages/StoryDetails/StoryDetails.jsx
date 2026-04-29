import Loader from "../../components/Shared/Loader";
import { Helmet } from "react-helmet-async";
import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import { FacebookShareButton } from "react-share";
import useAuth from "../../hooks/useAuth";
import { FaFacebookF } from "react-icons/fa";

const StoryDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const location = useLocation();

  const axiosPublic = useAxiosPublic();
  const { data: details = {}, isLoading } = useQuery({
    queryKey: ["storyDetails"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/story/${id}`);
      return res.data;
    },
  });

  if (isLoading)
    return (
      <Loader />
    );

  return (
    <div className="font-sans w-full overflow-x-hidden bg-brand-light pb-24">
      <Helmet>
        <title>Shadow Tourist || {details?.title || "Story Details"}</title>
      </Helmet>
      
      {/* 1. Hero Section */}
      <div 
        className="relative bg-cover bg-center h-[400px] md:h-[600px] flex items-center justify-center"
        style={{
          backgroundImage: `url('${details?.imageUrl || "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"}')`
        }}
      >
        <div className="absolute inset-0 bg-brand-dark bg-opacity-60"></div>
        <div className="relative z-10 text-center text-white mt-16 px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-secondary/80 backdrop-blur-md rounded-full text-white font-bold text-sm uppercase tracking-widest mb-6">
            Travel Story
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            {details?.title}
          </h1>
          <div className="flex items-center justify-center space-x-3 text-lg font-medium">
            <Link to="/allStories" className="hover:text-brand-primary transition-colors duration-300">Stories</Link>
            <span className="text-white/60">/</span>
            <span className="text-brand-secondary">Details</span>
          </div>
        </div>
      </div>

      {/* 2. Reading Layout */}
      <div className="container mx-auto px-5 lg:px-20 -mt-20 relative z-20">
        <div className="bg-white p-8 md:p-16 rounded-[40px] shadow-2xl border border-gray-100 max-w-4xl mx-auto">
          
          {/* Author Header */}
          <div className="flex items-center justify-between gap-4 mb-10 pb-10 border-b border-gray-100">
            <div className="flex items-center gap-4">
              <img
                alt={details?.name}
                src={details?.profilePicture}
                className="object-cover w-16 h-16 rounded-full shadow-md border-2 border-brand-primary"
              />
              <div className="flex flex-col">
                <p className="font-bold text-brand-dark font-serif text-xl">
                  {details?.name}
                </p>
                <span className="text-sm text-gray-500">
                  {moment(details?.timestamp).format('MMMM Do YYYY')}
                </span>
              </div>
            </div>
            
            {/* Share Button Desktop */}
            <div className="hidden md:block">
              {!user ? (
                  <NavLink to="/login" state={{from: location}} replace>
                    <button type="button" className="btn-secondary rounded-full px-6 flex items-center gap-2">
                      <FaFacebookF /> Login to Share
                    </button>
                  </NavLink>
                ) : (
                  <FacebookShareButton url={`https://shadow-tourist.web.app/storyDetails/${details._id}`}>
                    <button className="bg-[#1877F2] hover:bg-[#0c5bc6] transition-colors text-white font-bold py-3 px-6 rounded-full flex items-center gap-2 shadow-lg shadow-blue-500/30">
                       <FaFacebookF /> Share Story
                    </button>  
                  </FacebookShareButton>
                )}
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none text-gray-600 leading-loose">
            <p className="whitespace-pre-wrap">{details?.story}</p>
          </div>
          
          {/* Share Button Mobile */}
          <div className="mt-12 pt-8 border-t border-gray-100 md:hidden flex justify-center">
             {!user ? (
                  <NavLink to="/login" state={{from: location}} replace>
                    <button type="button" className="btn-secondary rounded-full px-6 flex items-center gap-2 w-full justify-center">
                      <FaFacebookF /> Login to Share
                    </button>
                  </NavLink>
                ) : (
                  <FacebookShareButton url={`https://shadow-tourist.web.app/storyDetails/${details._id}`} className="w-full">
                    <button className="bg-[#1877F2] hover:bg-[#0c5bc6] transition-colors text-white font-bold py-3 px-6 rounded-full flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30 w-full">
                       <FaFacebookF /> Share Story
                    </button>  
                  </FacebookShareButton>
                )}
          </div>

        </div>
      </div>
      
    </div>
  );
};

export default StoryDetails;
