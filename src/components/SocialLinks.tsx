import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Linkedin, MessageCircle } from "lucide-react";

const links = [
  {
    label: "Facebook",
    url: "https://www.facebook.com/share/1BzLusRyPr/",
    icon: Facebook,
    color: "from-[hsl(220,60%,50%)] to-[hsl(220,70%,40%)]",
  },
  {
    label: "Facebook Page",
    url: "https://www.facebook.com/share/1CyHup4QqU/",
    icon: Facebook,
    color: "from-[hsl(220,55%,45%)] to-[hsl(220,65%,35%)]",
  },
  {
    label: "Instagram",
    url: "https://www.instagram.com/uvsureshkseb",
    icon: Instagram,
    color: "from-[hsl(330,70%,50%)] to-[hsl(25,90%,55%)]",
  },
  {
    label: "X / Twitter",
    url: "https://x.com/uvsureshkseb",
    icon: Twitter,
    color: "from-[hsl(200,10%,30%)] to-[hsl(200,10%,20%)]",
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/uvsureshkseb",
    icon: Linkedin,
    color: "from-[hsl(210,70%,45%)] to-[hsl(210,80%,35%)]",
  },
  {
    label: "WhatsApp – 9400494108",
    url: "https://wa.me/919400494108",
    icon: MessageCircle,
    color: "from-[hsl(142,60%,40%)] to-[hsl(142,70%,30%)]",
  },
  {
    label: "WhatsApp – 9847103498",
    url: "https://wa.me/919847103498",
    icon: MessageCircle,
    color: "from-[hsl(142,55%,38%)] to-[hsl(142,65%,28%)]",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.8 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const } },
};

const SocialLinks = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-3"
    >
      {links.map((link) => (
        <motion.a
          key={link.label}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          variants={item}
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="group relative flex items-center gap-4 rounded-xl border border-border/60 bg-card/80 backdrop-blur-sm px-5 py-4 transition-colors hover:border-primary/30 shimmer overflow-hidden"
        >
          <div className={`flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br ${link.color} shadow-lg`}>
            <link.icon className="w-5 h-5 text-foreground" />
          </div>

          <span className="text-sm font-semibold tracking-wide text-foreground/90 group-hover:text-foreground transition-colors">
            {link.label}
          </span>

          <motion.span
            className="ml-auto text-muted-foreground group-hover:text-primary transition-colors"
            initial={{ x: 0 }}
            whileHover={{ x: 3 }}
          >
            →
          </motion.span>
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialLinks;
