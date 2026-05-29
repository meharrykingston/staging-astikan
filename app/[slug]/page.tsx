import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SitePage from "@/components/SitePage";
import { canonicalPages, getPage, hrefForSlug, type SitePageData } from "@/data/site-data";

export function generateStaticParams() {
  return canonicalPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getPage(slug);
  if (!page) return {};

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: hrefForSlug(page.slug),
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `https://astikan.com${hrefForSlug(page.slug)}`,
      siteName: "Astikan Health",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getPage(slug);
  if (!page) notFound();
  return <SitePage page={page as SitePageData} />;
}
