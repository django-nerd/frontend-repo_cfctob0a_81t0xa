import Spline from '@splinetool/react-spline';
import { ArrowRight, Award, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[88vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white pointer-events-none" />

      <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col items-center justify-center px-4 text-center">
        <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#81CDD6]/10 px-3 py-1 text-sm font-medium text-[#81CDD6]">
          Building with heart and code
          <span className="h-1 w-1 rounded-full bg-[#81CDD6]" />
          Impact-driven tech
        </p>
        <h1 className="mb-4 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl md:text-6xl">
          Innovating for a Better Tomorrow
        </h1>
        <p className="mx-auto mb-6 max-w-2xl text-base text-gray-700 sm:text-lg">
          Invincia is a student-founded innovation company crafting digital products with real social impact. Our flagship app, SoCo — Your Soul Companion — supports lifestyle and mental wellness.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="#soco"
            className="inline-flex items-center gap-2 rounded-md bg-[#81CDD6] px-5 py-3 text-white shadow hover:opacity-90"
          >
            Download App <ArrowRight size={18} />
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-900 hover:bg-gray-50"
          >
            Learn More
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-600">
          <div className="inline-flex items-center gap-2"><Award size={16} className="text-amber-500" /> Recognized for student innovation</div>
          <div className="hidden sm:inline-flex items-center gap-2"><Users size={16} className="text-emerald-600" /> Community-first approach</div>
        </div>
      </div>
    </section>
  );
}
