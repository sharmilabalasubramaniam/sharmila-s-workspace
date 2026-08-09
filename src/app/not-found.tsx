import Link from 'next/link';
import { Chrome as Home, ArrowLeft } from 'lucide-react';
import Button from '@/components/Button';

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[70vh] flex-col items-center justify-center text-center">
      <p className="font-display text-7xl font-bold text-gradient">404</p>
      <h1 className="mt-4 heading-md">Page not found</h1>
      <p className="mt-3 max-w-md text-muted">
        The page you are looking for may have been moved or no longer exists.
      </p>
      <div className="mt-8 flex gap-4">
        <Button href="/">
          <Home size={16} /> Back home
        </Button>
        <Button href="/projects" variant="secondary">
          <ArrowLeft size={16} /> View projects
        </Button>
      </div>
    </section>
  );
}
