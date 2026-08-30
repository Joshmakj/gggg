import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = 'Teamup Consultants',
  description = 'Teamup Consultants delivers remote staffing, recruitment outsourcing, and AI-powered support solutions for modern businesses.',
  canonical,
  keywords = 'remote staffing, recruitment outsourcing, virtual receptionist, inside sales, AI support',
  image = 'https://teamupconsultants.com/TeamUp_Logo.png',
  type = 'website',
  url,
  schema,
  imageAlt = 'Teamup Consultants',
  dateModified,
}) => {
  const pageTitle = title.includes('Teamup') ? title : `${title} | Teamup Consultants`;
  const pageUrl = canonical || url || 'https://teamupconsultants.com/';
  const structuredData = schema || {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Teamup Consultants',
    url: 'https://teamupconsultants.com/',
    logo: 'https://teamupconsultants.com/TeamUp_Logo.png',
  };

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index,follow" />
      <link rel="canonical" href={pageUrl} />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:site_name" content="Teamup Consultants" />
      <meta property="og:locale" content="en_US" />

      {dateModified && <meta property="article:modified_time" content={dateModified} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={imageAlt} />

      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
