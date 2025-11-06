import { Database, Rocket, FileSpreadsheet } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex items-start justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full bg-slate-800/70 px-3 py-1 text-slate-300 ring-1 ring-white/10 backdrop-blur">
              <Database className="h-4 w-4" />
              <span className="text-xs">Web → Structured CSV</span>
            </div>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Smart Web Data Collector</h1>
            <p className="mt-2 max-w-2xl text-sm text-slate-300">
              Add links to web pages, Reddit threads, X posts, or public datasets. Preview a clean table and export to CSV.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-3 text-slate-300">
            <Rocket className="h-5 w-5" />
            <FileSpreadsheet className="h-5 w-5" />
          </div>
        </div>
      </div>
    </header>
  );
}
