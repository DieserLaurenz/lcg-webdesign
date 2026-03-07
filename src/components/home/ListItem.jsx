import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function ListItem({ text, dark = false }) {
  return (
    <li className="flex items-start gap-2.5">
      <CheckCircle size={18} className={`shrink-0 mt-0.5 ${dark ? 'text-blue-400' : 'text-blue-900'}`} />
      <span className={`text-sm leading-relaxed ${dark ? 'text-slate-300' : 'text-slate-700'}`}>{text}</span>
    </li>
  );
}
