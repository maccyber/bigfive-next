import getDomain from './get-domain'

interface FacetOptions {
  language: string
  domain: string
  facet: string
}

export default function getFacet(options: FacetOptions) {
  const domain = getDomain(options)
  if (!domain) {
    throw new Error('Domain not found')
  }
  const facetId = options.facet.toString()
  const filtered = domain.facets.find(item => item.facet.toString() === facetId)
  return filtered
}
