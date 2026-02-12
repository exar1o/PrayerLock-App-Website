import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold gold-gradient-text mb-1">PrayerLock</h3>
            <p className="text-sm text-muted-foreground">Discipline through devotion.</p>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          </div>

          <a
            href="mailto:ryanhamdaoui@proton.me"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4" />
            ryanhamdaoui@proton.me
          </a>
        </div>

        <div className="mt-8 pt-6 border-t border-border/30 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} PrayerLock. Built with ❤️ for the Ummah.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
