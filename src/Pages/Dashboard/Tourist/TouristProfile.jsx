import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { motion } from "framer-motion";
import { useState } from "react";

const TouristProfile = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setImagePreview(URL.createObjectURL(file));
    } else {
      setSelectedFile(null);
      setImagePreview(null);
    }
  };

  const handleStory = async (e) => {
    e.preventDefault();
    if (!selectedFile) {
      toast.error("Please select an image for your story.");
      return;
    }
    
    setUploading(true);
    const form = e.target;
    const title = form.title.value;
    const story = form.story.value;
    const name = user?.displayName;
    const profilePicture = user?.photoURL;
    const email = user?.email;
    const timestamp = new Date();

    try {
      const imgBBKey = import.meta.env.VITE_IMGBB_API_KEY;
      if (!imgBBKey) {
          toast.error("ImgBB API key is missing in environment variables.");
          setUploading(false);
          return;
      }
      
      const formData = new FormData();
      formData.append('image', selectedFile);
      const imgRes = await axiosPublic.post(`https://api.imgbb.com/1/upload?key=${imgBBKey}`, formData);
      const imageUrl = imgRes.data.data.display_url;

      const storyData = {
        imageUrl,
        title,
        story,
        name,
        profilePicture,
        email,
        timestamp,
      };

      const storyRes = await axiosSecure.post("/story", storyData);
      if (storyRes.data.insertedId) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Story Published Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
        setImagePreview(null);
        setSelectedFile(null);
      } else {
        toast.error("Failed to publish story");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while publishing");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Shadow Tourist || Tourist Profile</title>
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-serif font-bold text-brand-primary">My Profile</h1>
        <p className="text-gray-500 mt-2">Manage your account details and share your travel experiences.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-1 bg-white rounded-[30px] overflow-hidden shadow-sm border border-gray-100 h-fit"
        >
          <div className="h-40 bg-brand-dark w-full relative">
            <img 
              src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Cover" 
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent"></div>
          </div>
          <div className="px-6 pb-8 relative">
            <div className="flex justify-center -mt-16 mb-4">
              <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg overflow-hidden bg-white relative z-10">
                <img
                  alt="profile"
                  src={user?.photoURL || "https://ui-avatars.com/api/?name=User&background=random"}
                  onError={(e) => { e.target.onerror = null; e.target.src = `https://ui-avatars.com/api/?name=${user?.displayName || 'User'}&background=random` }}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="text-center mb-6 mt-2">
              <span className="px-4 py-1.5 bg-brand-secondary/10 text-brand-secondary font-bold text-xs tracking-widest uppercase rounded-full">
                Explorer
              </span>
              <h2 className="mt-4 text-2xl font-serif font-bold text-brand-dark">{user?.displayName}</h2>
              <p className="text-gray-500 font-medium text-sm mt-1">{user?.email}</p>
            </div>
            
            <div className="border-t border-gray-100 pt-5 mt-5">
              <p className="text-xs text-brand-primary font-bold uppercase tracking-wider mb-1">User ID</p>
              <p className="text-sm font-mono text-gray-500 truncate bg-gray-50 p-2 rounded-lg">{user?.uid}</p>
            </div>
          </div>
        </motion.div>

        {/* Add Story Form */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-2 glass-card rounded-2xl shadow-sm p-8"
        >
          <div className="mb-8 border-b border-gray-100 pb-4">
            <h2 className="text-2xl font-serif font-bold text-brand-primary">Share Your Journey</h2>
            <p className="text-gray-500 mt-2 text-sm">Inspire others by sharing your favorite travel memories.</p>
          </div>
          
          <form onSubmit={handleStory} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">Story Title</label>
                <input
                  name="title"
                  type="text"
                  placeholder="E.g., Sunset in Santorini"
                  className="input input-bordered w-full bg-gray-50 focus:bg-white transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">Story Image</label>
                <input
                  name="image"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="file-input file-input-bordered w-full bg-gray-50 focus:bg-white transition-colors"
                  required
                />
                {imagePreview && (
                  <div className="mt-3 rounded-xl overflow-hidden border border-gray-200 shadow-sm h-32 relative">
                    <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                  </div>
                )}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">Your Story</label>
              <textarea
                name="story"
                placeholder="Tell us about your experience..."
                className="textarea textarea-bordered w-full bg-gray-50 focus:bg-white transition-colors text-base"
                rows="6"
                required
              />
            </div>

            <div className="pt-4">
              <button 
                type="submit" 
                disabled={uploading}
                className="btn-luxury w-full py-4 rounded-xl text-sm font-bold tracking-widest uppercase shadow-md hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {uploading ? 'Publishing...' : 'Publish Story'}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default TouristProfile;
