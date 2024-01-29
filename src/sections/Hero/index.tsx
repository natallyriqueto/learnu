import { useCallback, useEffect, useRef, useState } from 'react';
import { Play } from 'phosphor-react';
import { useScroll } from 'framer-motion';

import { 
  HeroContainer, 
  TextContent, 
  HeroContent, 
  PlayContainer 
} from './styles';

import { Button } from '@/components/Button/styles';
import { Caption, Paragraph } from '@/components/Text';

import videoImg from '@/assets/videoTutorial.png';

export function Hero() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const { scrollY } = useScroll();
  const [percent, setPercent] = useState(0);

  const getScroll = useCallback(() => {
    let heroHeight = 0;

    if (heroRef.current) {
      heroHeight = heroRef.current.offsetHeight;
    }

    scrollY.on('change', (scrollHeight) => {
      const scrollPercent = (scrollHeight * 100) / heroHeight;

      setPercent(Math.floor(scrollPercent));
    });
  }, [scrollY]);

  useEffect(() => {
    getScroll();
  }, [getScroll]);

  const opacity = 1 - percent / 100;

  const setStyles = (opacity: number) => {
    return {
      opacity: opacity > 0 ? opacity : 0
    };
  };

  return (
    <HeroContainer 
      id="home"
      ref={heroRef}
      style={setStyles(opacity)}
    >
      <HeroContent>

        <TextContent>
          <Caption text="welcome" />
          <h1 id="homeHeading">The Power of <span className='animated'>Education</span></h1>
          <Paragraph text="Are you in search of an innovative solution to empower learners across the globe and ensure equal access to education?" />
          <div>
            <Button variant='contained' size='large'>Start now</Button>
            <PlayContainer>
              <div>
                <Play size={24} />
              </div>
              <span>See our work</span>
            </PlayContainer>
          </div>
        </TextContent>

        <img src={videoImg} width={500} alt="woman watching a video"/>
      </HeroContent>
   
    </HeroContainer>
  );
}