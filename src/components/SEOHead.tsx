import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  type?: string;
}

const SITE_URL = "https://westdigitalhub.com";
const DEFAULT_OG_IMAGE = "/logo.png";
const SITE_NAME = "West Digital Hub";

export function SEOHead({ title, description, keywords, ogImage, type = "website" }: SEOHeadProps) {
  const location = useLocation();
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const canonicalUrl = `${SITE_URL}${location.pathname}`;
  const image = ogImage || DEFAULT_OG_IMAGE;
  const fullImage = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  useEffect(() => {
    document.title = fullTitle;

    const setMeta = (name: string, content: string, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description);
    if (keywords) setMeta("keywords", keywords);
    setMeta("robots", "index, follow");

    // Open Graph
    setMeta("og:title", fullTitle, "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", type, "property");
    setMeta("og:url", canonicalUrl, "property");
    setMeta("og:image", fullImage, "property");
    setMeta("og:site_name", SITE_NAME, "property");
    setMeta("og:locale", "en_US", "property");

    // Twitter
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);
    setMeta("twitter:image", fullImage);

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);

    // JSON-LD
    const existingJsonLd = document.querySelector('script[data-seo="jsonld"]');
    if (existingJsonLd) existingJsonLd.remove();

    const jsonLd = document.createElement("script");
    jsonLd.type = "application/ld+json";
    jsonLd.setAttribute("data-seo", "jsonld");
    jsonLd.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      description: "Technology consulting, product development and tech outsourcing from Cameroon to the world.",
      address: {
        "@type": "PostalAddress",
        addressCountry: "CM",
        addressLocality: "Douala",
      },
      sameAs: [],
      areaServed: "Worldwide",
      foundingLocation: "Cameroon",
      knowsAbout: [
        "Software Development", "Tech Outsourcing", "Digital Consulting",
        "Bootcamp Training", "Community Management", "Digital Marketing",
      ],
    });
    document.head.appendChild(jsonLd);

    return () => {
      const el = document.querySelector('script[data-seo="jsonld"]');
      if (el) el.remove();
    };
  }, [fullTitle, description, keywords, canonicalUrl, fullImage, type]);

  return null;
}
