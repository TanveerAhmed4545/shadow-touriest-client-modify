import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

const Counter = ({ from = 0, to }) => {
    const nodeRef = useRef(null);
    const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

    useEffect(() => {
        const node = nodeRef.current;
        if (isInView) {
            const controls = animate(from, to, {
                duration: 2.5,
                ease: "easeOut",
                onUpdate(value) {
                    node.textContent = Math.round(value);
                }
            });
            return () => controls.stop();
        }
    }, [from, to, isInView]);

    return <span ref={nodeRef}>{from}</span>;
};

const StatsBanner = () => {
    return (
        <div className="relative bg-[#1A3C40] py-20 mt-16 md:mt-32">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-5 mix-blend-overlay"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-b border-white/10 py-12">
                    <div className="text-center text-white">
                        <div className="flex items-end justify-center mb-2">
                           <h3 className="text-5xl md:text-6xl font-serif font-bold"><Counter to={3000} /></h3>
                           <span className="text-3xl text-brand-primary font-bold">+</span>
                        </div>
                        <p className="font-accent text-2xl text-brand-secondary tracking-wider">Members</p>
                    </div>
                    <div className="text-center text-white">
                        <div className="flex items-end justify-center mb-2">
                           <h3 className="text-5xl md:text-6xl font-serif font-bold"><Counter to={1000} /></h3>
                           <span className="text-3xl text-brand-primary font-bold">+</span>
                        </div>
                        <p className="font-accent text-2xl text-brand-secondary tracking-wider">Tour</p>
                    </div>
                    <div className="text-center text-white">
                        <div className="flex items-end justify-center mb-2">
                           <h3 className="text-5xl md:text-6xl font-serif font-bold"><Counter to={250} /></h3>
                           <span className="text-3xl text-brand-primary font-bold">+</span>
                        </div>
                        <p className="font-accent text-2xl text-brand-secondary tracking-wider">Destiny</p>
                    </div>
                    <div className="text-center text-white">
                        <div className="flex items-end justify-center mb-2">
                           <h3 className="text-5xl md:text-6xl font-serif font-bold"><Counter to={500} /></h3>
                           <span className="text-3xl text-brand-primary font-bold">+</span>
                        </div>
                        <p className="font-accent text-2xl text-brand-secondary tracking-wider">Guides</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatsBanner;
