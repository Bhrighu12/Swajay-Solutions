const CTASection = () => {
    return (
        <section className="bg-black py-24 text-center relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Ready to Transform Your <br /> Business?
                </h2>
                <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                    Let's discuss how our AI and automation solutions can drive measurable outcomes for your organization
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="flex items-center justify-center px-8 py-3 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-lg">
                        Request Demo
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                    </button>
                    <button className="flex items-center justify-center px-8 py-3 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-lg">
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
