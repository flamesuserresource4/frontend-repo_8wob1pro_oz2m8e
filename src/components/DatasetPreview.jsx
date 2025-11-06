import { useMemo } from "react";
import { FileSpreadsheet, Table } from "lucide-react";

function toCSV(rows) {
  if (!rows.length) return "";
  const headers = Object.keys(rows[0]);
  const escape = (v) => {
    const s = String(v ?? "");
    if (s.includes(",") || s.includes("\n") || s.includes('"')) {
      return '"' + s.replaceAll('"', '""') + '"';
    }
    return s;
  };
  const lines = [headers.join(","), ...rows.map((r) => headers.map((h) => escape(r[h])).join(","))];
  return lines.join("\n");
}

export default function DatasetPreview({ sources }) {
  const rows = useMemo(() => {
    // Synthesize a simple preview from the sources list
    return sources.map((s, idx) => ({
      id: idx + 1,
      source_type: s.type,
      url: s.url,
      title: `Sample title for ${new URL(s.url).hostname}`,
      snippet: `Preview snippet generated from ${s.type} content`,
    }));
  }, [sources]);

  const download = ()n  => {
    const csv = toCSV(rows);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "dataset.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="rounded-lg border border-slate-200 bg-white">
      <div className="flex items-center justify-between border-b border-slate-200 p-3">
        <div className="flex items-center gap-2 text-slate-700">
          <Table className="h-4 w-4" />
          <span className="text-sm font-medium">Dataset Preview</span>
        </div>
        <button
          onClick={download}
          className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-3 py-1.5 text-xs font-medium text-white shadow hover:bg-emerald-700"
        >
          <FileSpreadsheet className="h-4 w-4" />
          Export CSV
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200 text-sm">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-3 py-2 text-left font-semibold text-slate-700">ID</th>
              <th className="px-3 py-2 text-left font-semibold text-slate-700">Type</th>
              <th className="px-3 py-2 text-left font-semibold text-slate-700">URL</th>
              <th className="px-3 py-2 text-left font-semibold text-slate-700">Title</th>
              <th className="px-3 py-2 text-left font-semibold text-slate-700">Snippet</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {rows.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-3 py-6 text-center text-slate-500">
                  Add sources to see a preview here.
                </td>
              </tr>
            ) : (
              rows.map((r) => (
                <tr key={r.id} className="hover:bg-slate-50">
                  <td className="px-3 py-2 text-slate-700">{r.id}</td>
                  <td className="px-3 py-2 capitalize text-slate-700">{r.source_type}</td>
                  <td className="max-w-[280px] truncate px-3 py-2 text-indigo-600 underline decoration-indigo-300 underline-offset-2">
                    <a href={r.url} target="_blank" rel="noreferrer">
                      {r.url}
                    </a>
                  </td>
                  <td className="px-3 py-2 text-slate-700">{r.title}</td>
                  <td className="px-3 py-2 text-slate-600">{r.snippet}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
