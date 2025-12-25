import { Navbar } from '../components/navbar';
import { Hero } from '../components/hero';
import { OQueSomos } from '../components/sections/o-que-somos';
import { QuemSomos } from '../components/sections/quem-somos';
import { Manifesto } from '../components/sections/manifesto';
import { OQuePropomos } from '../components/sections/o-que-propomos';
import { Pesquisa } from '../components/sections/pesquisa';
import { Footer } from '../components/footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <OQueSomos />
        <QuemSomos />
        <Manifesto />
        <OQuePropomos />
        <Pesquisa />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
