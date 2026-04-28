import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { motion } from "framer-motion";

const TouristProfile = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const handleStory = async (e) => {
    e.preventDefault();
    const form = e.target;
    const imageUrl = form.imageUrl.value;
    const title = form.title.value;
    const story = form.story.value;
    const name = user?.displayName;
    const profilePicture = user?.photoURL;
    const email = user?.email;
    const timestamp = new Date();

    const storyData = {
      imageUrl,
      title,
      story,
      name,
      profilePicture,
      email,
      timestamp,
    };

    try {
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
      } else {
        toast.error("Failed to publish story");
      }
    } catch (error) {
      toast.error("An error occurred");
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
          className="lg:col-span-1 glass-card rounded-2xl overflow-hidden shadow-sm h-fit"
        >
          <div className="h-32 bg-brand-primary w-full relative">
            <div className="absolute inset-0 bg-[url('https://i.ibb.co/bFLrQgX/simon-english-48ner-ZQCHgo-unsplash-1.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
          </div>
          <div className="px-6 pb-6 relative">
            <div className="flex justify-center -mt-12 mb-4">
              <img
                alt="profile"
                src={user?.photoURL || "https://i.ibb.co/v3n5428/placeholder-avatar.jpg"}
                className="object-cover rounded-full h-24 w-24 border-4 border-white shadow-md bg-white"
              />
            </div>
            
            <div className="text-center mb-6">
              <span className="px-3 py-1 bg-brand-secondary/20 text-brand-secondary font-semibold text-xs tracking-widest uppercase rounded-full">
                Tourist
              </span>
              <h2 className="mt-4 text-xl font-bold text-brand-primary">{user?.displayName}</h2>
              <p className="text-gray-500 text-sm mt-1">{user?.email}</p>
            </div>
            
            <div className="border-t border-gray-100 pt-4 mt-4">
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">User ID</p>
              <p className="text-sm font-mono text-gray-600 truncate">{user?.uid}</p>
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
                <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">Image URL</label>
                <input
                  name="imageUrl"
                  type="url"
                  placeholder="https://example.com/image.jpg"
                  className="input input-bordered w-full bg-gray-50 focus:bg-white transition-colors"
                  required
                />
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
              <button type="submit" className="btn-luxury w-full py-4 rounded-xl text-sm font-bold tracking-widest uppercase shadow-md hover:shadow-lg transition-all">
                Publish Story
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default TouristProfile;
