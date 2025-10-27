import Hero from "@/components/Hero";
import FAQ from "@/components/FAQ";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import RichExperience from "@/components/RichExperience";
import UseCases from "@/components/UseCases";
import OpenSource from "@/components/OpenSource";
import Customization from "@/components/Customization";
import Integrations from "@/components/Integrations";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Container>
        <Benefits />
        <RichExperience />
      </Container>

      <UseCases />

      <Container>
        <Customization />
        <Integrations />
        <OpenSource />
        <Stats />
        <FAQ />
        <CTA />
      </Container>
    </>
  );
};

export default HomePage;
