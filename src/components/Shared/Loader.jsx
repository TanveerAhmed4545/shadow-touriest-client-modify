const Loader = () => {
    return (
        <div className="flex flex-col justify-center items-center h-[50vh] w-full gap-4">
            <div className="relative w-16 h-16">
                <div className="absolute inset-0 rounded-full border-4 border-gray-100"></div>
                <div className="absolute inset-0 rounded-full border-4 border-brand-primary border-t-brand-secondary animate-spin"></div>
            </div>
            <p className="text-brand-dark font-medium tracking-widest uppercase text-xs animate-pulse">Loading...</p>
        </div>
    );
};

export default Loader;
