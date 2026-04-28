import StoryCard from "./StoryCard";
import Lottie from "lottie-react";
import loaderAnimation from "../../../assets/loader.json";
import useStory from "../../../hooks/useStory";

const OurStory = () => {
    const [stories, isLoading] = useStory();

  if (isLoading)
    return (
      <div className="flex justify-center items-center py-20 bg-white">
        <Lottie className="w-48" animationData={loaderAnimation} loop={true} />
      </div>
    );

  return (
    <div className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-accent text-brand-secondary opacity-5 text-8xl md:text-[150px] whitespace-nowrap z-0 pointer-events-none">Travel Blog</div>
          <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-accent text-brand-secondary inline-block mr-2 transform -rotate-3">Explore</h2>
              <h2 className="text-4xl md:text-5xl font-serif text-brand-dark font-bold inline-block leading-tight mt-2">Our News</h2>
              <p className="text-gray-500 mt-4 max-w-lg mx-auto text-sm leading-relaxed">
                Dive into captivating stories from fellow explorers. Discover inspiring tales, hidden gems, and share your own unforgettable journeys.
              </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {stories.slice(0, 4).map((item) => (
            <StoryCard key={item._id} item={item}></StoryCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurStory;
