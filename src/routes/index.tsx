import { createFileRoute } from "@tanstack/react-router";
import { Preloader } from "@/components/site/Preloader";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { VisionMission } from "@/components/site/VisionMission";
import { Courses } from "@/components/site/Courses";
import { Faculty } from "@/components/site/Faculty";
import { Gallery } from "@/components/site/Gallery";
import { Events } from "@/components/site/Events";
import { Achievements } from "@/components/site/Achievements";
import { Chitrakantha } from "@/components/site/Chitrakantha";
import { Admission } from "@/components/site/Admission";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vasai Vikasini's College of Visual Art | Art Education in Vasai" },
      {
        name: "description",
        content:
          "Established in 1985, Vasai Vikasini's College of Visual Art offers government-recognised visual art education — drawing, painting, applied art, interior design, animation, VFX, art teacher diploma and foundation courses in Vasai.",
      },
      {
        name: "keywords",
        content:
          "visual art college vasai, art college vasai, drawing painting diploma, applied art diploma, interior designing diploma, animation VFX course vasai, art teacher diploma, foundation art course, Vasai Vikasini College",
      },
      { property: "og:title", content: "Vasai Vikasini's College of Visual Art" },
      {
        property: "og:description",
        content:
          "Government-recognised college of visual art in Vasai since 1985 — drawing, painting, applied art, interior design, animation & VFX, art teacher diploma and foundation courses.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollegeOrUniversity",
          name: "Vasai Vikasini's College of Visual Art",
          foundingDate: "1985",
          description:
            "Government of Maharashtra recognised college of visual art offering foundation, diploma and certificate programmes in drawing, painting, applied art, interior design, animation & VFX and art teaching.",
          telephone: "+91-8956740317",
          email: "vasaivikasinicollege11@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Vasai Vikasini Bhavan, Near Vasai Road Railway Station",
            addressLocality: "Vasai Road – East",
            addressRegion: "Maharashtra",
            postalCode: "401210",
            addressCountry: "IN",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Preloader />
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <VisionMission />
        <Courses />
        <Faculty />
        <Gallery />
        <Events />
        <Achievements />
        <Chitrakantha />
        <Admission />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
