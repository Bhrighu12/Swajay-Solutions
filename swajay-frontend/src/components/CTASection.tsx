const CTASection = () => {
    return (
        <section className="bg-blue-600 py-24 text-center">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Ready to Transform Your <br /> Business?
                </h2>
                <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                    Let's discuss how our AI and automation solutions can drive measurable outcomes for your organization
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="flex items-center justify-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300">
                        Request Demo
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                    </button>
                    <button className="px-8 py-3 bg-transparent border border-white text-blue-600 font-semibold rounded-lg hover:bg-white/10 transition-colors duration-300">
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
