import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const SocialLogin = () => {
    const {googleLogin} = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const location = useLocation();

    const handleSocialLogin = () =>{
        googleLogin()
        .then(result =>{
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName,
                role: 'tourist',
                status: 'Verified',
            }
            axiosPublic.post('/users',userInfo)
            .then(res =>{
                toast.success("Logged In Successfully");
                const redirectPath = location.state?.from?.pathname || '/';
                navigate(redirectPath);
            })
        })
        .catch(error => {
            console.error(error);
            toast.error("Failed to login with Google");
        });
    }

    return (
        <div className="w-full mt-6">
           <div className="relative flex items-center justify-center w-full my-6 border-t border-gray-200">
               <span className="absolute bg-white px-4 text-xs text-gray-400 font-bold uppercase tracking-widest">Or continue with</span>
           </div>
           <button 
             onClick={handleSocialLogin} 
             type="button"
             className="w-full flex items-center justify-center gap-3 py-3 px-4 border-2 border-gray-100 rounded-[20px] text-brand-dark font-bold hover:bg-gray-50 hover:border-gray-200 transition-all duration-300 shadow-sm bg-white"
           >
             <FcGoogle size={24} />
             <span>Google</span>
           </button>
        </div>
    );
};

export default SocialLogin;