import { storage } from '@wxt-dev/storage';

export interface Settings { enabled: boolean; }
export const settingsStorage = storage.defineItem<Settings>('sync:settings', {
  fallback: { enabled: true },
});
