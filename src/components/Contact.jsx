import { useState } from "react";
import { sendContact } from "../lib/api";

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    setError("");
    const form = new FormData(e.currentTarget);
    const payload = {
      name: form.get("name"),
      email: form.get("email"),
      message: form.get("message"),
    };
    try {
      await sendContact(payload);
      setStatus("success");
      e.currentTarget.reset();
    } catch (err) {
      setError(err.message || "Failed to send");
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-2xl px-6 py-16">
      <h2 className="text-2xl font-semibold">Contact</h2>
      <form onSubmit={onSubmit} className="mt-6 space-y-4">
        <input
          name="name"
          placeholder="Your name"
          required
          className="w-full rounded-md border border-neutral-800 bg-neutral-900 px-4 py-3 outline-none focus:border-neutral-600"
        />
        <input
          name="email"
          type="email"
          placeholder="Your email"
          required
          className="w-full rounded-md border border-neutral-800 bg-neutral-900 px-4 py-3 outline-none focus:border-neutral-600"
        />
        <textarea
          name="message"
          placeholder="Your message"
          rows="5"
          required
          className="w-full rounded-md border border-neutral-800 bg-neutral-900 px-4 py-3 outline-none focus:border-neutral-600"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-500 disabled:opacity-60"
        >
          {status === "loading" ? "Sending..." : "Send message"}
        </button>
        {status === "success" && (
          <p className="text-sm text-green-400">
            Thanks! I will get back to you.
          </p>
        )}
        {status === "error" && <p className="text-sm text-red-400">{error}</p>}
      </form>
    </section>
  );
}
