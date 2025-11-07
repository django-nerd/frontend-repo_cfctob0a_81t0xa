import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold">Invincia</h3>
            <p className="mt-2 text-sm text-gray-600">Tech innovation with social impact. Student-founded. Community-driven.</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-900">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#about" className="hover:text-gray-900">About</a></li>
              <li><a href="#services" className="hover:text-gray-900">Services</a></li>
              <li><a href="#blog" className="hover:text-gray-900">Blog</a></li>
              <li><a href="#contact" className="hover:text-gray-900">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-900">SoCo</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#soco" className="hover:text-gray-900">Overview</a></li>
              <li><a href="#faq" className="hover:text-gray-900">FAQs</a></li>
              <li><a href="#download" className="hover:text-gray-900">Download</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-900">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2"><Mail size={16}/> hello@invincia.co</li>
              <li className="flex items-center gap-2"><Phone size={16}/> +1 (000) 000-0000</li>
              <li className="flex items-center gap-2"><MapPin size={16}/> Remote-first</li>
            </ul>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-md bg-[#81CDD6] px-3 py-2 text-white hover:opacity-90"
            >
              <Linkedin size={16}/> Follow on LinkedIn
            </a>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t pt-6 text-sm text-gray-500 md:flex-row">
          <p>© {new Date().getFullYear()} Invincia. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#privacy" className="hover:text-gray-700">Privacy</a>
            <a href="#terms" className="hover:text-gray-700">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
