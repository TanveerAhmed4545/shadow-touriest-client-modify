import React from 'react';

const SkeletonLoader = ({ type = 'card' }) => {
    if (type === 'card') {
        return (
            <div className="bg-white rounded-[20px] overflow-hidden shadow-sm border border-gray-100 animate-pulse">
                <div className="h-64 bg-gray-200 shimmer"></div>
                <div className="p-6 space-y-4">
                    <div className="h-4 bg-gray-200 rounded w-1/4 shimmer"></div>
                    <div className="h-8 bg-gray-200 rounded w-3/4 shimmer"></div>
                    <div className="space-y-2">
                        <div className="h-3 bg-gray-200 rounded w-full shimmer"></div>
                        <div className="h-3 bg-gray-200 rounded w-5/6 shimmer"></div>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t border-gray-50">
                        <div className="h-6 bg-gray-200 rounded w-1/3 shimmer"></div>
                        <div className="h-10 bg-gray-200 rounded-full w-1/3 shimmer"></div>
                    </div>
                </div>
            </div>
        );
    }

    if (type === 'profile') {
        return (
            <div className="flex items-center gap-4 animate-pulse p-4 bg-white rounded-2xl">
                <div className="w-16 h-16 bg-gray-200 rounded-full shimmer"></div>
                <div className="space-y-2 flex-1">
                    <div className="h-4 bg-gray-200 rounded w-1/3 shimmer"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2 shimmer"></div>
                </div>
            </div>
        );
    }

    return <div className="h-20 bg-gray-100 rounded-xl animate-pulse shimmer"></div>;
};

export default SkeletonLoader;
