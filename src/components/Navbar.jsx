export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800/60 bg-neutral-950/70 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-lg font-semibold tracking-tight">
          Dushan
        </a>
        <div className="hidden gap-6 md:flex">
          <a
            href="#projects"
            className="text-sm text-neutral-300 hover:text-white"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-sm text-neutral-300 hover:text-white"
          >
            Contact
          </a>
        </div>
        <a
          href="#contact"
          className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500 md:inline-block"
        >
          Hire Me
        </a>
      </nav>
    </header>
  );
}
