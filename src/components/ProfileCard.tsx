import { motion } from "framer-motion";

const ProfileCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center text-center mb-8"
    >
      <div className="relative mb-6">
        <motion.div
          className="absolute inset-[-4px] rounded-full border-2 border-primary/40"
          animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute inset-[-8px] rounded-full border border-primary/20"
          animate={{ scale: [1, 1.12, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        />
        
        <motion.div
          className="w-32 h-32 rounded-full overflow-hidden border-2 border-primary/60 glow-gold"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src="/images/profile.jpg"
            alt="U V Suresh"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="font-display text-3xl font-bold text-gradient-gold tracking-wide"
      >
        U V Suresh
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-muted-foreground text-sm mt-2 tracking-[0.2em] uppercase font-medium"
      >
        KSEB • Public Service
      </motion.p>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="w-16 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent mt-4"
      />
    </motion.div>
  );
};

export default ProfileCard;
