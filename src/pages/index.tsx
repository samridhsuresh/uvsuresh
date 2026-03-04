import { motion } from "framer-motion";
import ProfileCard from "@/components/ProfileCard";
import SocialLinks from "@/components/SocialLinks";
import ParticleBackground from "@/components/ParticleBackground";

const Index = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-background bg-noise overflow-hidden py-12 px-4">
      <ParticleBackground />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-md mx-auto"
      >
        <ProfileCard />
        <SocialLinks />
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="text-center text-muted-foreground text-xs mt-8 tracking-widest uppercase"
        >
          ⚡ Public Service • Social Media
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Index;

