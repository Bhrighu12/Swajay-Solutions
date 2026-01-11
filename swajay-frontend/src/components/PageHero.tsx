import React from 'react';
import Breadcrumbs from './Breadcrumbs';

interface PageHeroProps {
    title: string;
    subtitle: string;
    className?: string;
}

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, className = "" }) => {
    return (
        <section className={`relative w-full pt-32 pb-20 md:pt-40 md:pb-24 flex flex-col items-center justify-center overflow-hidden bg-[#000000] text-center ${className}`}>

            {/* Background Layers */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                {/* Image Background */}
                <div className="absolute inset-0 z-0 opacity-70">
                    <img
                        src="/Swajay-Hero.png"
                        alt="Background"
                        className="w-full h-full object-cover object-center scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-black/30 to-transparent"></div>
                </div>

                {/* Subtle Moving Glows */}
                <div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse mix-blend-screen"></div>
                <div className="absolute bottom-[20%] right-[20%] w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px] animate-pulse delay-1000 mix-blend-screen"></div>
            </div>

            {/* Noise Texture */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay z-0 pointer-events-none"></div>

            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_40%,transparent_100%)] z-0 pointer-events-none"></div>

            {/* Content */}
            <div className="container mx-auto px-6 relative z-10 max-w-5xl">
                <Breadcrumbs className="justify-center mb-6" />

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-2xl mb-6">
                    {title}
                </h1>

                <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-lg">
                    {subtitle}
                </p>
            </div>
        </section>
    );
};

export default PageHero;
