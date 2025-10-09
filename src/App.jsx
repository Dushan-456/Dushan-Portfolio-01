import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { getProfile, getProjects } from "./lib/api";

function App() {
  const [profile, setProfile] = useState(null);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const [p, pr] = await Promise.all([getProfile(), getProjects()]);
        if (mounted) {
          setProfile(p?.data || p);
          setProjects(pr?.data || pr || []);
        }
      } catch (e) {
        console.error(e);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <main className="min-h-dvh">
      <Navbar />
      <Hero profile={profile} />
      <Projects projects={projects} />
      <Contact />
      <footer className="mx-auto max-w-7xl px-6 py-10 text-center text-sm text-neutral-400">
        © {new Date().getFullYear()} Dushan. All rights reserved.
      </footer>
    </main>
  );
}

export default App;
