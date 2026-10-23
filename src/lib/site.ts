const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

export const siteUrl = configuredSiteUrl || "https://www.elitehcs.com.au";
export const socialImageUrl = `${siteUrl}/images/social-share-logo.png`;
