import { ListChecks, Wrench, UploadCloud } from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5">
      <h2 className="mb-3 text-base font-semibold text-slate-800">How it works</h2>
      <ol className="grid gap-3 sm:grid-cols-3">
        <li className="rounded-md border border-slate-200 p-3">
          <div className="flex items-center gap-2 text-slate-700">
            <UploadCloud className="h-4 w-4" />
            <span className="text-sm font-medium">Add sources</span>
          </div>
          <p className="mt-1 text-xs text-slate-600">Paste URLs for web pages, Reddit, X threads, or datasets.</p>
        </li>
        <li className="rounded-md border border-slate-200 p-3">
          <div className="flex items-center gap-2 text-slate-700">
            <Wrench className="h-4 w-4" />
            <span className="text-sm font-medium">Normalize</span>
          </div>
          <p className="mt-1 text-xs text-slate-600">We structure titles, links, and snippets into tidy rows.</p>
        </li>
        <li className="rounded-md border border-slate-200 p-3">
          <div className="flex items-center gap-2 text-slate-700">
            <ListChecks className="h-4 w-4" />
            <span className="text-sm font-medium">Export</span>
          </div>
          <p className="mt-1 text-xs text-slate-600">Preview the table and export ready-to-use CSV.</p>
        </li>
      </ol>
    </section>
  );
}
