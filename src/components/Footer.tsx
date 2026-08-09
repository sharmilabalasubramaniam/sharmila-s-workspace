import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { site, navLinks } from '@/data/site';

export default function Footer() {
  return (
    <footer className="border-t border-border-soft bg-ink">
      <div className="container-page py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="font-display text-lg font-bold text-content">
              Lumora<span className="text-accent"> Studio</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm text-muted">
              Light, clarity, and intelligent digital creation. Freelance web development and AI/data
              solutions by {site.name}.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">Navigation</h2>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted hover:text-content">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/journey" className="text-sm text-muted hover:text-content">
                  Journey
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-muted hover:text-content">
                  Privacy
                </Link>
              </li>
            </ul>
          </nav>

          {/* Connect */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">Connect</h2>
            <div className="mt-4 flex gap-3">
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border-soft text-muted transition-colors hover:border-accent/50 hover:text-content"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border-soft text-muted transition-colors hover:border-accent/50 hover:text-content"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${site.email}`}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border-soft text-muted transition-colors hover:border-accent/50 hover:text-content"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
            <p className="mt-4 text-sm text-muted">{site.location}</p>
          </div>
        </div>

        <div className="mt-10 border-t border-border-soft pt-6 text-center text-sm text-muted">
          © {new Date().getFullYear()} Lumora Studio. Crafted with care by {site.name}.
        </div>
      </div>
    </footer>
  );
}
