import { Link } from '@tanstack/react-router'

import { appVersion } from '#/lib/version'
import { m } from '#/paraglide/messages'
import { site } from '#/site'

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-5xl items-center gap-6 px-4 py-6 text-sm text-muted-foreground">
        <span className="flex-1">
          {m.footer_rights({ year: new Date().getFullYear(), name: site.name })}
        </span>
        <Link
          to="/changelog"
          aria-label={m.app_version_label({ version: appVersion })}
          className="rounded-sm font-mono tabular-nums transition-colors outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
        >
          {m.app_version({ version: appVersion })}
        </Link>
      </div>
    </footer>
  )
}
