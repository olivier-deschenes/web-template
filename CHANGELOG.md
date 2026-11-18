# Changelog

Every change bumps `version` in `package.json` and adds an entry here, newest first. The version shows in the site footer and links to the changelog page.

- **Major**: breaking changes to stored data, URLs or file formats.
- **Minor**: new features and visible behavior changes.
- **Patch**: fixes, refactors, docs and tooling.

Visible changes also get a picture on the changelog page: add the version to `previews` in `src/components/changelog/previews.tsx`.

## [0.1.1] - 2026-11-18

### Changed

- Pushing `main` runs the checks and deploys to Cloudflare through a versioned pre-push hook, and Knip now checks for unused files, exports and dependencies.

## [0.1.0] - 2026-11-18

### Added

- Changelog page at `/changelog`, built from `CHANGELOG.md`, with a picture for visible releases and long releases folded after their first bullets.
- The site version shows in the footer and links to the changelog.
