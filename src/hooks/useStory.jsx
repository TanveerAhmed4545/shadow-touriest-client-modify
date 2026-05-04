import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useStory = () => {
    const axiosPublic = useAxiosPublic();
    const {data: stories = [], isLoading} = useQuery({
        queryKey: ['stories'],
        queryFn: async()=>{
            console.log("Fetching stories from:", axiosPublic.defaults.baseURL + '/story');
            const res = await axiosPublic.get('/story');
            console.log("Story response status:", res.status);
            console.log("Story data length:", res.data?.length);
            return res.data;
        }
    })


    return [stories,isLoading]
};

export default useStory;