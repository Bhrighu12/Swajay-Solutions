const Hero = () => {
    return (
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#0B1221]">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary opacity-5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 z-0"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary opacity-20 rounded-full blur-[80px] -translate-x-1/3 translate-y-1/3 z-0"></div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">

                {/* Left Content */}
                <div className="text-center md:text-left md:w-1/2 space-y-8 animate-fade-in-up">
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight text-white drop-shadow-lg">
                        Innovate with <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-highlight filter drop-shadow-md">Swajay Solutions</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto md:mx-0 font-light leading-relaxed">
                        Empowering your business with cutting-edge AI and seamless digital solutions. We turn your vision into reality.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-5">
                        <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-[0_0_25px_rgba(0,180,216,0.6)] hover:shadow-[0_0_35px_rgba(0,180,216,0.8)]">
                            Get Started
                        </button>
                        <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-[0_0_25px_rgba(0,180,216,0.6)] hover:shadow-[0_0_35px_rgba(0,180,216,0.8)]">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Right Visual */}
                {/* Right Visual */}
                <div className="md:w-1/2 flex justify-center md:justify-end mt-12 md:mt-0 relative z-20">
                    {/* Ambient Glow behind the card */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/30 blur-[100px] rounded-full pointer-events-none"></div>

                    {/* Gradient Border Wrapper */}
                    <div className="relative rounded-3xl p-[1px] bg-gradient-to-br from-white/20 via-white/5 to-primary/50 shadow-2xl">
                        {/* Glass Container */}
                        <div className="relative bg-[#0B1221]/80 backdrop-blur-2xl rounded-[23px] p-8 md:p-10 border border-white/5 overflow-hidden group transition-all duration-500 hover:shadow-[0_0_50px_rgba(0,180,216,0.2)]">

                            {/* Inner Lighting Effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-white/5 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Grid Pattern Overlay (Optional for tech feel) */}
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>

                            <img
                                src="/Swajay-Hero.png"
                                alt="Swajay Solutions Hero"
                                className="relative z-10 w-full max-w-[380px] h-auto drop-shadow-2xl transform transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
