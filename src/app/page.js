import { FAQs } from "./components/FAQs";
import { Features } from "./components/Features";
import { Form } from "./components/Form";
import Header from "./components/header/Index";
import { Hero } from "./components/Hero";
import { Influencers } from "./components/Influencers";
import { Tabs } from "./components/Tabs";
import { Travel } from "./components/Travel";

export default function Home() {
  return (
    <>
      <Header />
      <main className="px-1200  lg:pt-9 pt-0 h-full flex flex-col gap-12">
        <Hero />
        <Tabs />
        <Travel />
        <Features />
        <Influencers />
        <Form />
        <FAQs />
      </main>
    </>
  );
}
