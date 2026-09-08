import { motion } from "framer-motion";

function WhatsAppButton() {
  const whatsappLink =
    "https://wa.me/919448964226?text=Hello%20Fine%20Decorators%2C%20I%20would%20like%20to%20know%20more%20about%20your%20ceiling%20and%20interior%20services.";

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Fine Decorators on WhatsApp"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: 1.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        scale: 1.08,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition-all duration-300 hover:bg-[#20BA5A] md:bottom-8 md:right-8"
    >
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
      >
        {/* WHITE WHATSAPP LOGO */}
        <path
          d="M16 3C8.82 3 3 8.82 3 16c0 2.3.6 4.46 1.75 6.34L3.1 29l6.83-1.62A12.94 12.94 0 0 0 16 29c7.18 0 13-5.82 13-13S23.18 3 16 3Z"
          fill="white"
        />

        <path
          d="M11.3 10.4c.3-.35.7-.4 1.08-.2l1.45.72c.36.18.55.55.43.94l-.42 1.34c-.08.25-.04.5.12.7.62.78 1.36 1.52 2.17 2.13.2.15.46.2.7.1l1.3-.5c.4-.15.83.02 1.02.4l.76 1.47c.2.4.1.86-.25 1.1-.53.37-1.2.72-1.85.7-1.1-.03-2.67-.8-4.3-2.42-1.62-1.62-2.4-3.2-2.42-4.3-.02-.75.38-1.43.81-1.98Z"
          fill="#25D366"
        />
      </svg>
    </motion.a>
  );
}

export default WhatsAppButton;