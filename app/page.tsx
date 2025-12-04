import Hero from '@/components/Hero';
import Nav from '@/components/Nav';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-neutral-900 font-sans text-gray-900 dark:text-gray-100">
      {/* Nav is fixed (handles its own positioning) */}
      <Nav />

      <main className="w-full pt-20 lg:pt-24">
        <div className="mx-auto px-4 lg:px-2">
          <Hero />
          <section className="py-10"></section>
        </div>
      </main>
    </div>
  );
}
