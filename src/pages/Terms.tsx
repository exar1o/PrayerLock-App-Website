import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Terms = () => (
  <div className="min-h-screen bg-background section-padding pt-24">
    <div className="max-w-3xl mx-auto">
      <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </Link>
      <h1 className="text-3xl font-bold gold-gradient-text mb-2">Terms of Use</h1>
      <p className="text-sm text-muted-foreground mb-8">Last updated: February 2026</p>

      <div className="space-y-6 text-foreground/85 leading-relaxed">
        <p>By using Prayer Lock ("the App"), you agree to the following terms:</p>

        <div>
          <h2 className="text-xl font-semibold text-foreground mb-2">1. Purpose</h2>
          <p>Prayer Lock is designed as a prayer discipline tool. It locks your device screen during Islamic prayer times to encourage focus on prayer and Quran reading.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-foreground mb-2">2. Lock Behavior</h2>
          <p>The App temporarily restricts phone usage during prayer times for a configurable duration (default: 15 minutes). By using the App, you consent to this behavior. An emergency exit mechanism is available in "Soft" mode.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-foreground mb-2">3. Prayer Time Accuracy</h2>
          <p>Prayer times are calculated using the AlAdhan API based on your location and selected calculation method. While we strive for accuracy, the App is not a substitute for your local mosque's prayer schedule. Please verify times with your local authority.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-foreground mb-2">4. Quran Text</h2>
          <p>Quran text is sourced from the Al-Quran Cloud API in Uthmani script. While sourced from reputable APIs, the App developers are not responsible for any errors in the text. Please refer to a physical Mushaf for precise readings.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-foreground mb-2">5. Advertisements</h2>
          <p>The App displays banner advertisements via Google AdMob to support development. Ad content is determined by Google and is not controlled by the App developers.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-foreground mb-2">6. Disclaimer</h2>
          <p>The App is provided "as is" without warranty of any kind. The developers are not responsible for any missed prayers, incorrect prayer times, or any damage arising from use of the App.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-foreground mb-2">7. Modifications</h2>
          <p>We reserve the right to modify these Terms at any time. Continued use of the App constitutes acceptance of modified Terms.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-foreground mb-2">8. Contact</h2>
          <p>For questions, please contact: <a href="mailto:ryanhamdaoui@proton.me" className="text-primary hover:underline">ryanhamdaoui@proton.me</a></p>
        </div>
      </div>
    </div>
  </div>
);

export default Terms;
