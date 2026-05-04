import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const usePackage = () => {
    const axiosPublic = useAxiosPublic();
    const {data: packages = [],isPending: loading,refetch} = useQuery({
        queryKey: ['packages'],
        queryFn: async()=>{
            console.log("Fetching packages from:", axiosPublic.defaults.baseURL + '/package');
            const res = await axiosPublic.get('/package');
            console.log("Package response status:", res.status);
            console.log("Package data length:", res.data?.length);
            return res.data;
        }
    })


    return [packages,loading,refetch]
};

export default usePackage;