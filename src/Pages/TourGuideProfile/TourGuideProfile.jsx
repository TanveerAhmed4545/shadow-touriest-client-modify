import { Helmet } from "react-helmet-async";
import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Lottie from "lottie-react";
import loaderAnimation from "../../assets/loader.json";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useReviews from "../../hooks/useReviews";
import ReviewCard from "./ReviewCard";
import { FaEnvelope, FaPhoneAlt, FaGraduationCap, FaBriefcase, FaPaperPlane } from "react-icons/fa";

const TourGuideProfile = () => {
   const [reviews,,refetch] = useReviews(); 
  const { id } = useParams();
  const {user} = useAuth();
  const location = useLocation();
  const axiosPublic = useAxiosPublic();
  const {
    data: guideDetails = {},
    isPending: loading,
  } = useQuery({
    queryKey: ["guideDetails"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/guide/${id}`);
      return res.data;
    },
  });

  const {
    _id,
    email,
    phone,
    education,
    skills,
    workExperience,
    profilePicture,
    name,
  } = guideDetails;

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const form = e.target;
    const guideId = _id;
    const userRating = form.rating.value;
    const userComment = form.comment.value;
    const userName = user?.displayName;
    const userPhoto = user?.photoURL;
    const timestamp = new Date();

    const reviewData = {
        userName,guideId,userRating,userComment,timestamp,userPhoto
    }

    try {
        const {data} =  await axiosPublic.post('/reviews', reviewData);
         if(data.insertedId){
            Swal.fire({
                title: "Success!",
                text: "Review submitted successfully",
                icon: "success",
                confirmButtonText: "Done",
              });
              refetch();
              form.reset();
         }
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to submit review',
        });
      }
   }

   const reviewData = reviews?.filter(item => item.guideId === _id) || [];

  if (loading || !guideDetails)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Lottie className="w-1/3 max-w-xs" animationData={loaderAnimation} loop={true} />
      </div>
    );

  return (
    <div className="font-sans w-full overflow-x-hidden bg-brand-light">
      <Helmet>
        <title>Shadow Tourist || {name ? `${name}'s Profile` : 'Guide Profile'}</title>
      </Helmet>

      {/* 1. Hero Section */}
      <div 
        className="relative bg-cover bg-center h-[400px] md:h-[500px] flex items-center justify-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-brand-dark bg-opacity-60"></div>
        <div className="relative z-10 text-center text-white mt-16 px-4">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Guide Profile</h1>
          <div className="flex items-center justify-center space-x-3 text-lg font-medium">
            <Link to="/" className="hover:text-brand-primary transition-colors duration-300">Home</Link>
            <span className="text-white/60">/</span>
            <span className="text-brand-secondary">Team Details</span>
          </div>
        </div>
      </div>

      {/* 2. Profile Details Section */}
      <div className="container mx-auto px-5 lg:px-20 -mt-20 relative z-20 mb-24">
        <div className="bg-white p-6 md:p-12 rounded-[40px] shadow-xl border border-gray-100 flex flex-col lg:flex-row gap-12">
          
          {/* Left: Image */}
          <div className="lg:w-2/5">
            <img 
              src={profilePicture} 
              alt={name} 
              className="w-full h-[500px] object-cover rounded-[30px] shadow-lg" 
            />
          </div>

          {/* Right: Info */}
          <div className="lg:w-3/5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary/10 rounded-full text-brand-primary font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-brand-secondary"></span>
                Expert Guide
              </div>
              <h2 className="text-4xl font-serif font-bold text-brand-dark mb-4">{name}</h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                Passionate about sharing the beauty of the world. With years of experience and deep local knowledge, {name} ensures every journey is safe, educational, and absolutely unforgettable.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center gap-4 p-4 bg-brand-light rounded-[20px]">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-secondary shadow-sm">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-bold">Email</p>
                  <p className="text-brand-dark font-medium truncate w-32 md:w-auto" title={email}>{email}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-brand-light rounded-[20px]">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-secondary shadow-sm">
                  <FaPhoneAlt size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-bold">Phone</p>
                  <p className="text-brand-dark font-medium">{phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-brand-light rounded-[20px]">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-primary shadow-sm">
                  <FaGraduationCap size={22} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-bold">Education</p>
                  <p className="text-brand-dark font-medium">{education}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-brand-light rounded-[20px]">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-primary shadow-sm">
                  <FaBriefcase size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-bold">Experience</p>
                  <p className="text-brand-dark font-medium">{workExperience}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-brand-dark mb-4">Specialized Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills?.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="px-6 py-2 bg-brand-primary/10 text-brand-primary font-bold rounded-full border border-brand-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 3. Reviews Section */}
      <div className="container mx-auto px-5 lg:px-20 mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-dark">Traveler Reviews</h2>
        </div>
        
        {reviewData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviewData.map(item => <ReviewCard key={item._id} item={item}></ReviewCard>)}
          </div>
        ) : (
          <div className="bg-white p-10 rounded-[30px] text-center border border-gray-100 shadow-sm">
            <p className="text-gray-500 text-lg">No reviews yet. Be the first to share your experience!</p>
          </div>
        )}
      </div>

      {/* 4. Add Review Form */}
      <div className="bg-white py-24 border-t border-gray-100">
        <div className="container mx-auto px-5 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Left Side: Copy/Graphic */}
            <div className="lg:w-2/5 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-secondary/10 rounded-full text-brand-secondary font-medium mb-2">
                <span className="w-2 h-2 rounded-full bg-brand-secondary"></span>
                Share Your Experience
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark leading-tight">
                How was your journey with {name}?
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                Your feedback helps other travelers choose the perfect guide and helps us continue to provide unforgettable adventures. We'd love to hear about your experience!
              </p>
            </div>

            {/* Right Side: Form */}
            <div className="lg:w-3/5 w-full bg-white p-8 md:p-12 rounded-[40px] shadow-2xl shadow-gray-200/50 border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Rating component using DaisyUI */}
                <div>
                  <label className="block text-sm font-bold text-brand-dark mb-4 uppercase tracking-wider">Overall Rating</label>
                  <div className="rating rating-lg gap-2">
                    <input type="radio" name="rating" value="1" className="mask mask-star-2 bg-brand-secondary transition-transform hover:scale-110" />
                    <input type="radio" name="rating" value="2" className="mask mask-star-2 bg-brand-secondary transition-transform hover:scale-110" />
                    <input type="radio" name="rating" value="3" className="mask mask-star-2 bg-brand-secondary transition-transform hover:scale-110" />
                    <input type="radio" name="rating" value="4" className="mask mask-star-2 bg-brand-secondary transition-transform hover:scale-110" />
                    <input type="radio" name="rating" value="5" className="mask mask-star-2 bg-brand-secondary transition-transform hover:scale-110" defaultChecked />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-brand-dark mb-3 uppercase tracking-wider">Your Review</label>
                  <textarea
                    name="comment"
                    required
                    rows="6"
                    placeholder="Tell us what made this trip special..."
                    className="w-full bg-brand-light/50 p-5 rounded-[20px] outline-none focus:ring-2 focus:ring-brand-primary focus:bg-white transition-all border border-gray-200 resize-none text-lg"
                  />
                </div>

                <div className="pt-2">
                  {!user ? (
                    <NavLink to="/login" state={{from: location}} replace>
                      <button type="button" className="btn-secondary w-full py-4 text-lg shadow-lg shadow-brand-secondary/30 flex items-center justify-center gap-3">
                        Login to Submit Review
                      </button>
                    </NavLink>
                  ) : (
                    <button type="submit" className="btn-primary w-full py-4 text-lg shadow-lg shadow-brand-primary/30 flex items-center justify-center gap-3 group">
                      Publish Review <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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

export default TourGuideProfile;
