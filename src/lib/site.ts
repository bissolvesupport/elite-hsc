const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

export const siteUrl = configuredSiteUrl || "https://elite-hsc.vercel.app";
export const socialImageUrl = `${siteUrl}/images/social-share.jpg`;
