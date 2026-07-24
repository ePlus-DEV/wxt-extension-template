import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'wxt';

const extensionMatches = ['https://example.com/*'];

export default defineConfig({
  srcDir: 'src',
  modules: ['@wxt-dev/module-react', '@wxt-dev/auto-icons'],
  vite: () => ({ plugins: [tailwindcss()] }),
  manifest: ({ browser }) => ({
    name: '__MSG_extensionName__',
    description: '__MSG_extensionDescription__',
    default_locale: 'en',
    permissions: ['storage'],
    host_permissions: extensionMatches,
    action: { default_title: '__MSG_extensionName__' },
    browser_specific_settings:
      browser === 'firefox'
        ? {
            gecko: {
              id: 'wxt-template@eplus.dev',
              strict_min_version: '128.0',
              data_collection_permissions: { required: ['none'] },
            },
          }
        : undefined,
  }),
  autoIcons: { developmentIndicator: 'overlay' },
});
