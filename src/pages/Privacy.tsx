import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Privacy = () => (
  <div className="min-h-screen bg-background section-padding pt-24">
    <div className="max-w-3xl mx-auto">
      <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </Link>
      <h1 className="text-3xl font-bold gold-gradient-text mb-2">Privacy Policy</h1>
      <p className="text-sm text-muted-foreground mb-8">Last updated: February 2026</p>

      <div className="space-y-6 text-foreground/85 leading-relaxed">
        <p>Prayer Lock ("the App") is committed to protecting your privacy. This Privacy Policy explains what information we collect and how we use it.</p>

        <div>
          <h2 className="text-xl font-semibold text-foreground mb-3">1. Information We Collect</h2>

          <h3 className="text-lg font-medium text-foreground/90 mb-1">a) Location Data</h3>
          <p className="mb-4">The App collects your device location (GPS coordinates) or manually entered city/country information solely to calculate accurate Islamic prayer times using the AlAdhan API. Location data is not stored on any server and is only used locally on your device.</p>

          <h3 className="text-lg font-medium text-foreground/90 mb-1">b) Network Requests</h3>
          <p className="mb-2">The App makes network requests to:</p>
          <ul className="list-disc list-inside space-y-1 mb-4 text-muted-foreground">
            <li><strong className="text-foreground/80">AlAdhan API</strong> (api.aladhan.com) to retrieve prayer times.</li>
            <li><strong className="text-foreground/80">Al-Quran Cloud API</strong> (api.alquran.cloud) to retrieve Quran text.</li>
            <li><strong className="text-foreground/80">Google AdMob servers</strong> to display advertisements (to support development).</li>
          </ul>

          <h3 className="text-lg font-medium text-foreground/90 mb-1">c) Advertising Data</h3>
          <p>The App uses Google AdMob to display banner advertisements. AdMob may collect device identifiers, IP address, and usage data as described in <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google's Privacy Policy</a>.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-foreground mb-3">2. Information We Do NOT Collect</h2>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            <li>We do not require any user account or login.</li>
            <li>We do not collect personal information such as name, email, or phone number.</li>
            <li>We do not store any data on remote servers.</li>
            <li>We do not share any personal data with third parties beyond what is described above.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-foreground mb-2">3. Data Storage</h2>
          <p>All app data (prayer time cache, Quran reading progress, and settings) is stored locally on your device using Android's standard storage mechanisms. This data is deleted if you uninstall the App.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-foreground mb-2">4. Children's Privacy</h2>
          <p>The App does not knowingly collect personal information from children under 13.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-foreground mb-2">5. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. Changes will be reflected on this page and in the App.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-foreground mb-2">6. Contact</h2>
          <p>For questions about this Privacy Policy, please contact us at: <a href="mailto:ryanhamdaoui@proton.me" className="text-primary hover:underline">ryanhamdaoui@proton.me</a></p>
        </div>
      </div>
    </div>
  </div>
);

export default Privacy;
