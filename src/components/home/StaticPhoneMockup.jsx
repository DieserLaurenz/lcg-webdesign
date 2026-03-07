import React from 'react';

export default function StaticPhoneMockup() {
  return (
    <div className="relative mx-auto w-[280px] h-[580px] bg-slate-900 rounded-[3rem] p-2 shadow-2xl ring-1 ring-slate-900/50">
      <div className="absolute top-24 -left-1 w-1 h-10 bg-slate-800 rounded-l-md"></div>
      <div className="absolute top-36 -left-1 w-1 h-10 bg-slate-800 rounded-l-md"></div>
      <div className="absolute top-32 -right-1 w-1 h-14 bg-slate-800 rounded-r-md"></div>

      <div className="relative w-full h-full bg-slate-50 rounded-[2.5rem] overflow-hidden border-[3px] border-slate-950">
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full z-20 pointer-events-none flex items-center justify-end px-2">
          <div className="w-2.5 h-2.5 bg-slate-800 rounded-full border border-slate-700/50"></div>
        </div>
        <img
          src="/webdesign-berlin-bodywork-praxis-beispiel-mobile.webp"
          alt="Bodywork Berlin Mobile Screenshot"
          className="w-full h-full object-cover object-top block"
        />
      </div>
    </div>
  );
}
