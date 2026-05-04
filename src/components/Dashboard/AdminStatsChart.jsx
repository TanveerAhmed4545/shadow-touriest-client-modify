import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaSuitcase, FaDollarSign, FaChartLine } from 'react-icons/fa';

const AdminStatsChart = () => {
    const stats = [
        { label: 'Total Bookings', value: '1,284', icon: FaSuitcase, color: 'bg-blue-500', trend: '+12%' },
        { label: 'Active Users', value: '452', icon: FaUsers, color: 'bg-brand-primary', trend: '+5%' },
        { label: 'Revenue', value: '$12,840', icon: FaDollarSign, color: 'bg-brand-secondary', trend: '+18%' },
        { label: 'Growth', value: '24%', icon: FaChartLine, color: 'bg-purple-500', trend: '+2%' },
    ];

    const chartData = [40, 70, 45, 90, 65, 85, 55];

    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white p-6 rounded-[24px] shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div className={`${stat.color} w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                                <stat.icon className="text-xl" />
                            </div>
                            <span className="text-green-500 text-xs font-bold bg-green-50 px-2 py-1 rounded-full">{stat.trend}</span>
                        </div>
                        <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider">{stat.label}</h3>
                        <p className="text-2xl font-bold text-brand-dark tracking-tight">{stat.value}</p>
                    </motion.div>
                ))}
            </div>

            {/* Custom Animated Bar Chart */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100"
            >
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h3 className="text-xl font-bold text-brand-dark font-serif">Booking Trends</h3>
                        <p className="text-gray-400 text-sm">Visual representation of weekly bookings</p>
                    </div>
                    <select className="select select-sm select-bordered rounded-xl border-gray-200">
                        <option>Last 7 Days</option>
                        <option>Last 30 Days</option>
                    </select>
                </div>

                <div className="flex items-end justify-between h-64 gap-2 px-4">
                    {chartData.map((val, idx) => (
                        <div key={idx} className="flex-1 flex flex-col items-center gap-4 group">
                            <div className="relative w-full flex flex-col justify-end h-full">
                                <motion.div 
                                    initial={{ height: 0 }}
                                    animate={{ height: `${val}%` }}
                                    transition={{ duration: 1, delay: idx * 0.1, ease: 'easeOut' }}
                                    className="w-full bg-gradient-to-t from-brand-primary/20 to-brand-primary rounded-t-xl group-hover:to-brand-secondary transition-colors cursor-pointer relative"
                                >
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-brand-dark text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                        {val}
                                    </div>
                                </motion.div>
                            </div>
                            <span className="text-[10px] font-bold text-gray-400 uppercase">Day {idx + 1}</span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default AdminStatsChart;
