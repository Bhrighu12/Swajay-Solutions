const WhyChooseUs = () => {
    const reasons = [
        {
            title: "Industry Expertise",
            description: "Decades of hands-on experience across mortgage lending, servicing operations, and regulated enterprise environments.",
        },
        {
            title: "Proven Outcomes",
            description: "Measurable results in cost reduction, faster processing times, and operational efficiency.",
        },
        {
            title: "Speed to Value",
            description: "Outcome-first approach delivering results quickly with our specialized squads and proven methodologies.",
        },
        {
            title: "Technology Excellence",
            description: "Cutting-edge AI, cloud, and automation technologies embedded directly into your workflows.",
        },
        {
            title: "Scalable Delivery",
            description: "Modular, pod-based teams that ramp quickly, integrate seamlessly, and evolve with your needs.",
        },
        {
            title: "Trusted Partnership",
            description: "Co-build model with dedicated specialists who understand your business and strategic objectives.",
        },
    ];

    return (
        <section className="bg-gray-50 py-24">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-secondary">Why Swajay Solutions?</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        We combine deep mortgage and BFSI expertise with modern AI and cloud technology to deliver measurable business outcomes.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((item, index) => (
                        <div key={index} className="group relative w-full h-full min-h-[250px] bg-[#050505] rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-300 overflow-hidden flex flex-col justify-between p-8 text-left hover:shadow-[0_0_30px_rgba(255,100,0,0.1)]">

                            {/* Animated Tech Background */}
                            <div className="absolute inset-0 z-0 transition-all duration-500 group-hover:blur-sm overflow-hidden rounded-2xl">
                                <div className="absolute inset-0 bg-[url('/Card-Background.png')] bg-cover bg-center opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute inset-0 bg-black/40"></div> {/* Lighter overlay for text readability */}
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm">
                                    {item.description}
                                </p>
                            </div>

                            {/* Hover Arrow Action */}
                            <div className="relative z-10 flex justify-end mt-4">
                                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out shadow-lg">
                                    <svg className="w-5 h-5 text-white transform -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
