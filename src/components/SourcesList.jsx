import React from 'react';
import { Globe, Reddit, Twitter, Table, Trash2 } from 'lucide-react';

const typeIcon = (type) => {
  const common = 'w-4 h-4';
  if (type === 'reddit') return <Reddit className={common} />;
  if (type === 'x') return <Twitter className={common} />;
  if (type === 'dataset') return <Table className={common} />;
  return <Globe className={common} />;
};

export default function SourcesList({ items, onRemove }) {
  if (!items.length) {
    return (
      <div className="w-full text-center text-slate-500 text-sm">
        No sources added yet. Paste a URL above to get started.
      </div>
    );
  }

  return (
    <ul className="divide-y divide-slate-200 bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
      {items.map((s) => (
        <li key={s.id} className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3 min-w-0">
            <span className="shrink-0 inline-flex items-center justify-center rounded-md bg-slate-100 p-2 text-slate-700">
              {typeIcon(s.type)}
            </span>
            <div className="min-w-0">
              <p className="text-sm font-medium text-slate-900 truncate">
                {s.value}
              </p>
              <p className="text-xs text-slate-500">{s.type.toUpperCase()} • {new Date(s.createdAt).toLocaleString()}</p>
            </div>
          </div>
          <button
            onClick={() => onRemove(s.id)}
            className="text-slate-500 hover:text-red-600 inline-flex items-center gap-1"
            aria-label="Remove source"
          >
            <Trash2 className="w-4 h-4" />
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
}
