export default function Hero({ profile }) {
  return (
    <section id="home" className="mx-auto max-w-7xl px-6 pt-20 pb-12 md:pt-28">
      <div className="grid items-center gap-8 md:grid-cols-2">
        <div>
          <p className="text-sm text-indigo-400">
            {profile?.role || "Full-stack Developer"}
          </p>
          <h1 className="mt-3 text-4xl font-bold leading-tight md:text-6xl">
            {profile?.name || "Dushan"}
          </h1>
          <p className="mt-4 text-neutral-300">
            {profile?.bio ||
              "Building modern web apps with React, Node, and Tailwind."}
          </p>
          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-indigo-500"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-neutral-700 px-5 py-3 text-sm font-semibold text-neutral-100 hover:bg-neutral-900"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="justify-self-center">
          <div className="h-40 w-40 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 p-[2px] md:h-56 md:w-56">
            <div className="h-full w-full rounded-2xl bg-neutral-900" />
          </div>
        </div>
      </div>
    </section>
  );
}
