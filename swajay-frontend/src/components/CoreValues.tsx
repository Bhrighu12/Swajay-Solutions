const CoreValues = () => {
    const values = [
        {
            title: "Outcome with Agility & Speed",
            description: "Rapid delivery without compromising quality or compliance.",
            icon: (
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
            ),
        },
        {
            title: "Reuse Before Reinvent",
            description: "Leverage proven accelerators and methodologies for faster implementation.",
            icon: (
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                </svg>
            ),
        },
        {
            title: "Information & Data Privacy by Default",
            description: "Security and compliance built into every solution from the ground up.",
            icon: (
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
            ),
        },
    ];

    return (
        <section className="relative py-24 overflow-hidden bg-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    {values.map((item, index) => (
                        <div key={index} className="group relative w-full h-full min-h-[300px] bg-[#050505] rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-300 overflow-hidden flex flex-col justify-between p-8 text-left hover:shadow-[0_0_30px_rgba(255,100,0,0.1)]">

                            {/* Animated Tech Background */}
                            {/* Animated Tech Background */}
                            <div className="absolute inset-0 z-0 transition-all duration-500 group-hover:blur-sm overflow-hidden rounded-2xl">
                                <div className="absolute inset-0 bg-[url('/Card-Background.png')] bg-cover bg-center opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute inset-0 bg-black/40"></div> {/* Lighter overlay for text readability */}
                            </div>

                            <div className="relative z-10">
                                <div className="mb-6 p-3 w-14 h-14 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center text-primary transition-colors duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm">
                                    {item.description}
                                </p>
                            </div>

                            {/* Hover Arrow Action */}
                            <div className="relative z-10 flex justify-end mt-6">
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

export default CoreValues;
