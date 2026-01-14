const WhyChooseUs = () => {
    const reasons = [
        {
            title: "Industry Expertise",
            description: "Decades of hands-on experience across mortgage lending, servicing operations, and regulated enterprise environments.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                </svg>
            ),
        },
        {
            title: "Proven Outcomes",
            description: "Measurable results in cost reduction, faster processing times, and operational efficiency.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                </svg>
            ),
        },
        {
            title: "Speed to Value",
            description: "Outcome-first approach delivering results quickly with our specialized squads and proven methodologies.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
            ),
        },
        {
            title: "Technology Excellence",
            description: "Cutting-edge AI, cloud, and automation technologies embedded directly into your workflows.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12h-1.5m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
                </svg>
            ),
        },
        {
            title: "Scalable Delivery",
            description: "Modular, pod-based teams that ramp quickly, integrate seamlessly, and evolve with your needs.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                </svg>
            ),
        },
        {
            title: "Trusted Partnership",
            description: "Co-build model with dedicated specialists who understand your business and strategic objectives.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
            ),
        },
    ];

    return (
        <section className="relative py-24 overflow-hidden bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-black">Why Swajay Solutions?</h2>
                    <p className="text-black max-w-2xl mx-auto text-lg">
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
                                <div className="mb-4 text-primary group-hover:text-white transition-colors duration-300">
                                    {item.icon}
                                </div>
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
