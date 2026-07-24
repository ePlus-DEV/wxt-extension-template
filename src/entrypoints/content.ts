export default defineContentScript({
  matches: ['https://example.com/*'],
  runAt: 'document_idle',
  main() { console.debug('WXT template content script loaded'); },
});
