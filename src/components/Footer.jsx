import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo */}
          <div>
            <h3 className="text-xl font-bold">
              Abdu Razik
            </h3>

            <p className="text-slate-500 text-sm mt-1">
              MERN Stack Developer
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-6 text-sm text-slate-600">

            <a href="#about">
              About
            </a>

            <a href="#projects">
              Projects
            </a>

            <a href="#skills">
              Skills
            </a>

            <a href="#contact">
              Contact
            </a>

          </div>

          {/* Social */}
          <div className="flex gap-4">

            <a
              href="https://github.com/YOUR_USERNAME"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://linkedin.com/in/YOUR_LINKEDIN"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={22} />
            </a>

          </div>

        </div>

        <div className="mt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Abdu Razik.
          All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;