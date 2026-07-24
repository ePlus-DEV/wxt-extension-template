import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/assets/main.css';
import { t } from '@/lib/i18n';

function Options() { return <main className="mx-auto max-w-2xl p-8"><h1 className="text-2xl font-bold">{t('settings')}</h1></main>; }
ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode><Options /></React.StrictMode>);
