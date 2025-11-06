import React, { useState } from 'react';
import Header from './components/Header';
import SourceForm from './components/SourceForm';
import SourcesList from './components/SourcesList';
import DatasetPreview from './components/DatasetPreview';
import HowItWorks from './components/HowItWorks';

function App() {
  const [sources, setSources] = useState([]);

  const addSource = (src) => setSources((prev) => [src, ...prev]);
  const removeSource = (id) => setSources((prev) => prev.filter((s) => s.id !== id));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Header />

      <main className="max-w-6xl mx-auto px-4 pb-16 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <SourceForm onAdd={addSource} />
            <DatasetPreview items={sources} />
          </div>
          <div className="lg:col-span-1 space-y-4">
            <HowItWorks />
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-slate-800">Your sources</h3>
              <SourcesList items={sources} onRemove={removeSource} />
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-slate-500">
          This is a frontend demo. Connect to a backend scraper to fetch real content from the web, Reddit, and X.
        </div>
      </footer>
    </div>
  );
}

export default App;
