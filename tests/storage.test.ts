import { beforeEach, describe, expect, it } from 'vitest';
import { fakeBrowser } from 'wxt/testing/fake-browser';
import { settingsStorage } from '@/lib/storage';

describe('settings storage', () => {
  beforeEach(() => fakeBrowser.reset());
  it('uses enabled as the default', async () => { expect(await settingsStorage.getValue()).toEqual({ enabled: true }); });
});
