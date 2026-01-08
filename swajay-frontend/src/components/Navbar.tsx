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
        { name: 'Services', path: '/services' },
        { name: 'AI', path: '/ai' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 top-0 start-0 border-b transition-all duration-300 ${scrolled ? 'bg-secondary/90 backdrop-blur-md border-white/10 shadow-lg' : 'bg-transparent border-transparent'}`}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="/Swajay Logo.png" className="h-10" alt="Swajay Solutions Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Swajay Solutions</span>
                </NavLink>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
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
                            <li key={link.name}>
                                <NavLink
                                    to={link.path}
                                    className={({ isActive }) =>
                                        `block py-2 px-3 rounded-sm transition-colors duration-300 md:p-0 ${isActive
                                            ? 'text-primary font-bold'
                                            : 'text-white hover:text-primary'
                                        }`
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
