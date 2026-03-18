export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans dark:bg-slate-950">
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-4 sm:h-16 sm:px-6">
          <span className="text-base font-semibold text-slate-900 dark:text-white sm:text-lg">Acme Finance</span>
          <nav className="flex flex-wrap justify-end gap-3 text-sm font-medium text-slate-600 dark:text-slate-400 sm:gap-6">
            <a href="#services" className="hover:text-slate-900 dark:hover:text-white">Services</a>
            <a href="#about" className="hover:text-slate-900 dark:hover:text-white">About</a>
            <a href="#contact" className="hover:text-slate-900 dark:hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 sm:py-24">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
            Smarter money. Clearer future.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 dark:text-slate-400 sm:mt-6 sm:text-lg">
            We help individuals and businesses grow wealth with tailored advice and transparent products.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 sm:mt-10 sm:gap-4">
            <a
              href="#contact"
              className="w-full rounded-lg bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 sm:w-auto"
            >
              Get started
            </a>
            <a
              href="#services"
              className="w-full rounded-lg border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 sm:w-auto"
            >
              Our services
            </a>
          </div>
          <div className="mt-16 flex justify-center">
          </div>
        </section>

        <section id="services" className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/50">
          <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-20">
            <h2 className="text-center text-xl font-semibold text-slate-900 dark:text-white sm:text-2xl">What we offer</h2>
            <div className="mt-8 grid gap-6 sm:mt-12 sm:grid-cols-3 sm:gap-8">
              {[
                { title: "Investments", desc: "Portfolios built around your goals and risk tolerance." },
                { title: "Planning", desc: "Retirement, tax, and estate planning with clear roadmaps." },
                { title: "Business", desc: "Cash flow, growth capital, and M&A advisory for companies." },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800/50"
                >
                  <h3 className="font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-4 py-12 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:px-6 sm:py-20">
          <h2 className="w-full text-center text-xl font-semibold text-slate-900 dark:text-white sm:max-w-[300px] sm:text-left sm:text-2xl">Why work with us</h2>
          <p className="max-w-2xl text-center text-sm text-slate-600 dark:text-slate-400 sm:mt-4 sm:text-left sm:text-base">
            We’re fee-transparent and aligned with your success. No hidden charges, no pushy sales—just straightforward guidance to help you make better financial decisions.
          </p>
          <div className="flex w-full justify-center sm:mt-12 sm:w-auto">
          </div>
        </section>

        <section id="contact" className="border-t border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-900">
          <div className="mx-auto max-w-5xl px-4 py-12 text-center sm:px-6 sm:py-20">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white sm:text-2xl">Start the conversation</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 sm:text-base">Book a free 30-minute call with an advisor.</p>
            <a
              href="mailto:hello@acmefinance.com"
              className="mt-6 inline-block rounded-lg bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
            >
              Contact us
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 py-6 dark:border-slate-800 sm:py-8">
        <div className="mx-auto max-w-5xl px-4 text-center text-xs text-slate-500 dark:text-slate-400 sm:px-6 sm:text-sm">
          © {new Date().getFullYear()} Acme Finance. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
