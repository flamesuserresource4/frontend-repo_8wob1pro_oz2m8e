import React, { useMemo } from 'react';

function toCSV(rows) {
  if (!rows.length) return '';
  const headers = Object.keys(rows[0]);
  const escape = (val) => {
    if (val === null || val === undefined) return '';
    const s = String(val);
    if (/[",\n]/.test(s)) {
      return '"' + s.replace(/"/g, '""') + '"';
    }
    return s;
  };
  const lines = [headers.join(',')];
  for (const r of rows) {
    lines.push(headers.map((h) => escape(r[h])).join(','));
  }
  return lines.join('\n');
}

export default function DatasetPreview({ items }) {
  const rows = useMemo(() => {
    // For the demo, synthesize simple rows from source entries
    return items.map((s, i) => ({
      id: i + 1,
      source_type: s.type,
      source_url: s.value,
      captured_at: s.createdAt,
      title: 'Sample title from ' + s.type,
      snippet: 'Lorem ipsum preview extracted from the source.'
    }));
  }, [items]);

  const csv = useMemo(() => toCSV(rows), [rows]);

  const download = () => {
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'dataset.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
      <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200">
        <h3 className="text-sm font-semibold text-slate-800">Dataset Preview</h3>
        <button
          onClick={download}
          disabled={!rows.length}
          className="inline-flex items-center bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white text-sm font-medium px-3 py-1.5 rounded-md"
        >
          Download CSV
        </button>
      </div>

      <div className="overflow-auto max-h-80">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate-50 sticky top-0">
            <tr>
              {rows.length > 0 && Object.keys(rows[0]).map((h) => (
                <th key={h} className="px-4 py-2 font-semibold text-slate-700 border-b border-slate-200 whitespace-nowrap">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <tr>
                <td className="px-4 py-6 text-slate-500" colSpan={6}>No data yet. Add sources to build your dataset.</td>
              </tr>
            ) : (
              rows.map((r) => (
                <tr key={r.id} className="odd:bg-white even:bg-slate-50">
                  {Object.keys(r).map((k) => (
                    <td key={k} className="px-4 py-2 border-b border-slate-100 max-w-[22rem] truncate" title={String(r[k])}>
                      {String(r[k])}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
