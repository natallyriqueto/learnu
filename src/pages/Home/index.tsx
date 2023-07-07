import { About } from '../../components/About';
import { Hero } from '../../components/Hero';
import { HomeContainer } from './styles';

export function Home() {

  return (
    <HomeContainer>
      <Hero />
      <About />
    </HomeContainer>
  );
}