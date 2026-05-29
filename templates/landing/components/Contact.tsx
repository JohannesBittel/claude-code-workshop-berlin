import { contact } from "../content";

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          {contact.heading}
        </h2>
        <p className="text-lg text-ink/70 max-w-2xl leading-relaxed mb-10">
          {contact.body}
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <p className="text-sm font-medium uppercase tracking-wider text-ink/50">
              Connect
            </p>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-accent text-white rounded-full font-medium hover:opacity-90 transition"
            >
              Message me on LinkedIn
            </a>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium uppercase tracking-wider text-ink/50">
              Hours
            </p>
            <p className="text-lg">{contact.hours}</p>
            <p className="text-sm font-medium uppercase tracking-wider text-ink/50 pt-4">
              Studio
            </p>
            <p className="text-lg">{contact.address}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
