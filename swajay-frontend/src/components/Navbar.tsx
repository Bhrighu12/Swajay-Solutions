import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    const links = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        {
            name: 'Services',
            path: '/services',
            megaMenu: true,
            columns: [
                {
                    title: "Our Expertise",
                    items: ["Web Development", "Mobile Apps", "Cloud Solutions", "DevOps"]
                },
                {
                    title: "Consulting",
                    items: ["Digital Transformation", "IT Strategy", "Process Optimization", "Tech Audit"]
                }
            ],
            featured: {
                title: "Featured Service",
                text: "Enterprise-grade AI solutions for modern businesses."
            }
        },
        {
            name: 'AI',
            path: '/ai',
            megaMenu: true,
            columns: [
                {
                    title: "Artificial Intelligence",
                    items: ["Machine Learning", "Deep Learning", "NLP Solutions", "Computer Vision"]
                },
                {
                    title: "AI Agents",
                    items: ["Customer Support Bots", "Process Automation", "Personal Assistants", "Data Analysis Agents"]
                }
            ],
            featured: {
                title: "Next Gen AI",
                text: "Swajay Solutions named top innovator in Generative AI technology."
            }
        },
        { name: 'Case Studies', path: '/case-studies' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 top-0 start-0 border-b transition-all duration-300 ${scrolled ? 'bg-secondary/95 backdrop-blur-md border-white/10 shadow-lg' : 'bg-secondary/50 backdrop-blur-sm border-white/5'}`}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse relative z-50">
                    <img src="/Swajay Logo.png" className="h-10" alt="Swajay Solutions Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Swajay Solutions</span>
                </NavLink>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse relative z-50">
                    <NavLink to="/contact">
                        <button type="button" className="text-white bg-gradient-to-r from-primary to-accent hover:from-highlight hover:to-primary focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-full text-sm px-6 py-2.5 text-center cursor-pointer transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-primary/50 transform hover:-translate-y-0.5">
                            Request a Demo
                        </button>
                    </NavLink>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        data-collapse-toggle="navbar-sticky"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-600"
                        aria-controls="navbar-sticky"
                        aria-expanded={isOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? 'block' : 'hidden'}`} id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:bg-transparent">
                        {links.map((link) => (
                            <li key={link.name} className="group static">
                                <NavLink
                                    to={link.path}
                                    className={({ isActive }) =>
                                        `relative block py-2 px-3 rounded-sm transition-colors duration-300 md:p-0 group-hover:text-primary ${isActive
                                            ? 'text-primary font-bold'
                                            : 'text-white'
                                        }`
                                    }
                                >
                                    <span className="relative z-10 py-2">{link.name}</span>
                                    {/* Underline Effect */}
                                    <span className="absolute left-0 bottom-0 w-full h-[3px] bg-primary transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 ease-in-out"></span>
                                </NavLink>

                                {/* Mega Menu */}
                                {link.megaMenu && (
                                    <div className="absolute left-0 top-full w-full bg-secondary border-t border-white/10 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 -z-10 h-auto">
                                        <div className="max-w-screen-xl mx-auto p-8 grid grid-cols-12 gap-8">
                                            {/* Columns */}
                                            {link.columns?.map((col, idx) => (
                                                <div key={idx} className="col-span-3">
                                                    <h3 className="text-sm font-bold text-gray-400 tracking-wider uppercase mb-4 border-b border-white/10 pb-2">{col.title}</h3>
                                                    <ul className="space-y-3">
                                                        {col.items.map((item, itemIdx) => (
                                                            <li key={itemIdx}>
                                                                <a href="#" className="block text-gray-300 hover:text-primary transition-colors duration-200 text-sm">
                                                                    {item}
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}

                                            {/* Featured Content Area */}
                                            {link.featured && (
                                                <div className="col-span-6 bg-white/5 rounded-xl p-6 border border-white/10">
                                                    <h3 className="text-white font-bold text-lg mb-2">FEATURED RECOGNITION</h3>
                                                    <div className="h-px w-12 bg-primary mb-4"></div>
                                                    <h4 className="text-xl text-white font-semibold mb-3">{link.featured.title}</h4>
                                                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                                                        {link.featured.text}
                                                    </p>
                                                    <a href="#" className="inline-flex items-center text-primary text-sm font-semibold hover:text-highlight transition-colors">
                                                        VIEW ALL RECOGNITION
                                                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                                    </a>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
