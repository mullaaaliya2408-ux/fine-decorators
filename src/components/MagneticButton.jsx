import { motion, useMotionValue, useSpring } from "framer-motion";

function MagneticButton({
  children,
  className = "",
  strength = 0.25,
  ...props
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 150,
    damping: 15,
  });

  const springY = useSpring(y, {
    stiffness: 150,
    damping: 15,
  });

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const mouseX = event.clientX - (rect.left + rect.width / 2);
    const mouseY = event.clientY - (rect.top + rect.height / 2);

    x.set(mouseX * strength);
    y.set(mouseY * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      {...props}
      style={{
        x: springX,
        y: springY,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.button>
  );
}

export default MagneticButton;