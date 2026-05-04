import React from 'react';
import { motion } from 'framer-motion';
import { FaHiking, FaBus, FaHotel, FaUtensils, FaCamera } from 'react-icons/fa';

const ItineraryTimeline = ({ plan }) => {
    const getIcon = (activities) => {
        const text = activities.toLowerCase();
        if (text.includes('hike') || text.includes('trek') || text.includes('walk')) return <FaHiking />;
        if (text.includes('drive') || text.includes('bus') || text.includes('transfer')) return <FaBus />;
        if (text.includes('hotel') || text.includes('stay') || text.includes('check-in')) return <FaHotel />;
        if (text.includes('dinner') || text.includes('lunch') || text.includes('breakfast') || text.includes('meal')) return <FaUtensils />;
        return <FaCamera />;
    };

    return (
        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-brand-primary/20 before:to-transparent">
            {plan?.map((day, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                >
                    {/* Icon Dot */}
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-brand-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-transform duration-300 group-hover:scale-110">
                        {getIcon(day.activities)}
                    </div>
                    
                    {/* Content Card */}
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div className="flex items-center justify-between mb-2">
                            <div className="font-serif font-bold text-brand-primary text-xl">Day {day.day}</div>
                            <time className="font-accent text-brand-secondary text-sm">Adventure Day</time>
                        </div>
                        <div className="text-gray-600 font-light leading-relaxed">
                            {day.activities}
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default ItineraryTimeline;
