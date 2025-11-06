import { useState } from "react";
import { Globe, Reddit, Twitter, Database, Plus } from "lucide-react";

const typeOptions = [
  { value: "web", label: "Web Page", icon: Globe },
  { value: "reddit", label: "Reddit Thread", icon: Reddit },
  { value: "x", label: "X Thread", icon: Twitter },
  { value: "dataset", label: "Open Dataset", icon: Database },
];

export default function SourceForm({ onAdd }) {
  const [type, setType] = useState("web");
  const [url, setUrl] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!url.trim()) return;
    onAdd({ id: crypto.randomUUID(), type, url: url.trim() });
    setUrl("");
  };

  const ActiveIcon = typeOptions.find((o) => o.value === type)?.icon || Globe;

  return (
    <form onSubmit={submit} className="w-full">
      <div className="grid gap-3 sm:grid-cols-[160px,1fr,120px]">
        <div className="relative">
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full appearance-none rounded-md border border-slate-300 bg-white py-2 pl-3 pr-8 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {typeOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
          <ActiveIcon className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
        </div>

        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Paste a URL..."
          className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-md bg-indigo-600 px-3 py-2 text-sm font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <Plus className="h-4 w-4" />
          Add
        </button>
      </div>
    </form>
  );
}
