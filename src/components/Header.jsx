import React from 'react';
import { Database, Globe, Reddit, Twitter } from 'lucide-react';

export default function Header() {
  return (
    <div className="max-w-6xl mx-auto px-4 pt-10 pb-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Web Data → CSV Studio
          </h1>
          <p className="mt-2 text-slate-600 max-w-3xl">
            Collect content from webpages, public datasets, and social threads, then
            review and export a clean CSV. This interface is ready to connect to a
            backend scraper for full automation.
          </p>
        </div>
        <div className="hidden sm:flex items-center gap-3 text-slate-600">
          <Globe className="w-5 h-5" />
          <Reddit className="w-5 h-5" />
          <Twitter className="w-5 h-5" />
          <Database className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
}
