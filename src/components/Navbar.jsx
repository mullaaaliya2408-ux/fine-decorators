import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Our Work", href: "#work" },
    { name: "Services", href: "#services" },
    {name:"Behind The Craft", href: "#behind-the-craft"},
    { name: "Experience", href: "#experience" },
    { name: "Our Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <motion.header
        animate={{
          backgroundColor: scrolled
            ? "rgba(244, 241, 235, 0.96)"
            : "rgba(13, 13, 13, 0.18)",
          color: scrolled ? "#171717" : "#ffffff",
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed left-0 top-0 z-50 w-full backdrop-blur-md"
      >
        {/* ================= TOP BAR ================= */}
        <div
          className={`hidden border-b md:block ${
            scrolled
              ? "border-[#171717]/10"
              : "border-white/15"
          }`}
        >
          <div className="mx-auto flex h-10 max-w-[1600px] items-center justify-between px-6 text-[9px] tracking-[0.12em] md:px-10 lg:px-16">

            {/* PHONE */}
            <a
              href="tel:+919448964226"
              className="transition-opacity duration-300 hover:opacity-60"
            >
              +91 9448964226
            </a>

            {/* WORKING HOURS */}
            <span className="hidden lg:block">
              WORKING HOURS&nbsp;&nbsp; MON — SAT
            </span>

            {/* EMAIL */}
            <a
              href="mailto:finedecorators397@gmail.com"
              className="transition-opacity duration-300 hover:opacity-60"
            >
              finedecorators397@gmail.com
            </a>
          </div>
        </div>

        {/* ================= MAIN NAVBAR ================= */}
        <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-6 md:px-10 lg:px-16">

          {/* LOGO */}
          <a
            href="#home"
            onClick={handleNavClick}
            className="group flex items-center gap-3"
          >
            <span className="font-serif text-xl tracking-[0.08em] md:text-2xl">
              FINE
            </span>

            <span className="h-5 w-px bg-current opacity-30" />

            <span className="text-xs font-medium tracking-[0.18em]">
              DECORATORS
            </span>
          </a>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-7 md:flex lg:gap-9">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group relative text-[10px] font-medium uppercase tracking-[0.15em]"
              >
                {item.name}

                <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#a58b5b] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* RIGHT ACTIONS */}
          <div className="hidden items-center gap-5 md:flex">

            {/* SEARCH ICON */}
            <button
              type="button"
              aria-label="Search"
              className="opacity-80 transition-opacity duration-300 hover:opacity-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-4 w-4"
              >
                <circle cx="11" cy="11" r="6.5" />
                <path d="m16 16 4.5 4.5" />
              </svg>
            </button>

            {/* QUOTE BUTTON */}
            <a
              href="#contact"
              className="border border-current px-5 py-3 text-[9px] font-medium uppercase tracking-[0.18em] transition-all duration-300 hover:border-[#a58b5b] hover:bg-[#a58b5b] hover:text-white"
            >
              GET A QUOTE
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 md:hidden"
          >
            <motion.span
              animate={{
                rotate: menuOpen ? 45 : 0,
                y: menuOpen ? 4 : 0,
              }}
              className="h-px w-6 bg-current"
            />

            <motion.span
              animate={{
                rotate: menuOpen ? -45 : 0,
                y: menuOpen ? -1 : 0,
              }}
              className="h-px w-6 bg-current"
            />
          </button>
        </div>
      </motion.header>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="fixed inset-x-0 top-20 z-40 bg-[#f4f1eb] px-6 pb-8 pt-6 shadow-xl md:hidden"
          >
            <nav className="flex flex-col">

              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={handleNavClick}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.3,
                  }}
                  className="border-b border-[#171717]/10 py-4 text-sm font-medium uppercase tracking-[0.15em]"
                >
                  {item.name}
                </motion.a>
              ))}

              {/* MOBILE CONTACT INFO */}
              <div className="mt-6 space-y-3 border-t border-[#171717]/10 pt-5">
                <a
                  href="tel:+919448964226"
                  className="block text-[10px] tracking-[0.12em]"
                >
                  +91 9448964226
                </a>

                <a
                  href="mailto:finedecorators397@gmail.com"
                  className="block text-[10px] tracking-[0.12em]"
                >
                  finedecorators397@gmail.com
                </a>
              </div>

              {/* MOBILE QUOTE */}
              <a
                href="#contact"
                onClick={handleNavClick}
                className="mt-6 inline-flex w-fit bg-[#171717] px-6 py-4 text-xs font-medium uppercase tracking-[0.15em] text-[#f4f1eb]"
              >
                GET A QUOTE&nbsp;&nbsp; →
              </a>

            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;