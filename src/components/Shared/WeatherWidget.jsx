import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WiDaySunny, WiCloudy, WiRain, WiSnow, WiThunderstorm, WiFog } from 'react-icons/wi';

const WeatherWidget = ({ location }) => {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                // 1. Geocoding (City to Lat/Long)
                const geoRes = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(location)}&format=json&limit=1`);
                const geoData = await geoRes.json();

                if (geoData && geoData.length > 0) {
                    const { lat, lon } = geoData[0];
                    
                    // 2. Weather Data (Open-Meteo)
                    const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
                    const weatherData = await weatherRes.json();
                    
                    setWeather(weatherData.current_weather);
                }
            } catch (error) {
                console.error("Weather fetch error:", error);
            } finally {
                setLoading(false);
            }
        };

        if (location) {
            fetchWeather();
        }
    }, [location]);

    const getWeatherIcon = (code) => {
        // WMO Weather interpretation codes (WW)
        if (code === 0) return <WiDaySunny className="text-yellow-400" />;
        if (code >= 1 && code <= 3) return <WiCloudy className="text-gray-400" />;
        if (code >= 45 && code <= 48) return <WiFog className="text-gray-300" />;
        if (code >= 51 && code <= 67) return <WiRain className="text-blue-400" />;
        if (code >= 71 && code <= 77) return <WiSnow className="text-blue-100" />;
        if (code >= 80 && code <= 82) return <WiRain className="text-blue-500" />;
        if (code >= 95) return <WiThunderstorm className="text-purple-500" />;
        return <WiDaySunny className="text-yellow-400" />;
    };

    if (loading) return (
        <div className="flex items-center gap-2 text-gray-400 text-sm animate-pulse">
            <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
            <span>Fetching weather...</span>
        </div>
    );

    if (!weather) return null;

    return (
        <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-sm"
        >
            <div className="text-3xl">
                {getWeatherIcon(weather.weathercode)}
            </div>
            <div className="flex flex-col">
                <span className="text-white font-bold text-lg leading-none">{Math.round(weather.temperature)}°C</span>
                <span className="text-white/70 text-[10px] uppercase tracking-tighter font-medium">Current Weather</span>
            </div>
        </motion.div>
    );
};

export default WeatherWidget;
