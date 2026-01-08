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
        <section className="bg-white py-20">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    {values.map((item, index) => (
                        <div key={index} className="flex flex-col items-center space-y-4 group">
                            <div className="p-4 bg-primary/10 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                            <p className="text-gray-600 px-4">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoreValues;
