import type { MetadataRoute } from 'next'
import { TOQUE } from '@/config/toque'

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: TOQUE.url, lastModified: new Date('2026-10-01'), changeFrequency: 'monthly', priority: 1 }]
}
