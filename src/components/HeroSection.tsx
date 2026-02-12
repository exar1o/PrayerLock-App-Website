import { motion } from "framer-motion";
import { Download } from "lucide-react";
import appIcon from "@/assets/prayerlock-icon.png";

const PlayStoreIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302c.486.353.486 1.027 0 1.38l-2.302 2.302L15.396 12l2.302-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302L5.864 2.658z" />
  </svg>
);

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center section-padding overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-emerald/5 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <img
            src={appIcon}
            alt="PrayerLock icon"
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl mx-auto shadow-[var(--shadow-gold)] animate-float"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/20 bg-gold/5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-teal" />
            <span className="text-sm font-medium text-primary">Now Available for Android</span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
            Unlock Your Focus,{" "}
            <span className="gold-gradient-text">Lock Your Prayer</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto mb-10 text-balance">
            The discipline tool that helps you finish the Quran in{" "}
            <span className="text-primary font-semibold">121 days</span>. Lock your phone during Salah. Read 5 pages. Build unbreakable habits.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://github.com/exar1o/PrayerLock-App-Website/releases/download/apk/PrayerLock.apk"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg shadow-[var(--shadow-teal)] hover:shadow-[0_0_50px_-8px_hsla(160,48%,42%,0.4)] transition-shadow duration-300"
            >
              <Download className="w-5 h-5" />
              Download APK
            </motion.a>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl border border-border bg-muted/30 text-muted-foreground font-medium text-lg cursor-default"
            >
              <PlayStoreIcon />
              Play Store — Coming Soon
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
