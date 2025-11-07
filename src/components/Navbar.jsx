import { useState, useEffect } from 'react';
import { Menu, X, Rocket, Linkedin, Mail, Phone } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'SoCo', href: '#soco' },
  { label: 'Services', href: '#services' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur bg-white/70 shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-[#81CDD6] text-white">
              <Rocket size={18} />
            </span>
            <span className="text-lg">Invincia</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-gray-700 hover:text-gray-900">
                {item.label}
              </a>
            ))}
            <div className="hidden lg:flex items-center gap-4">
              <a href="mailto:hello@invincia.co" className="text-gray-600 hover:text-gray-900" aria-label="Email">
                <Mail size={18} />
              </a>
              <a href="tel:+10000000000" className="text-gray-600 hover:text-gray-900" aria-label="Phone">
                <Phone size={18} />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-[#81CDD6] px-3 py-2 text-sm font-medium text-white shadow hover:opacity-90"
              >
                <Linkedin size={16} /> Follow
              </a>
            </div>
          </div>

          <button
            onClick={() => setOpen((o) => !o)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="mx-auto max-w-7xl px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-gray-700 hover:bg-gray-50"
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-4 px-3 pt-2">
              <a href="mailto:hello@invincia.co" className="text-gray-600" aria-label="Email">
                <Mail size={18} />
              </a>
              <a href="tel:+10000000000" className="text-gray-600" aria-label="Phone">
                <Phone size={18} />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-[#81CDD6] px-3 py-2 text-sm font-medium text-white shadow hover:opacity-90"
              >
                <Linkedin size={16} /> Follow
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
