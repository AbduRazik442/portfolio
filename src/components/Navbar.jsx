import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Moon, Sun } from "lucide-react";

const Navbar = ({
    darkMode,
    setDarkMode,
}) => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);

        return () =>
            window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        "About",
        "Experience",
        "Projects",
        "Skills",
        "Contact",
    ];

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
                ${scrolled
                    ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800"
                    : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="flex items-center justify-between h-20">
                    <a
                        href="#hero"
                        className="
                            text-xl
                            font-bold
                            tracking-tight
                            text-slate-900
                            dark:text-white
                        "
                    >
                        Abdu Razik
                    </a>

                    {/* Desktop */}
                    <nav className="hidden md:flex items-center gap-8">

                        {navLinks.map((link) => (
                            <a
                                key={link}
                                href={`#${link.toLowerCase()}`}
                                className="
                text-sm
                text-slate-600
                dark:text-slate-300
                hover:text-black
                dark:hover:text-white
                transition
            "
                            >
                                {link}
                            </a>
                        ))}

                        {/* Dark Mode Toggle */}
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="
            p-2
            rounded-full
            border
            border-slate-300
            dark:border-slate-700
            dark:bg-slate-900
        "
                        >
                            {darkMode ? (
                                <Sun size={18} />
                            ) : (
                                <Moon size={18} />
                            )}
                        </button>

                    </nav>

                    {/* Mobile */}
                    <div className="flex items-center gap-3">

                        {/* Theme Toggle */}
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="
            p-2
            rounded-full
            border
            border-slate-300
            dark:border-slate-700
            dark:bg-slate-900
        "
                        >
                            {darkMode ? (
                                <Sun size={18} />
                            ) : (
                                <Moon size={18} />
                            )}
                        </button>

                        <button
                            onClick={() => setOpen(!open)}
                            className="md:hidden"
                        >
                            {open ? <X /> : <Menu />}
                        </button>

                    </div>
                </div>
            </div>

            {open && (
                <div
                    className="
                        md:hidden
                        bg-white
                        dark:bg-slate-950
                        border-t
                        border-slate-200
                        dark:border-slate-800
                    "
                >
                    <div className="flex flex-col p-6 gap-5">
                        {navLinks.map((link) => (
                            <a
                                key={link}
                                href={`#${link.toLowerCase()}`}
                                onClick={() => setOpen(false)}
                                className="text-slate-700 dark:text-slate-300"
                            >
                                {link}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;