---
name: release
description: Version and document a change before committing in this repo. Use at the end of every task, before every commit, or when asked to bump the version, update the changelog or add a changelog preview.
---

# Release a change

Every commit in this repo is a release. Do all of these in the same commit as the change.

## 1. Pick the version

Read `version` in `package.json` and bump it:

- **Major**: breaking changes to stored data, URLs or file formats.
- **Minor**: new features and visible behavior changes.
- **Patch**: fixes, refactors, docs and tooling.

Several commits going out together each get their own version.

## 2. Write the changelog entry

Add it at the top of `CHANGELOG.md`, under the intro and above the previous release:

```md
## [1.4.0] - 2026-11-18

### Added

- Pricing page with monthly and yearly plans.

### Fixed

- The language menu closes after picking a language.
```

- The heading must match `## [x.y.z] - YYYY-MM-DD` exactly, with today's date, or the page and tests skip it.
- Use only the sections that apply: `### Added`, `### Changed`, `### Fixed`.
- Short bullets in plain words, written for the people using the site. Say what they can now do or what behaves differently, not which files changed.
- Inline code (`` `like this` ``) renders as a muted chip; use it for keys, paths and values users type.
- Releases with more than 12 bullets fold after the first 6 on the page, so lead with the most important ones.

## 3. Add a preview for visible changes

If users can see the change, add a picture keyed by the new version in `src/components/changelog/previews.tsx`:

```tsx
'1.4.0': () => (
  <Figure>
    <Shot>…the new thing…</Shot>
  </Figure>
),
```

- New thing: one `Shot`. Changed thing: `<BeforeAfter before={…} after={…} />`.
- Build from the parts in `src/components/changelog/kit.tsx` (`Figure`, `Shot`, `BeforeAfter`, `Chip`, `Footer`). When a preview needs a part that isn't there, add a small static one to the kit rather than importing live components.
- Keep it small and static, use theme tokens (`bg-background`, `text-muted-foreground`, `border`) so it works in light and dark, and reuse existing `m.*` labels instead of new copy.
- Tooling, docs and refactor releases get no preview.
- Check it on `/changelog` in light and dark.

## 4. Verify

```bash
bun run check && bun run lint && bun run typecheck && bun run test
```

`src/lib/version.test.ts` fails if the newest entry doesn't match `package.json`, and `src/components/changelog/previews.test.ts` fails if a preview's version isn't a release in `CHANGELOG.md`.

## 5. Commit

Commit the change, `package.json`, `CHANGELOG.md` and any preview together with a concise imperative subject (≤72 chars) and a body explaining what changed and why. Report the new version and commit hash.
