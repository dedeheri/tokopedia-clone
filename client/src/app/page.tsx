import Banner from "@/components/banner";
import Layout from "@/components/layout";
import MaxWidth from "@/components/max-width";
import SectionProducts from "@/components/section-products";
import SectionTopUpAndCategories from "@/components/section-topup-categories";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <Layout>
      <div className="md:mt-0 mt-[5rem]">
        <MaxWidth>
          <Banner />
          <SectionTopUpAndCategories />
        </MaxWidth>
        <div className="h-16 lg:h-24 flex items-center">
          <Separator className="h-2 bg-neutral-100" />
        </div>

        <SectionProducts />
      </div>
    </Layout>
  );
}
