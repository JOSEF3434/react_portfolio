import { Helmet } from "react-helmet-async";
import { profile } from "../../data/portfolio";

export function SEO({
  title,
  description,
  path = "/",
  type = "website",
}) {
  const siteUrl = "https://yossiefenyew.dev";
  const fullTitle = title
    ? `${title} | ${profile.name}`
    : `${profile.name} | ${profile.title}`;
  const metaDescription =
    description ??
    `${profile.tagline} Explore projects, experience, and technical skills.`;

  return (
    <Helmet>
      <html lang="en" />
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta
        name="keywords"
        content="Yossief Enyew, Full Stack Developer, React, Next.js, Node.js, MERN, Portfolio, Ethiopia"
      />
      <meta name="author" content={profile.fullName} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={`${siteUrl}${path}`} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={`${siteUrl}${path}`} />
      <meta property="og:image" content={profile.profileImage} />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={profile.profileImage} />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: profile.fullName,
          jobTitle: profile.title,
          email: profile.email,
          url: siteUrl,
          sameAs: [profile.github],
          address: {
            "@type": "PostalAddress",
            addressLocality: profile.location,
          },
        })}
      </script>
    </Helmet>
  );
}

export default SEO;
