import { useState } from "react";
import Header from "./components/Header.jsx";
import SourceForm from "./components/SourceForm.jsx";
import SourcesList from "./components/SourcesList.jsx";
import DatasetPreview from "./components/DatasetPreview.jsx";
import HowItWorks from "./components/HowItWorks.jsx";

export default function App() {
  const [sources, setSources] = useState([]);

  const addSource = (s) => setSources((prev) => [s, ...prev]);
  const removeSource = (id) => setSources((prev) => prev.filter((x) => x.id !== id));

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <main className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <section className="lg:col-span-2 space-y-4">
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <SourceForm onAdd={addSource} />
            </div>

            <SourcesList sources={sources} onRemove={removeSource} />

            <DatasetPreview sources={sources} />
          </section>

          <aside className="lg:col-span-1">
            <HowItWorks />
          </aside>
        </div>
      </main>
    </div>
  );
}
