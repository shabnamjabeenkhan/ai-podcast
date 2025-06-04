
const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <span className="text-2xl font-bold text-cyan-400">Podclip</span>
            </div>
            <p className="text-slate-400 mb-6 max-w-md">
              AI-powered podcast summarization that preserves original voices while extracting key insights. 
              Perfect for busy professionals and podcast enthusiasts.
            </p>
            <div className="text-sm text-slate-500">
              <p>Built with Supabase, NextJS, and Vercel</p>
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-slate-200">Features</h3>
            <ul className="space-y-2 text-slate-400">
              <li>AI Voice Preservation</li>
              <li>RSS Integration</li>
              <li>Notion Export</li>
              <li>Key Topic Extraction</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-slate-200">Support</h3>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#faq" className="hover:text-cyan-400 transition-colors">FAQ</a>
              </li>
              <li>
                <a href="mailto:admin@podclip.tech" className="hover:text-cyan-400 transition-colors">
                  Contact Support
                </a>
              </li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate-400 text-sm">
            © 2024 Podclip. All rights reserved.
          </div>
          <div className="text-slate-400 text-sm mt-4 md:mt-0">
            Contact: <a href="mailto:admin@podclip.tech" className="text-cyan-400 hover:text-cyan-300">admin@podclip.tech</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
