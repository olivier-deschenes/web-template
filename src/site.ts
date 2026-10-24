// Site-wide identity used by the SEO helper, sitemap and manifest.
// `bun run init` rewrites these values when starting a new site.
export const site = {
  name: 'Web Template',
  description: 'A TanStack Start website template.',
  url: 'http://localhost:3000',
  twitter: '',
} as const
