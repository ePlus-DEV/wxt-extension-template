import { useEffect, useState } from 'react';
import { settingsStorage } from '@/lib/storage';
import { t } from '@/lib/i18n';

export function App() {
  const [enabled, setEnabled] = useState(true);
  useEffect(() => { void settingsStorage.getValue().then((value) => setEnabled(value.enabled)); }, []);
  const toggle = async () => {
    const next = !enabled;
    setEnabled(next);
    await settingsStorage.setValue({ enabled: next });
  };
  return (
    <main className="w-[360px] p-5">
      <div className="mb-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">ePlus.DEV</p>
        <h1 className="mt-1 text-xl font-bold">{t('extensionName')}</h1>
        <p className="mt-2 text-sm text-slate-500">{t('popupDescription')}</p>
      </div>
      <button className="w-full rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-700" onClick={toggle}>
        {enabled ? t('disable') : t('enable')}
      </button>
    </main>
  );
}
