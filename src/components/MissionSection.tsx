import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Heart, GraduationCap, Gift } from "lucide-react";

const MissionSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);

  return (
    <section ref={ref} id="mission" className="section-padding relative overflow-hidden">
      {/* Focus dim overlay */}
      <motion.div
        style={{ opacity: useTransform(scrollYProgress, [0, 0.4], [0, 0.4]) }}
        className="absolute inset-0 bg-background pointer-events-none"
      />

      <div className="max-w-4xl mx-auto relative">
        <motion.div style={{ opacity }} className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-secondary/20 bg-secondary/5 mb-8">
              <Heart className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-secondary">The Mission</span>
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
              A Gift to the <span className="emerald-gradient-text">Ummah</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 sm:p-12 text-left space-y-6"
          >
            <p className="text-lg text-foreground/90 leading-relaxed">
              As-salamu alaykum! My name is <span className="text-primary font-semibold">Ryan</span>, and I'm a college student who built PrayerLock out of a personal struggle — the constant pull of my phone during prayer times.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I realized that if I couldn't put my phone down for 15 minutes to connect with Allah, I needed a tool that enforced that discipline. PrayerLock is that tool — and I'm sharing it with the entire Ummah.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/20 border border-border/50">
                <GraduationCap className="w-6 h-6 text-primary mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Student Built</h4>
                  <p className="text-sm text-muted-foreground">Created with love between lectures and late-night study sessions.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/20 border border-border/50">
                <Gift className="w-6 h-6 text-secondary mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Charity Driven</h4>
                  <p className="text-sm text-muted-foreground">A portion of all proceeds goes directly to charitable causes.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;
