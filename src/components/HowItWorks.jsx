import React from 'react';
import { UploadCloud, Wrench, FileSpreadsheet } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: UploadCloud,
      title: 'Add sources',
      text: 'Paste links to webpages, Reddit/X threads, or open datasets.'
    },
    {
      icon: Wrench,
      title: 'Normalize',
      text: 'Backend cleans and structures content into a common schema.'
    },
    {
      icon: FileSpreadsheet,
      title: 'Export CSV',
      text: 'Preview rows, then download a clean CSV for analysis.'
    }
  ];

  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-slate-200 p-6">
      <h3 className="text-lg font-semibold text-slate-900">How it works</h3>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {steps.map((s) => (
          <div key={s.title} className="flex items-start gap-3">
            <span className="inline-flex items-center justify-center p-2 rounded-lg bg-white border border-slate-200 text-slate-700 shadow-sm">
              <s.icon className="w-5 h-5" />
            </span>
            <div>
              <p className="font-medium text-slate-900">{s.title}</p>
              <p className="text-sm text-slate-600">{s.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
