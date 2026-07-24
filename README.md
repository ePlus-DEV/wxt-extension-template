# WXT Extension Template

Production-ready WXT + React + TypeScript template, consolidated from the conventions used by ePlus.DEV extensions.

## Included

- WXT with `src/` layout and Manifest V3
- React 19 and Tailwind CSS 4
- Popup, options, background and content-script examples
- Type-safe storage wrapper
- Browser-native i18n in `public/_locales`
- Chrome, Firefox, Edge and Opera builds
- Vitest with WXT fake browser
- ESLint, strict TypeScript, CI and tag-based GitHub Releases

## Start a project

```bash
corepack enable
yarn install
yarn dev
```

Firefox development:

```bash
yarn dev:firefox
```

## Customize first

1. Rename the package and update version/author in `package.json`.
2. Replace `example.com` matches in `wxt.config.ts` and `src/entrypoints/content.ts`.
3. Change the Firefox extension ID.
4. Replace `public/icon.svg` and localization messages.
5. Keep permissions minimal; only add permissions required by features.
6. Add store secrets using `wxt submit init` only when automated publishing is needed.

## Validation

```bash
yarn check
yarn zip:all
```

## Branch and release convention

- `main`: stable releases
- `dev`: integration branch
- feature branches: `feat/...`, `fix/...`, `docs/...`
- release tags: `vMAJOR.MINOR.PATCH`

## License

MIT — ePlus.DEV
