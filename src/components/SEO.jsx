import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "Henderson Thomas Investigations - Professional Private Detective Services London",
  description = "UK's top-rated private detective agency specializing in corporate investigations, covert surveillance, and discreet investigative services. Professional, confidential solutions for all your investigation needs.",
  keywords = "private detective, private investigator, corporate investigations, covert surveillance, fraud investigation, missing persons, background checks, London, UK",
  image = "/logo.png",
  url = "",
  type = "website",
  structuredData = null
}) => {
  const fullTitle = title.includes("Henderson Thomas Investigations") ? title : `${title} | Henderson Thomas Investigations`;
  const fullUrl = url ? `https://hendersonthomasinvestigations.com${url}` : "https://hendersonthomasinvestigations.com";
  const fullImage = image.startsWith('http') ? image : `https://hendersonthomasinvestigations.com${image}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Henderson Thomas Investigations" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content="Henderson Thomas Investigations" />
      <meta property="og:locale" content="en_GB" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullImage} />

      {/* Additional SEO Meta Tags */}
      <meta name="geo.region" content="GB" />
      <meta name="geo.placename" content="London" />
      <meta name="geo.position" content="51.5074;-0.1278" />
      <meta name="ICBM" content="51.5074, -0.1278" />

      {/* Business Information */}
      <meta name="business:contact_data:street_address" content="1st Floor, 238 Kensington High St" />
      <meta name="business:contact_data:locality" content="London" />
      <meta name="business:contact_data:postal_code" content="W8 6SN" />
      <meta name="business:contact_data:country_name" content="United Kingdom" />
      <meta name="business:contact_data:phone_number" content="07826 416466" />
      <meta name="business:contact_data:email" content="private@hendersonthomasinvestigations.com" />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}

      {/* Default Structured Data for Organization */}
      {!structuredData && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Henderson Thomas Investigations",
            "description": "UK's top-rated private detective agency specializing in corporate investigations, covert surveillance, and discreet investigative services.",
            "url": "https://hendersonthomasinvestigations.com",
            "logo": "https://hendersonthomasinvestigations.com/logo.png",
            "image": "https://hendersonthomasinvestigations.com/logo.png",
            "telephone": "07826 416466",
            "email": "private@hendersonthomasinvestigations.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1st Floor, 238 Kensington High St",
              "addressLocality": "London",
              "postalCode": "W8 6SN",
              "addressCountry": "GB"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "51.5074",
              "longitude": "-0.1278"
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "London"
              },
              {
                "@type": "Country",
                "name": "United Kingdom"
              }
            ],
            "serviceType": [
              "Private Investigation",
              "Corporate Investigation",
              "Covert Surveillance",
              "Fraud Investigation",
              "Missing Persons",
              "Background Checks",
              "Personal Investigation"
            ],
            "openingHours": "Mo-Su 00:00-23:59",
            "priceRange": "$$",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "50"
            }
          })}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
