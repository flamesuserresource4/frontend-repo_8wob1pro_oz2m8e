import React, { useState } from 'react';

export default function SourceForm({ onAdd }) {
  const [type, setType] = useState('web');
  const [input, setInput] = useState('');

  const submit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    onAdd({
      id: crypto.randomUUID(),
      type,
      value: input.trim(),
      createdAt: new Date().toISOString(),
    });
    setInput('');
  };

  return (
    <form onSubmit={submit} className="w-full bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
      <div className="flex flex-col sm:flex-row gap-3">
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full sm:w-40 bg-slate-50 border border-slate-300 text-slate-800 rounded-lg px-3 py-2"
        >
          <option value="web">Web Page URL</option>
          <option value="reddit">Reddit Thread URL</option>
          <option value="x">X (Twitter) Thread URL</option>
          <option value="dataset">Open Dataset URL</option>
        </select>
        <input
          type="url"
          placeholder="Paste a URL..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-white border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition"
        >
          Add Source
        </button>
      </div>
      <p className="mt-2 text-xs text-slate-500">
        This demo collects entries locally. Connect to the backend later to scrape and normalize data automatically.
      </p>
    </form>
  );
}
