import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import { FaBoxOpen, FaImage, FaMapMarkedAlt, FaDollarSign, FaListAlt } from "react-icons/fa";

const AddPackage = () => {
  const axiosSecure = useAxiosSecure();

  const handleSubmit = async (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      
      const tripTitle = formData.get('tripTitle');
      const tourType = formData.get('tourType');
      const price = formData.get('price');
      const description = formData.get('description');
      const wishlist = false;
      const images = [
          formData.get('image1'),
          formData.get('image2'),
          formData.get('image3')
      ];
      const tourPlan = [
          { day: formData.get('day1'), activities: formData.get('activities1') },
          { day: formData.get('day2'), activities: formData.get('activities2') },
          { day: formData.get('day3'), activities: formData.get('activities3') },
          { day: formData.get('day4'), activities: formData.get('activities4') }
      ];
      
      const packageItems = {
          tripTitle,
          tourType,
          price: parseFloat(price),
          description,
          wishlist,
          images,
          tourPlan
      }

      const packRes = await axiosSecure.post('/package', packageItems)
      if(packRes.data.insertedId){
          Swal.fire({
              position: "center",
              icon: "success",
              title: "Package Added to Database",
              showConfirmButton: false,
              timer: 1500,
              customClass: {
                popup: 'rounded-3xl'
              }
          });
          form.reset();
      }
  };

  return (
      <div className="bg-[#FDFBF7] min-h-screen py-10 px-4 sm:px-6 lg:px-8 font-sans">
        <Helmet>
          <title>Shadow Tourist || Add Package</title>
        </Helmet>
        
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold font-serif text-[#145d5e] mb-3">Create New Package</h2>
            <p className="text-gray-500">Design a new immersive travel experience for your clients.</p>
          </div>

          {/* Form Container */}
          <div className="bg-white rounded-[30px] p-8 md:p-12 shadow-xl shadow-[#145d5e]/5 border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-10">
              
              {/* Basic Information Section */}
              <section>
                <div className="flex items-center gap-3 mb-6 pb-3 border-b border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-[#E8F3F1] flex items-center justify-center text-[#145d5e]">
                    <FaBoxOpen size={18} />
                  </div>
                  <h3 className="text-xl font-bold text-[#145d5e]">Basic Information</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Trip Title</label>
                    <input 
                      type="text" 
                      name="tripTitle" 
                      placeholder="e.g., Mystic Mount Kilimanjaro"
                      required 
                      className="w-full px-4 py-3 bg-[#F8F9FA] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#145d5e] focus:bg-white transition-all text-gray-800 placeholder-gray-400" 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Tour Type</label>
                    <select
                      name="tourType"
                      required
                      className="w-full px-4 py-3 bg-[#F8F9FA] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#145d5e] focus:bg-white transition-all text-gray-800 appearance-none"
                    >
                      <option value="">Select Category</option>
                      <option value="Sports">Sports</option>
                      <option value="Expedition">Expedition</option>
                      <option value="Camping">Camping</option>
                      <option value="wildLife">Wildlife</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1 flex items-center gap-1"><FaDollarSign className="text-gray-400"/> Price</label>
                    <input 
                      type="number" 
                      name="price" 
                      placeholder="Amount in USD"
                      required 
                      className="w-full px-4 py-3 bg-[#F8F9FA] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#145d5e] focus:bg-white transition-all text-gray-800 placeholder-gray-400" 
                    />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Full Description</label>
                    <textarea 
                      name="description" 
                      rows="4"
                      placeholder="Describe the adventure, accommodations, and unique selling points..."
                      required 
                      className="w-full px-4 py-3 bg-[#F8F9FA] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#145d5e] focus:bg-white transition-all text-gray-800 placeholder-gray-400 resize-none"
                    ></textarea>
                  </div>
                </div>
              </section>

              {/* Media Section */}
              <section>
                <div className="flex items-center gap-3 mb-6 pb-3 border-b border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-[#FFFBF0] flex items-center justify-center text-brand-secondary">
                    <FaImage size={18} />
                  </div>
                  <h3 className="text-xl font-bold text-[#145d5e]">Media & Images</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Main Cover Image URL</label>
                    <input 
                      type="url" 
                      name="image1" 
                      placeholder="https://..."
                      required 
                      className="w-full px-4 py-3 bg-[#F8F9FA] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#145d5e] focus:bg-white transition-all text-gray-800 placeholder-gray-400 text-sm" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Gallery Image 2 URL</label>
                    <input 
                      type="url" 
                      name="image2" 
                      placeholder="https://..."
                      required 
                      className="w-full px-4 py-3 bg-[#F8F9FA] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#145d5e] focus:bg-white transition-all text-gray-800 placeholder-gray-400 text-sm" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Gallery Image 3 URL</label>
                    <input 
                      type="url" 
                      name="image3" 
                      placeholder="https://..."
                      required 
                      className="w-full px-4 py-3 bg-[#F8F9FA] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#145d5e] focus:bg-white transition-all text-gray-800 placeholder-gray-400 text-sm" 
                    />
                  </div>
                </div>
              </section>

              {/* Itinerary Section */}
              <section>
                <div className="flex items-center gap-3 mb-6 pb-3 border-b border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-[#E8F3F1] flex items-center justify-center text-[#145d5e]">
                    <FaMapMarkedAlt size={18} />
                  </div>
                  <h3 className="text-xl font-bold text-[#145d5e]">Tour Itinerary</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[1, 2, 3, 4].map((dayNum) => (
                    <div key={dayNum} className="bg-[#F8F9FA] p-5 rounded-2xl border border-gray-200 hover:border-[#145d5e]/30 transition-colors">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="bg-[#145d5e] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">{dayNum}</div>
                        <h4 className="font-bold text-gray-800">Day {dayNum}</h4>
                      </div>
                      <div className="space-y-3">
                        <input 
                          type="number" 
                          name={`day${dayNum}`} 
                          placeholder="Day Number" 
                          defaultValue={dayNum}
                          required 
                          className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#145d5e] text-sm text-gray-800" 
                        />
                        <input 
                          type="text" 
                          name={`activities${dayNum}`} 
                          placeholder="Activities planned..." 
                          required 
                          className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#145d5e] text-sm text-gray-800" 
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Submit */}
              <div className="pt-6">
                <button 
                  type="submit" 
                  className="w-full bg-[#145d5e] text-white font-bold text-lg py-4 rounded-full hover:bg-brand-secondary transition-colors duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 flex justify-center items-center gap-2"
                >
                  <FaListAlt /> Publish Package
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
  );
};

export default AddPackage;