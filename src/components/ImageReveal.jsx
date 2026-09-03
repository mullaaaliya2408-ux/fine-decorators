import { motion } from "framer-motion";

function ImageReveal({
  src,
  alt = "",
  className = "",
  imageClassName = "",
}) {
  return (
    <motion.div
      initial={{ clipPath: "inset(0 0 100% 0)" }}
      whileInView={{ clipPath: "inset(0 0 0% 0)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`overflow-hidden ${className}`}
    >
      <motion.img
        src={src}
        alt={alt}
        initial={{ scale: 1.12 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 1.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`h-full w-full object-cover ${imageClassName}`}
      />
    </motion.div>
  );
}

export default ImageReveal;