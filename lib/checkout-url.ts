import { baseUrl } from "lib/utils";

/** Canonical storefront origin for post-checkout redirects. */
export function getSiteUrl(): string {
  const fromEnv =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
    process.env.SITE_URL?.trim();
  if (fromEnv) {
    return fromEnv.replace(/\/$/, "");
  }
  return baseUrl;
}

export function getThankYouPageUrl(): string {
  return `${getSiteUrl()}/thank-you`;
}

/** Append return_to so Shopify may send buyers back to the storefront after checkout. */
export function withCheckoutReturnUrl(checkoutUrl: string): string {
  if (!checkoutUrl || checkoutUrl === "#") {
    return checkoutUrl;
  }

  try {
    const url = new URL(checkoutUrl);
    url.searchParams.set("return_to", getThankYouPageUrl());
    return url.toString();
  } catch {
    const separator = checkoutUrl.includes("?") ? "&" : "?";
    return `${checkoutUrl}${separator}return_to=${encodeURIComponent(getThankYouPageUrl())}`;
  }
}
