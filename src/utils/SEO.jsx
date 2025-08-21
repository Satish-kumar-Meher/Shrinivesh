import { useEffect } from 'react'
import { seoConfig, baseSiteUrl } from './seoConfig'

function ensureTag(selector, create) {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = create()
    document.head.appendChild(el)
  }
  return el
}

function setMetaByName(name, content) {
  if (!content) return
  const el = ensureTag(`meta[name="${name}"]`, () => {
    const m = document.createElement('meta')
    m.setAttribute('name', name)
    return m
  })
  el.setAttribute('content', content)
}

function setMetaByProperty(property, content) {
  if (!content) return
  const el = ensureTag(`meta[property="${property}"]`, () => {
    const m = document.createElement('meta')
    m.setAttribute('property', property)
    return m
  })
  el.setAttribute('content', content)
}

function setLinkCanonical(href) {
  if (!href) return
  const el = ensureTag('link[rel="canonical"]', () => {
    const l = document.createElement('link')
    l.setAttribute('rel', 'canonical')
    return l
  })
  el.setAttribute('href', href)
}

function setRobots(content) {
  setMetaByName('robots', content || 'index, follow')
}

function setTwitterCard(meta) {
  setMetaByName('twitter:card', meta.card || 'summary_large_image')
  if (meta.title) setMetaByName('twitter:title', meta.title)
  if (meta.description) setMetaByName('twitter:description', meta.description)
  if (meta.image) setMetaByName('twitter:image', meta.image)
  if (meta.site) setMetaByName('twitter:site', meta.site)
}

function setOpenGraph(meta) {
  if (meta.title) setMetaByProperty('og:title', meta.title)
  if (meta.description) setMetaByProperty('og:description', meta.description)
  if (meta.url) setMetaByProperty('og:url', meta.url)
  if (meta.type) setMetaByProperty('og:type', meta.type)
  if (meta.image) setMetaByProperty('og:image', meta.image)
  if (meta.siteName) setMetaByProperty('og:site_name', meta.siteName)
  if (meta.locale) setMetaByProperty('og:locale', meta.locale)
  if (meta.imageAlt) setMetaByProperty('og:image:alt', meta.imageAlt)
}

function setJsonLd(jsonLd) {
  if (!jsonLd) return
  let scriptEl = document.head.querySelector('script[type="application/ld+json"][data-auto]')
  if (!scriptEl) {
    scriptEl = document.createElement('script')
    scriptEl.setAttribute('type', 'application/ld+json')
    scriptEl.setAttribute('data-auto', 'true')
    document.head.appendChild(scriptEl)
  }
  scriptEl.textContent = JSON.stringify(jsonLd)
}

function SEO({ path, title, description, image, noindex = false, jsonLd }) {
  useEffect(() => {
    const normalizedPath = typeof path === 'string' ? path : window.location.pathname
    const conf = seoConfig[normalizedPath] || {}

    const pageTitle = title || conf.title || 'Shri Nivesh'
    const pageDescription = description || conf.description || 'Trusted mutual fund advisor and financial planning partner.'
    const canonicalUrl = conf.canonical ? conf.canonical : new URL(normalizedPath || '/', baseSiteUrl).toString()
    const rawImage = image || conf.image || '/Logo1.jpg'
    const absoluteOgImage = /^https?:\/\//i.test(rawImage) ? rawImage : new URL(rawImage, baseSiteUrl).toString()
    const siteName = 'Shri Nivesh'
    const locale = 'en_IN'

    document.title = pageTitle
    setMetaByName('description', pageDescription)
    setRobots(noindex ? 'noindex, nofollow' : 'index, follow')
    setLinkCanonical(canonicalUrl)

    setOpenGraph({
      title: pageTitle,
      description: pageDescription,
      url: canonicalUrl,
      type: conf.ogType || 'website',
      image: absoluteOgImage,
      siteName,
      locale,
      imageAlt: pageTitle,
    })

    setTwitterCard({
      title: pageTitle,
      description: pageDescription,
      image: absoluteOgImage,
      card: 'summary_large_image',
      site: '@shrinivesh',
    })
    setMetaByName('twitter:image:alt', pageTitle)

    // Build default JSON-LD if none provided in props/config
    const jsonList = []

    if (conf.jsonLd) jsonList.push(conf.jsonLd)
    if (jsonLd) jsonList.push(jsonLd)

    const webPage = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: pageTitle,
      description: pageDescription,
      url: canonicalUrl,
    }
    jsonList.push(webPage)

    const segments = (normalizedPath || '/')
      .split('/')
      .filter(Boolean)
    if (segments.length > 0) {
      const breadcrumb = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: segments.map((seg, idx) => {
          const itemPath = '/' + segments.slice(0, idx + 1).join('/')
          return {
            '@type': 'ListItem',
            position: idx + 1,
            name: seg.replace(/[-_]/g, ' '),
            item: new URL(itemPath, baseSiteUrl).toString(),
          }
        })
      }
      jsonList.push(breadcrumb)
    }

    const organization = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: siteName,
      url: baseSiteUrl,
      logo: new URL('/Logo.png', baseSiteUrl).toString(),
    }
    jsonList.push(organization)

    setJsonLd(jsonList)
  }, [path, title, description, image, noindex, jsonLd])

  return null
}

export default SEO
