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
            ? "rgba(244, 241, 235, 0.94)"
            : "rgba(244, 241, 235, 0)",
          color: scrolled ? "#171717" : "#ffffff",
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed left-0 top-0 z-50 w-full border-b border-transparent backdrop-blur-md"
      >
        <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-6 md:px-10 lg:px-16">

          {/* LOGO */}
          <a
            href="#home"
            onClick={handleNavClick}
            className="text-sm font-semibold tracking-[0.2em]"
          >
            FINE DECORATORS
          </a>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-8 md:flex lg:gap-10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group relative text-[11px] font-medium uppercase tracking-[0.16em]"
              >
                {item.name}

                <span className="absolute -bottom-2 left-0 h-px w-0 bg-current transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* DESKTOP QUOTE */}
          <a
            href="#contact"
            className="hidden border border-current px-5 py-3 text-[10px] font-medium uppercase tracking-[0.18em] transition-all duration-300 hover:bg-[#171717] hover:text-white md:block"
          >
            Get A Quote
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
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

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
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

              <a
                href="#contact"
                onClick={handleNavClick}
                className="mt-6 inline-flex w-fit bg-[#171717] px-6 py-4 text-xs font-medium uppercase tracking-[0.15em] text-[#f4f1eb]"
              >
                Get A Quote →
              </a>

            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;