import { motion } from "framer-motion";
import { Lock, BookOpen, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Lock,
    title: "Prayer Auto-Lock",
    description: "Your phone automatically locks at each prayer time for a set duration. No distractions — just you and your Salah.",
    accent: "gold" as const,
  },
  {
    icon: BookOpen,
    title: "Quran Integration",
    description: "Read 5 pages of the Quran during every lock session. At 5 prayers a day, you'll complete the entire Quran in just 121 days.",
    accent: "emerald" as const,
  },
  {
    icon: TrendingUp,
    title: "Habit Building",
    description: "Track your daily consistency with streaks and progress. Watch your discipline grow, one prayer at a time.",
    accent: "gold" as const,
  },
];

const accentStyles = {
  gold: "bg-primary/10 text-primary border-primary/20",
  emerald: "bg-secondary/10 text-secondary border-secondary/20",
};

const HowItWorks = () => {
  return (
    <section id="features" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy-light/30 to-background pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            How <span className="gold-gradient-text">PrayerLock</span> Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Three simple steps to transform your prayer routine into unbreakable discipline.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card-hover p-8 flex flex-col"
            >
              <div className={`w-14 h-14 rounded-xl border flex items-center justify-center mb-6 ${accentStyles[feature.accent]}`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
