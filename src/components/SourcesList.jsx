import { Globe, Reddit, Twitter, Database, Trash2 } from "lucide-react";

const typeIcon = {
  web: Globe,
  reddit: Reddit,
  x: Twitter,
  dataset: Database,
};

export default function SourcesList({ sources, onRemove }) {
  if (!sources.length) {
    return (
      <div className="rounded-lg border border-dashed border-slate-300 p-6 text-center text-sm text-slate-500">
        No sources yet. Add a few links to get started.
      </div>
    );
  }

  return (
    <ul className="divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white">
      {sources.map((s) => {
        const Icon = typeIcon[s.type] || Globe;
        return (
          <li key={s.id} className="flex items-center justify-between gap-3 p-3">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-slate-100 text-slate-700">
                <Icon className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-medium text-slate-800">{s.url}</p>
                <p className="text-xs text-slate-500">{s.type}</p>
              </div>
            </div>
            <button
              onClick={() => onRemove(s.id)}
              className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-xs text-slate-700 shadow-sm hover:bg-slate-50"
            >
              <Trash2 className="h-4 w-4" />
              Remove
            </button>
          </li>
        );
      })}
    </ul>
  );
}
