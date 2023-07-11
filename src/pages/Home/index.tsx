import { About } from '../../components/About';
import { FrequentlyAsked } from '../../components/FrequentlyAsked';
import { Hero } from '../../components/Hero';
import { Pricing } from '../../components/Pricing';
import { Services } from '../../components/Services';
import { SignUpNews } from '../../components/SignUpNews';
import { SignUpTrialAccount } from '../../components/SignUpTrialAccount';
import { HomeContainer } from './styles';

export function Home() {

  return (
    <HomeContainer>
      <Hero />
      <About />
      <Services />
      <Pricing />
      <FrequentlyAsked />
      <SignUpTrialAccount />
      <SignUpNews />
    </HomeContainer>
  );
}