export default function Projects({ projects = [] }) {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="text-2xl font-semibold">Projects</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.id || p._id}
            className="group rounded-xl border border-neutral-800 bg-neutral-900 p-5 transition hover:border-neutral-700"
          >
            <h3 className="text-lg font-medium group-hover:text-white">
              {p.title}
            </h3>
            <p className="mt-2 text-sm text-neutral-300 line-clamp-3">
              {p.description}
            </p>
            <div className="mt-4 flex gap-3 text-xs text-neutral-400">
              {p.techStack?.map((t) => (
                <span key={t} className="rounded bg-neutral-800 px-2 py-1">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-5 inline-flex gap-3">
              {p.liveUrl && (
                <a
                  href={p.liveUrl}
                  className="text-sm text-indigo-400 hover:text-indigo-300"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live
                </a>
              )}
              {p.githubUrl && (
                <a
                  href={p.githubUrl}
                  className="text-sm text-neutral-300 hover:text-white"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

