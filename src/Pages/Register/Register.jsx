import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import { FaEyeSlash } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [imagePreview, setImagePreview] = useState(null);
    const [uploading, setUploading] = useState(false);
    const { createUser, setReload } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
     
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const onSubmit = async (data) => {
        if(data.password.length < 6) {
            toast.error("Password should be at least 6 characters or longer");
            return;
        } else if(!/(?=.*[A-Z])(?=.*[a-z])/.test(data.password)) {
            toast.error("Your password should have at least one uppercase and one lowercase character.");
            return;
        }
   
        const imageFile = data.photo[0];
        if (!imageFile) {
            toast.error("Please upload a profile picture.");
            return;
        }

        setUploading(true);
        const formData = new FormData();
        formData.append('image', imageFile);

        try {
            const imgBBKey = import.meta.env.VITE_IMGBB_API_KEY;
            if (!imgBBKey) {
                toast.error("ImgBB API key is missing in environment variables.");
                setUploading(false);
                return;
            }
            
            const res = await axiosPublic.post(`https://api.imgbb.com/1/upload?key=${imgBBKey}`, formData);
            const imageUrl = res.data.data.display_url;

            createUser(data.email, data.password)
            .then(result => {             
                updateProfile(result.user, {
                    displayName: data.name,
                    photoURL: imageUrl
                }).then(() => {
                    const userInfo = {
                        name: data.name,
                        email: data.email,
                        role: 'tourist',
                        status: 'Verified',
                    };
                    
                    axiosPublic.post('/users', userInfo)
                    .then(res => {
                        if(res.data.insertedId) {
                            toast.success("Successfully Registered!");
                            setReload(true);
                            reset();
                            setImagePreview(null);
                            navigate('/');   
                        }
                        setUploading(false);
                    });
                }).catch(error => {
                    console.log(error);
                    toast.error("Failed to update profile details.");
                    setUploading(false);
                });
            })
            .catch(error => {
                if(error) toast.error("Error creating account. Email may already be in use.");
                setUploading(false);
            });
        } catch (error) {
            console.error(error);
            toast.error("Failed to upload image. Please try again.");
            setUploading(false);
        }
    } 

    return (
        <div className="min-h-screen flex bg-brand-light">
            <Helmet>
                <title>Shadow Tourist || Register</title>
            </Helmet>
            
            {/* Left Side: Imagery & Branding */}
            <div className="hidden lg:flex lg:w-5/12 relative bg-brand-dark overflow-hidden">
                <img 
                    src="/regester.avif" 
                    alt="Register Adventure" 
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent"></div>
                
                <div className="relative z-10 p-16 flex flex-col h-full justify-between w-full">
                    <Link to="/" className="flex items-center gap-3">
                        <img className="w-10" src="/logo.png" alt="Logo" />
                        <span className="font-serif text-3xl font-extrabold tracking-wide text-white drop-shadow-lg">Shadow Tourist</span>
                    </Link>
                    
                    <div className="mb-12">
                        <h2 className="text-6xl font-accent text-brand-secondary transform -rotate-2 mb-4 drop-shadow-lg">Join Us</h2>
                        <h1 className="text-4xl font-serif text-white font-bold leading-tight max-w-lg drop-shadow-xl">Begin your journey with a global community.</h1>
                        
                        {/* Floating Feature List */}
                        <div className="mt-12 space-y-4">
                            <div className="flex items-center gap-4 text-white">
                                <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center font-bold text-xs shadow-lg">✓</div>
                                <p className="font-medium drop-shadow-md">Access exclusive tour packages</p>
                            </div>
                            <div className="flex items-center gap-4 text-white">
                                <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center font-bold text-xs shadow-lg">✓</div>
                                <p className="font-medium drop-shadow-md">Connect with expert local guides</p>
                            </div>
                            <div className="flex items-center gap-4 text-white">
                                <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center font-bold text-xs shadow-lg">✓</div>
                                <p className="font-medium drop-shadow-md">Share your incredible stories</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side: Form */}
            <div className="w-full lg:w-7/12 flex items-center justify-center p-8 sm:p-12 bg-white overflow-y-auto">
                <div className="w-full max-w-xl my-auto">
                    <div className="text-center lg:text-left mb-8">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-2">Create an Account</h2>
                        <p className="text-gray-500">Join Shadow Tourist and start exploring today.</p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-sm font-bold text-brand-dark mb-2 ml-2">Full Name</label>
                                <input 
                                    type="text" 
                                    placeholder="John Doe" 
                                    className="w-full px-6 py-4 bg-brand-light border-2 border-transparent focus:border-brand-primary rounded-[20px] outline-none transition-all duration-300 font-medium text-brand-dark placeholder-gray-400" 
                                    {...register("name", { required: true })}
                                />
                                {errors.name && <span className="text-red-500 text-xs font-bold ml-2 mt-1 block">Name is required</span>}
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-brand-dark mb-2 ml-2">Profile Picture</label>
                                <div className="flex items-center gap-4">
                                    {imagePreview ? (
                                        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-brand-primary flex-shrink-0">
                                            <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                                        </div>
                                    ) : (
                                        <div className="w-14 h-14 rounded-full bg-brand-light border-2 border-dashed border-gray-300 flex items-center justify-center flex-shrink-0 text-gray-400">
                                            <IoMdEye size={20} className="opacity-50" />
                                        </div>
                                    )}
                                    <input 
                                        type="file" 
                                        accept="image/*"
                                        className="w-full px-4 py-3 bg-brand-light border-2 border-transparent focus:border-brand-primary rounded-[20px] outline-none transition-all duration-300 font-medium text-brand-dark file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-bold file:bg-brand-primary/10 file:text-brand-primary hover:file:bg-brand-primary/20" 
                                        {...register("photo", { required: true, onChange: handleImageChange })}
                                    />
                                </div>
                                {errors.photo && <span className="text-red-500 text-xs font-bold ml-2 mt-1 block">Photo is required</span>}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-brand-dark mb-2 ml-2">Email Address</label>
                            <input 
                                type="email" 
                                placeholder="hello@example.com" 
                                className="w-full px-6 py-4 bg-brand-light border-2 border-transparent focus:border-brand-primary rounded-[20px] outline-none transition-all duration-300 font-medium text-brand-dark placeholder-gray-400"  
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span className="text-red-500 text-xs font-bold ml-2 mt-1 block">Email is required</span>}
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-brand-dark mb-2 ml-2">Password</label>
                            <div className="relative">
                                <input 
                                    type={showPassword ? 'text' : "password"} 
                                    placeholder="••••••••" 
                                    className="w-full px-6 py-4 bg-brand-light border-2 border-transparent focus:border-brand-primary rounded-[20px] outline-none transition-all duration-300 font-medium text-brand-dark placeholder-gray-400" 
                                    {...register("password", { required: true })}
                                />
                                <button 
                                    type="button"
                                    className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-brand-primary transition-colors"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <FaEyeSlash size={20} /> : <IoMdEye size={20} />}
                                </button>
                            </div>
                            {errors.password && <span className="text-red-500 text-xs font-bold ml-2 mt-1 block">Password is required</span>}
                        </div>
                        
                        <div className="pt-2">
                            <button 
                                type="submit" 
                                disabled={uploading}
                                className="btn-primary w-full py-4 text-lg shadow-xl shadow-brand-primary/30 hover:shadow-brand-primary/50 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {uploading ? 'Uploading & Creating...' : 'Create Account'}
                            </button>
                        </div>
                    </form>

                    <SocialLogin />

                    <p className="text-center mt-8 text-gray-500 font-medium">
                        Already have an account? <Link to="/login" className="text-brand-primary font-bold hover:underline">Log in</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;