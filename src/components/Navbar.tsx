import { motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import appIcon from "@/assets/prayerlock-icon.png";
import { useState } from "react";

const links = [
  { label: "Features", href: "#features" },
  { label: "Mission", href: "#mission" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <img src={appIcon} alt="PrayerLock" className="w-7 h-7 rounded-lg" />
          <span className="font-bold text-lg gold-gradient-text">PrayerLock</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:shadow-[var(--shadow-teal)] transition-shadow duration-300"
          >
            <Download className="w-4 h-4" />
            Download
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground p-2">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden border-t border-border/30 bg-background/95 backdrop-blur-xl"
        >
          <div className="px-4 py-4 space-y-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#"
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-semibold mt-2"
            >
              <Download className="w-4 h-4" />
              Download APK
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
