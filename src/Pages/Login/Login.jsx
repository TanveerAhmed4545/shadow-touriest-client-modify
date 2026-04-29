import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaEyeSlash, FaQuoteLeft } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { signIn } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        signIn(data.email, data.password)
            .then(result => {
                if (result.user) {
                    toast.success("Login Successfully");
                    navigate(location.state?.from?.pathname || '/');
                }
            })
            .catch(error => {
                if (error) toast.error("Login Error: Email or password incorrect");
            });
    }

    return (
        <div className="min-h-screen flex bg-brand-light">
            <Helmet>
                <title>Shadow Tourist || Login</title>
            </Helmet>

            {/* Left Side: Imagery & Branding */}
            <div className="hidden lg:flex lg:w-1/2 relative bg-brand-dark overflow-hidden">
                <img
                    src="/login.avif"
                    alt="Adventure Login"
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent"></div>

                <div className="relative z-10 p-16 flex flex-col h-full justify-between w-full">
                    <Link to="/" className="flex items-center gap-3">
                        <img className="w-10" src="/logo.png" alt="Logo" />
                        <span className="font-serif text-3xl font-extrabold tracking-wide text-white drop-shadow-lg">Shadow Tourist</span>
                    </Link>

                    <div className="mb-12">
                        <h2 className="text-6xl font-accent text-brand-secondary transform -rotate-2 mb-4 drop-shadow-lg">Welcome Back</h2>
                        <h1 className="text-4xl font-serif text-white font-bold leading-tight max-w-lg drop-shadow-xl">Your next great adventure awaits you.</h1>

                        {/* Floating Testimonial Badge */}
                        <div className="mt-12 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-[30px] max-w-sm shadow-2xl relative">
                            <FaQuoteLeft className="text-brand-primary opacity-50 text-4xl absolute -top-4 -left-2" />
                            <p className="text-white/90 text-sm italic relative z-10 font-medium">"Logging back in is always the start of my next big journey. The community and the packages here are unmatched."</p>
                            <div className="flex items-center gap-3 mt-4">
                                <img src="https://i.pravatar.cc/100?img=33" alt="User" className="w-10 h-10 rounded-full border-2 border-brand-primary" />
                                <div>
                                    <p className="text-white font-bold text-xs">Sarah Jenkins</p>
                                    <p className="text-brand-secondary text-[10px] uppercase tracking-wider font-bold">Explorer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side: Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-24 bg-white">
                <div className="w-full max-w-md">
                    <div className="text-center lg:text-left mb-10">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-2">Sign In</h2>
                        <p className="text-gray-500">Please enter your details to access your account.</p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div>
                            <label className="block text-sm font-bold text-brand-dark mb-2 ml-2">Email Address</label>
                            <input
                                type="email"
                                placeholder="hello@example.com"
                                className="w-full px-6 py-4 bg-brand-light border-2 border-transparent focus:border-brand-primary rounded-[20px] outline-none transition-all duration-300 font-medium text-brand-dark placeholder-gray-400"
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span className="text-red-500 text-xs font-bold ml-2 mt-1 block">This Email field is required</span>}
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
                            {errors.password && <span className="text-red-500 text-xs font-bold ml-2 mt-1 block">This Password field is required</span>}
                        </div>

                        <div className="flex justify-end">
                            <a href="#" className="text-sm font-bold text-brand-primary hover:underline">Forgot password?</a>
                        </div>

                        <button
                            type="submit"
                            className="btn-primary w-full py-4 text-lg shadow-xl shadow-brand-primary/30 hover:shadow-brand-primary/50"
                        >
                            Log In
                        </button>
                    </form>

                    <SocialLogin />

                    <p className="text-center mt-10 text-gray-500 font-medium">
                        Don't have an account? <Link to="/register" className="text-brand-primary font-bold hover:underline">Sign up</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;