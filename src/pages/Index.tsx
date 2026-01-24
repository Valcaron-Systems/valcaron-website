import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/sections/Hero";
import { Overview } from "@/components/sections/Overview";
import { News } from "@/components/sections/News";
import { CallToAction } from "@/components/sections/CallToAction";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Overview />
      <News />
      <CallToAction />
    </Layout>
  );
};

export default Index;
