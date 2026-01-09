const Hero = () => {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#0B1221] pb-20 md:pb-0">
            {/* Dynamic Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
                <div className="absolute top-[20%] left-[15%] w-[300px] h-[300px] bg-highlight/10 rounded-full blur-[80px] animate-bounce delay-700 duration-[10000ms]"></div>
            </div>

            {/* Noise Overlay for Texture */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay z-0 pointer-events-none"></div>

            {/* Subtle Grid for Depth */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)] z-0"></div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 pt-24 md:pt-0">

                {/* Left Content */}
                <div className="text-center md:text-left md:w-1/2 space-y-6 md:space-y-8 animate-fade-in-up">
                    <h1 className="text-3xl sm:text-4xl md:text-7xl font-extrabold tracking-tight leading-tight text-white drop-shadow-lg">
                        Innovate with <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-highlight filter drop-shadow-md">Swajay Solutions</span>
                    </h1>
                    <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto md:mx-0 font-light leading-relaxed">
                        Empowering your business with cutting-edge AI and seamless digital solutions. We turn your vision into reality.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 md:gap-5">
                        <button className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-[0_0_25px_rgba(0,180,216,0.6)] hover:shadow-[0_0_35px_rgba(0,180,216,0.8)]">
                            Get Started
                        </button>
                        <button className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-[0_0_25px_rgba(0,180,216,0.6)] hover:shadow-[0_0_35px_rgba(0,180,216,0.8)]">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Right Visual */}
                {/* Right Visual */}
                <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0 relative z-20">
                    {/* Ambient Glow behind the card */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/30 blur-[100px] rounded-full pointer-events-none"></div>

                    {/* Gradient Border Wrapper */}
                    <div className="relative rounded-3xl p-[1px] bg-gradient-to-br from-white/20 via-white/5 to-primary/50 shadow-2xl">
                        {/* Glass Container */}
                        <div className="relative bg-[#0B1221]/80 backdrop-blur-2xl rounded-[23px] p-6 md:p-10 border border-white/5 overflow-hidden group transition-all duration-500 hover:shadow-[0_0_50px_rgba(0,180,216,0.2)]">

                            {/* Inner Lighting Effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-white/5 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Grid Pattern Overlay (Optional for tech feel) */}
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>

                            <img
                                src="/Swajay-Hero.png"
                                alt="Swajay Solutions Hero"
                                className="relative z-10 w-full max-w-[280px] md:max-w-[380px] h-auto drop-shadow-2xl transform transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
