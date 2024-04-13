import { MetadataRoute } from 'next'
import { basePath, locales } from '@/config/site'

const articles = ['agreeableness', 'conscientiousness', 'extraversion', 'neuroticism', 'openness']

export default function sitemap(): MetadataRoute.Sitemap {
  const alternatesPageLang = (path: string = '') => locales.reduce((a, v) => ({ ...a, [v]: basePath + `/${v}${path}` }), {})
  return [
    {
      url: basePath,
      lastModified: new Date(),
      alternates: {
        languages: alternatesPageLang()
      }
    },
    {
      url: basePath,
      lastModified: new Date(),
      alternates: {
        languages: alternatesPageLang('/result')
      }
    },
    {
      url: `${basePath}/result/58a70606a835c400c8b38e84`,
      lastModified: new Date(),
      // add lang
    },
    {
      url: `${basePath}/compare/W3sibmFtZSI6Ik1hcnZpbiIsImlkIjoiNThhNzA2MDZhODM1YzQwMGM4YjM4ZTg0In0seyJuYW1lIjoiQXJ0aHVyIERlbnQiLCJpZCI6IjVlNTZiYTdhYjA5NjEzMDAwN2Q1ZDZkOCJ9LHsibmFtZSI6IkZvcmQgUGVyZmVjdCIsImlkIjoiNWRlYTllODhlMTA4Y2IwMDYyMTgzYWYzIn0seyJuYW1lIjoiU2xhcnRpYmFydGZhc3QiLCJpZCI6IjVlNTZiNjUwYjA5NjEzMDAwN2Q1ZDZkMCJ9XQ==`,
      lastModified: new Date(),
      // add lang
    },
    {
      url: `${basePath}/test`,
      lastModified: new Date(),
      // add lang
    },
    {
      url: `${basePath}/about`,
      lastModified: new Date(),
    },
    {
      url: `${basePath}/faq`,
      lastModified: new Date(),
    },
    {
      url: `${basePath}/privacy`,
      lastModified: new Date(),
    },
    {
      url: `${basePath}/articles`,
      lastModified: new Date(),
    },
    ...articles.map((article) => ({
      url: `${basePath}/articles/${article}`,
      lastModified: new Date(),
    }))
  ]
}
