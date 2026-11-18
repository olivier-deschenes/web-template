import type { ComponentType } from 'react'

import { Chip, Figure, Footer, Shot } from './kit'
import { m } from '#/paraglide/messages'
import { site } from '#/site'

// One picture per visible release, keyed by its version in CHANGELOG.md.
// Use a `BeforeAfter` pair when a release changes something that existed and
// a single `Shot` when it adds something new. Keep each one small and static,
// and reuse the `m.*` labels the real UI shows. Tooling, docs and refactor
// releases get none. `previews.test.ts` checks every key is a real release.
export const previews: Record<string, ComponentType> = {
  '0.1.0': () => (
    <Figure>
      <Shot>
        <div className="grid gap-1 px-3 py-4">
          <span className="text-sm font-semibold">{m.changelog_title()}</span>
          <span className="flex items-center gap-2 font-mono">
            v0.1.0 <Chip>{m.changelog_latest()}</Chip>
          </span>
        </div>
        <Footer>
          <span className="flex-1">{site.name}</span>
          <span className="font-mono">
            {m.app_version({ version: '0.1.0' })}
          </span>
        </Footer>
      </Shot>
    </Figure>
  ),
}
