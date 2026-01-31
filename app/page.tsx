import AppGrid from "./components/AppGrid";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans">
      <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            Dev Apps Portal
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">
            A central hub for all my side projects and experimental applications.
          </p>
        </header>

        <AppGrid />
      </main>

      <footer className="py-8 text-center text-slate-500 dark:text-slate-500 text-sm border-t border-slate-200 dark:border-slate-800">
        &copy; {new Date().getFullYear()} Dev Apps Portal. Built with Next.js and Tailwind CSS.
      </footer>
    </div>
  );
}
