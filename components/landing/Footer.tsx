import Link from 'next/link';

const Footer = () => (
  <footer className="bg-white border-t border-gray-200 py-8">
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      {/* Brand */}
      <div className="flex items-center space-x-2">
        <span className="text-2xl font-bold text-cyan-700 tracking-tight">Podclip</span>
      </div>
      {/* Nav Links */}
      <nav className="flex space-x-6 text-sm text-gray-600">
        <Link href="/privacy" className="hover:text-cyan-700 transition-colors">Privacy Policy</Link>
        <Link href="/terms" className="hover:text-cyan-700 transition-colors">Terms of Service</Link>
        <Link href="/refund" className="hover:text-cyan-700 transition-colors">Refund Policy</Link>
      </nav>
      {/* Copyright */}
      <div className="text-xs text-gray-400">© {new Date().getFullYear()} Podclip. All rights reserved.</div>
    </div>
  </footer>
);

export default Footer; 