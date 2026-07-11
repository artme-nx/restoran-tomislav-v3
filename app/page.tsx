import { SiteNav } from "@/components/charter/site-nav";
import { ScrollSpine } from "@/components/charter/scroll-spine";
import { HeroCharter } from "@/components/charter/hero-charter";
import { ChapterAbout } from "@/components/charter/chapter-about";
import { ChapterMenu } from "@/components/charter/chapter-menu";
import { ChapterGallery } from "@/components/charter/chapter-gallery";
import { ChapterLocation } from "@/components/charter/chapter-location";
import { ChapterDivider } from "@/components/charter/chapter-divider";
import { SealFooter } from "@/components/charter/seal-footer";

export default function Home() {
  return (
    <>
      <SiteNav />
      <ScrollSpine />
      <main className="w-full">
        <HeroCharter />
        <ChapterDivider />
        <ChapterAbout />
        <ChapterDivider />
        <ChapterMenu />
        <ChapterDivider />
        <ChapterGallery />
        <ChapterDivider />
        <ChapterLocation />
        <SealFooter />
      </main>
    </>
  );
}
