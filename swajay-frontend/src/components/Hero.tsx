const Hero = () => {
    return (
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#020024] via-[#090979] to-[#00d4ff] bg-[length:400%_400%] animate-gradient-xy">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary opacity-10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 z-0"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary opacity-30 rounded-full blur-[80px] -translate-x-1/3 translate-y-1/3 z-0"></div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">

                {/* Left Content */}
                <div className="text-center md:text-left md:w-1/2 space-y-8 animate-fade-in-up">
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight text-white drop-shadow-lg">
                        Innovate with <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-highlight filter drop-shadow-md">Swajay Solutions</span>
                    </h1>
                    <p className="text-xl text-gray-200 max-w-2xl mx-auto md:mx-0 font-light leading-relaxed">
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
                <div className="md:w-1/2 flex justify-center md:justify-end animate-float">
                    {/* Glass Card Container for Logo to make dark text readable */}
                    <div className="relative p-10 bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden hover:bg-white/10 transition-colors duration-500 group">
                        <style>
                            {`
                    .logo-glow {
                      filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.3));
                    }
                  `}
                        </style>
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-50"></div>
                        <img
                            src=""
                            alt="Swajay Solutions Hero"
                            className="relative z-10 w-64 md:w-96 logo-glow"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
