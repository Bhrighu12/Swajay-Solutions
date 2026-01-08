import { motion } from "framer-motion";

const Services = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="w-full bg-[#0B1221] py-24 px-6 md:px-16 text-white min-h-[400px] flex flex-col justify-center">
                <div className="max-w-6xl mx-auto w-full">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl md:text-6xl font-bold mb-6"
                    >
                        Services
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed"
                    >
                        We move beyond traditional BPO by embedding advanced technology—from proprietary applications to sophisticated AI models—directly into your workflows
                    </motion.p>
                </div>
            </section>

            {/* Mortgage Functional Capabilities Section */}
            <section className="py-24 px-6 md:px-16 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                        >
                            Mortgage Functional Capabilities
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-gray-600 text-lg"
                        >
                            End-to-end mortgage processing with AI-powered efficiency
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Document Processing",
                                desc: "Intelligent document extraction, validation, and management using advanced AI and OCR technology for faster, more accurate processing.",
                                benefits: ["AI-powered extraction", "99% accuracy", "Faster turnaround"],
                                icon: (
                                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                )
                            },
                            {
                                title: "Title Search",
                                desc: "Comprehensive property title research and examination services, processing 5,000+ orders monthly with zero defects. Our AI-powered workflows ensure accuracy and speed.",
                                benefits: ["5,000+ orders/month", "Zero defects", "AI-powered workflows"],
                                icon: (
                                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                )
                            },
                            {
                                title: "Compliance & Quality",
                                desc: "Rigorous quality assurance and regulatory compliance monitoring to protect your business and maintain the highest standards.",
                                benefits: ["Regulatory compliance", "Quality assurance", "Risk mitigation"],
                                icon: (
                                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                )
                            },
                            {
                                title: "LOS (Loan Origination System)",
                                desc: "End-to-end loan origination support, from application through approval. We streamline processes and integrate seamlessly with existing systems.",
                                benefits: ["Application to approval", "System integration", "Process streamlining"],
                                icon: (
                                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                )
                            },
                            {
                                title: "Process Automation",
                                desc: "End-to-end workflow automation reducing manual effort by up to 70%, allowing your team to focus on high-value activities.",
                                benefits: ["70% manual effort reduction", "Improved efficiency", "Cost savings"],
                                icon: (
                                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                )
                            },
                            {
                                title: "Curative Services",
                                desc: "Expert resolution of title defects and encumbrances, ensuring clean title transfer. Our specialists handle complex situations with precision.",
                                benefits: ["Title defect resolution", "Expert handling", "Clean transfers"],
                                icon: (
                                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                                    </svg>
                                )
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                                    {item.desc}
                                </p>

                                <div>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Key Benefits</p>
                                    <ul className="space-y-2">
                                        {item.benefits.map((benefit, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary/60"></div>
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blueprint of Technology Excellence Section */}
            <section className="py-24 px-6 md:px-16 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                        >
                            Blueprint of Technology Excellence
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-gray-600 text-lg max-w-4xl"
                        >
                            Swajay leverages its multi-industry expertise to deliver secure, scalable, and outcome-driven digital solutions
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Engineering Services",
                                desc: "Custom, user-centric software that streamlines interaction and scaling.",
                                services: ["Web & mobile application development", "Technology consulting", "Quality engineering"],
                                icon: (
                                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                    </svg>
                                )
                            },
                            {
                                title: "AI & Advanced Automation",
                                desc: "Machine learning and generative AI to manage complexity and eliminate errors.",
                                services: ["Agentic AI solutions", "Workflow automation", "RPA (Blue Prism, UiPath)"],
                                icon: (
                                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                    </svg>
                                )
                            },
                            {
                                title: "Data & Business Intelligence",
                                desc: "Unified, governable data platform for strategic decision-making.",
                                services: ["Data modernization", "ETL engineering", "Analytics & visualization"],
                                icon: (
                                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                )
                            },
                            {
                                title: "Secure Cloud & Integration",
                                desc: "Compliant, flexible foundation connecting all systems seamlessly.",
                                services: ["Cloud migration & optimization", "Infrastructure engineering", "Integration solutions"],
                                icon: (
                                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                                    </svg>
                                )
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                                    {item.desc}
                                </p>

                                <ul className="space-y-2">
                                    {item.services.map((service, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                                            {service}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
