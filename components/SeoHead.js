import React from "react";
import { routing } from "@/i18n/routing";

const baseUrl = `https://www.gulfhorizontele.com`;

const SEOHead = ({
  title,
  description,
  locale,
  pageUrl,
  ogImage = "/og-image.jpg",
  author = "Gulf Horizon Telecom Est",
  keywords = "Power solutions, Security solutions, IT solutions, UPS systems, Cybersecurity, CCTV systems, Generators Saudi Arabia, Power backup systems, Telecom services Saudi Arabia, Gulf Horizon Telecom Est",
}) => {
  console.log("locale", locale);

  const url = `${baseUrl}/${locale}${pageUrl}`;
  console.log("url", url);

  const schemaMarkup = {
    "@context": "http://schema.org",
    "@type": "WebPage",
    name: title,
    description: description,
    url: url,
  };

  const twitterImageAlt = "GHTE Twitter Image";
  const ogImageUrl = baseUrl + ogImage;

  return (
    <>
      {/* Meta Charset & Viewport */}
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Title Tag */}
      <title>{title}</title>

      {/* Canonical Tag */}
      <link rel="canonical" href={url} />

      {/* Hreflang Tags for Multi-language SEO */}
      {routing.locales.map((lang) => (
        <link
          key={lang}
          rel="alternate"
          hrefLang={lang}
          href={`${baseUrl}/${lang}`}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={baseUrl} />

      {/* Meta Tags */}
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:alt" content="GHTE Open Graph Image" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={locale} />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />
      <meta name="twitter:image:alt" content={twitterImageAlt} />

      {/* Robots Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content={author} />
      <meta name="publisher" content={author} />

      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      {/* Optional: Add Breadcrumb Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: title,
                item: url,
              },
            ],
          }),
        }}
      />
    </>
  );
};

export default SEOHead;
