import toast from "react-hot-toast";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";
import { FaUserShield, FaCheckCircle, FaPaperPlane } from "react-icons/fa";

const RequestToAdmin = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    
    const handleForm = async (e) => {
        e.preventDefault();
        try {
            const currentUser = {
                email: user?.email,
                role: 'tourist',
                status: 'Requested',
            }
            const { data } = await axiosPublic.put(`/user`, currentUser)
            if (data.modifiedCount > 0) {
                toast.success("Success! Application sent. Please wait for admin confirmation.")
            } else {
                toast.success("Application already pending. Please wait for admin approval.")
            }
        } catch (err) {
            console.error(err);
            toast.error(err.message)
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-[75vh] w-full">
            <Helmet>
                <title>Shadow Tourist || Become a Guide</title>
            </Helmet>

            <div className="w-full max-w-2xl bg-white rounded-[30px] shadow-sm border border-gray-100 overflow-hidden relative">
                {/* Decorative header background */}
                <div className="h-32 bg-gradient-to-r from-brand-primary to-brand-secondary relative">
                    <div className="absolute inset-0 bg-white/20 opacity-50"></div>
                </div>

                {/* Content */}
                <div className="px-8 pb-10 pt-14 relative">
                    {/* Icon */}
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg absolute -top-10 left-1/2 transform -translate-x-1/2 border-4 border-white">
                        <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center text-brand-primary text-2xl">
                            <FaUserShield />
                        </div>
                    </div>

                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-serif font-bold text-brand-dark mb-3">Become a Tour Guide</h2>
                        <p className="text-gray-500 font-medium">Join our global community of adventurers and start leading unforgettable experiences.</p>
                    </div>

                    <div className="bg-brand-light rounded-2xl p-6 mb-8 border border-gray-100">
                        <h3 className="font-bold text-brand-dark mb-4 uppercase tracking-wider text-sm">Terms & Requirements</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <FaCheckCircle className="text-brand-primary mt-1 flex-shrink-0" />
                                <span className="text-gray-600 text-sm font-medium">You must agree to uphold the safety guidelines and standards of Shadow Tourist.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <FaCheckCircle className="text-brand-primary mt-1 flex-shrink-0" />
                                <span className="text-gray-600 text-sm font-medium">Your profile information will be reviewed manually by an administrator.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <FaCheckCircle className="text-brand-primary mt-1 flex-shrink-0" />
                                <span className="text-gray-600 text-sm font-medium">Once approved, you will have access to create and manage tour packages.</span>
                            </li>
                        </ul>
                    </div>

                    <form onSubmit={handleForm} className="flex justify-center mt-6">
                        <button
                            type="submit"
                            className="btn-primary flex items-center gap-2 py-4 px-10 text-lg shadow-xl shadow-brand-primary/30 hover:shadow-brand-primary/50 transform hover:-translate-y-1 transition-all"
                        >
                            <FaPaperPlane /> Submit Application
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RequestToAdmin;