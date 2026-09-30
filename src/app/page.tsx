import { Header } from "@/components/layout/Header";
import { Audience } from "@/components/sections/Audience";
import { Hero } from "@/components/sections/Hero";
import { KeyFacts } from "@/components/sections/KeyFacts";
import { WhyVat } from "@/components/sections/WhyVat";
import { courses } from "@/content/courses";
import { buildHomeJsonLd } from "@/lib/schema";

export default function HomePage() {
  const jsonLd = buildHomeJsonLd(courses);

  return (
    <>
      <script
        type="application/ld+json"
        // JSON-LD формируется из статических данных content/*
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Header />
      <main>
        <Hero />
        <KeyFacts />
        <WhyVat />
        <Audience />
        {/*
          Этап 2 (после согласования визуального направления):
          Outcomes, CourseProgram, LearningFormat, DemoLesson, Expert,
          Pricing, Updates, Testimonials, FAQ, FinalCTA, Footer.
        */}
      </main>
    </>
  );
}
