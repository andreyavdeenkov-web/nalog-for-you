import type { Course } from "@/content/courses";
import { expert } from "@/content/expert";
import { siteConfig } from "@/content/site";

/** JSON-LD для главной: организация, автор, курсы. */
export function buildHomeJsonLd(courses: Course[]) {
  const organizationId = `${siteConfig.url}/#organization`;
  const personId = `${siteConfig.url}/#expert`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": organizationId,
        name: siteConfig.name,
        url: siteConfig.url,
        email: siteConfig.contacts.email,
        founder: { "@id": personId },
      },
      {
        "@type": "Person",
        "@id": personId,
        name: expert.name,
        worksFor: { "@id": organizationId },
      },
      ...courses.map((course) => ({
        "@type": "Course",
        "@id": `${siteConfig.url}/#course-${course.slug}`,
        name: course.title,
        description: course.summary,
        inLanguage: "ru",
        provider: { "@id": organizationId },
        author: { "@id": personId },
        ...(course.price && {
          offers: {
            "@type": "Offer",
            price: course.price.amount,
            priceCurrency: course.price.currency,
            category: "Paid",
          },
        }),
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: "online",
        },
      })),
    ],
  };
}
