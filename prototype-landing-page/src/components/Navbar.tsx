
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-cyan-400">Podclip</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#features" className="text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors">
                How it Works
              </a>
              <a href="#pricing" className="text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors">
                Pricing
              </a>
              <a href="#faq" className="text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors">
                FAQ
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 font-semibold">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-300 hover:text-white"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800 border-t border-slate-700">
              <a href="#features" className="text-slate-300 hover:text-cyan-400 block px-3 py-2 text-base font-medium">
                Features
              </a>
              <a href="#how-it-works" className="text-slate-300 hover:text-cyan-400 block px-3 py-2 text-base font-medium">
                How it Works
              </a>
              <a href="#pricing" className="text-slate-300 hover:text-cyan-400 block px-3 py-2 text-base font-medium">
                Pricing
              </a>
              <a href="#faq" className="text-slate-300 hover:text-cyan-400 block px-3 py-2 text-base font-medium">
                FAQ
              </a>
              <div className="px-3 py-2">
                <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
