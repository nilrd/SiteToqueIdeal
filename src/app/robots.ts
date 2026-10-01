import type { MetadataRoute } from 'next'
import { TOQUE } from '@/config/toque'

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: '*', allow: '/' }, sitemap: `${TOQUE.url}/sitemap.xml` }
}
