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
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                            <h3 className="text-xl font-bold text-secondary mb-3">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
