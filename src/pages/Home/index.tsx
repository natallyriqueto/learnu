import { About } from '@/sections/About';
import { Courses } from '@/sections/Courses';
import { FrequentlyAsked } from '@/sections/FAQ';
import { Hero } from '@/sections/Hero';
import { Pricing } from '@/sections/Pricing';
import { Services } from '@/sections/Services';
import { SignUpNews } from '@/sections/SignUpNews';
import { SignUpTrialAccount } from '@/sections/SignUpTrialAccount';
import { Team } from '@/sections/Team';
import { Testimonials } from '@/sections/Testimonials';
import { HomeContainer } from './styles';

export function Home() {

  return (
    <HomeContainer>
      <Hero />
      <Courses />
      <About />
      <Services />
      <Team />  
      <Pricing />
      <FrequentlyAsked />
      <Testimonials />
      <SignUpTrialAccount />
      <SignUpNews />
    </HomeContainer>
  );
}