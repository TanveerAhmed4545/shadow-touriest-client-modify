import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Lottie from "lottie-react";
import loaderAnimation from "../../assets/loader.json";
import { FaCalendarAlt, FaUser } from "react-icons/fa";

const BlogDetails = () => {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  
  const { data: allBlogs = [], isLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/blogs`);
      return res.data;
    },
  });

  const blog = allBlogs.find(b => b._id === id) || {};

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Lottie className="w-1/3 max-w-xs" animationData={loaderAnimation} loop={true} />
      </div>
    );

  return (
    <div className="font-sans w-full overflow-x-hidden bg-brand-light pb-24">
      <Helmet>
        <title>Shadow Tourist || {blog?.title || "Blog Details"}</title>
      </Helmet>

      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center h-[400px] md:h-[600px] flex items-center justify-center"
        style={{
          backgroundImage: `url('${blog?.img || "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"}')`
        }}
      >
        <div className="absolute inset-0 bg-brand-dark bg-opacity-60"></div>
        <div className="relative z-10 text-center text-white mt-16 px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary/20 backdrop-blur-md rounded-full text-white font-medium mb-6 border border-white/20">
            <FaCalendarAlt />
            {blog?.date || "Recent Post"}
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">{blog?.title}</h1>
          <div className="flex items-center justify-center space-x-3 text-lg font-medium">
            <Link to="/blogs" className="hover:text-brand-primary transition-colors duration-300">Blogs</Link>
            <span className="text-white/60">/</span>
            <span className="text-brand-secondary">Details</span>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="container mx-auto px-5 lg:px-20 -mt-20 relative z-20">
        <div className="bg-white p-8 md:p-16 rounded-[40px] shadow-2xl border border-gray-100 max-w-5xl mx-auto">
          
          <div className="flex items-center gap-4 mb-10 pb-10 border-b border-gray-100">
            <div className="w-14 h-14 bg-brand-secondary/10 rounded-full flex items-center justify-center text-brand-secondary">
              <FaUser size={24} />
            </div>
            <div>
              <p className="font-bold text-brand-dark font-serif text-lg">Admin</p>
              <p className="text-gray-500">Author</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600 leading-loose">
            <p className="whitespace-pre-wrap">{blog?.blog}</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
