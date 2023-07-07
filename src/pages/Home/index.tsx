import { About } from '../../components/About';
import { Hero } from '../../components/Hero';
import { Pricing } from '../../components/Pricing';
import { Services } from '../../components/Services';
import { HomeContainer } from './styles';

export function Home() {

  return (
    <HomeContainer>
      <Hero />
      <About />
      <Services />
      <Pricing />
    </HomeContainer>
  );
}