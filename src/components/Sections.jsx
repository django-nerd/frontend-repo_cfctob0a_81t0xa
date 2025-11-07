import { Linkedin, Award, Sparkles, Shield, Headphones, BrainCircuit, AppWindow, PenTool, Cpu } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-20">
      <div className="grid items-start gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">About Invincia</h2>
          <p className="mt-4 text-gray-700">
            We are a student-founded tech studio building digital products that make a difference. From wellness to education and civic tech, we combine design, engineering, and empathy to create human-centered solutions.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Feature icon={<Sparkles className="text-[#81CDD6]" size={18} />} title="Innovation-first" description="Exploring new ideas with curiosity and rigor." />
            <Feature icon={<Shield className="text-[#81CDD6]" size={18} />} title="Trust & Safety" description="Privacy and wellbeing are built-in by design." />
          </div>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold">Achievements</h3>
          <ul className="mt-4 space-y-3 text-gray-700">
            <li className="flex items-start gap-3"><Award className="mt-0.5 text-amber-500" size={18} /> Finalist at Campus Innovation Challenge 2024</li>
            <li className="flex items-start gap-3"><Award className="mt-0.5 text-amber-500" size={18} /> Featured by Student Founders Network</li>
            <li className="flex items-start gap-3"><Award className="mt-0.5 text-amber-500" size={18} /> Built 3 MVPs in under 6 months</li>
          </ul>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#81CDD6] px-4 py-2 text-white hover:opacity-90"
          >
            <Linkedin size={16} /> Follow us on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, title, description }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="rounded-md bg-[#81CDD6]/10 p-2">{icon}</div>
        <div>
          <p className="font-medium text-gray-900">{title}</p>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export function SoCoSection() {
  return (
    <section id="soco" className="bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900">SoCo — Your Soul Companion</h2>
          <p className="mt-3 text-gray-700">A lifestyle and mental wellness app designed to support everyday wellbeing.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card icon={<Headphones size={20} className="text-[#81CDD6]" />} title="Guided Support" desc="Daily reflections and audio sessions crafted with therapists." />
          <Card icon={<BrainCircuit size={20} className="text-[#81CDD6]" />} title="Smart Insights" desc="Track mood and habits with gentle, adaptive nudges." />
          <Card icon={<Shield size={20} className="text-[#81CDD6]" />} title="Privacy-first" desc="Your data stays yours — secure and transparent." />
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a href="#download" className="rounded-md bg-[#81CDD6] px-5 py-3 text-white shadow hover:opacity-90">Get the App</a>
          <a href="#faq" className="rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-900 hover:bg-gray-50">Read FAQs</a>
        </div>
      </div>
    </section>
  );
}

function Card({ icon, title, desc }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-3 inline-flex items-center gap-2">
        <span className="rounded-md bg-[#81CDD6]/10 p-2">{icon}</span>
        <span className="font-semibold text-gray-900">{title}</span>
      </div>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-20">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Services</h2>
        <p className="mt-3 text-gray-700">We partner with organizations to build purposeful digital products.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card icon={<AppWindow size={20} className="text-[#81CDD6]" />} title="App Development" desc="Native and cross‑platform apps from idea to launch." />
        <Card icon={<PenTool size={20} className="text-[#81CDD6]" />} title="UI/UX Design" desc="Delightful experiences grounded in research and testing." />
        <Card icon={<Cpu size={20} className="text-[#81CDD6]" />} title="AI Solutions" desc="Practical machine learning for real‑world impact." />
      </div>
    </section>
  );
}

export function BlogContactSection() {
  return (
    <section id="blog" className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">News & Updates</h2>
            <p className="mt-3 text-gray-700">Stories from building SoCo and other innovation projects — covering Mental Wellness and Tech Innovation.</p>
            <ul className="mt-6 space-y-4 text-gray-700">
              <li className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">SoCo v1.2 introduces mindful check-ins and improved journaling.</li>
              <li className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">Invincia partners with local clinics to pilot community wellbeing tools.</li>
              <li className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">Research notes: responsible AI for supportive mental health experiences.</li>
            </ul>
          </div>

          <div id="contact" className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900">Contact Us</h2>
            <p className="mt-2 text-gray-700">We’d love to hear from you!</p>
            <ContactForm />
            <div className="mt-6 text-sm text-gray-600">
              <p>Email: hello@invincia.co</p>
              <p>Phone: +1 (000) 000-0000</p>
              <p>Location: Remote-first</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    form.reset();
    const el = document.getElementById('contact-success');
    if (el) el.classList.remove('hidden');
  }
  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input required name="name" placeholder="Name" className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-[#81CDD6]" />
        <input required type="email" name="email" placeholder="Email" className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-[#81CDD6]" />
      </div>
      <textarea required name="message" rows={4} placeholder="Message" className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-[#81CDD6]" />
      <button type="submit" className="rounded-md bg-[#81CDD6] px-4 py-2 font-medium text-white hover:opacity-90">Send Message</button>
      <p id="contact-success" className="hidden text-sm text-emerald-600">Thanks! We got your message and will reply soon.</p>
    </form>
  );
}
