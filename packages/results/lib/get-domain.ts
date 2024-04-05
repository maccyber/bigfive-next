import { LanguageCode } from './data/languages'
import getTemplate from './get-template'

interface DomainOptions {
  language: LanguageCode
  domain: string
}

export default function getDomain(options: DomainOptions) {
  const template = getTemplate(options.language)
  if (!template) {
    throw new Error('Template not found')
  }
  const domainId = options.domain.toLowerCase()
  const filtered = template.find(item => item.domain.toLowerCase() === domainId)
  return filtered
}
