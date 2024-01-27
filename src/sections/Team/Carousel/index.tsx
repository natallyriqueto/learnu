import Slider from 'react-slick';
import { CarouselContainer, Slide } from './styles';

import teamMember1 from '@/assets/teamMember1.png';
import teamMember2 from '@/assets/teamMember2.png';
import teamMember3 from '@/assets/teamMember3.png';
import teamMember4 from '@/assets/teamMember4.png';
import { useMediaQuery } from 'react-responsive';

export const Carousel = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 960px)' });
  const slidesView = isMobile ? 1 : 2;
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesView,
    slidesToScroll: slidesView
  };

  return (
    <CarouselContainer>
      <Slider {...settings}>
        <Slide key="teamMember1">
          <img src={teamMember1} />
          <strong>Eliza Mesta</strong>
          <span>Front-End Developer</span>
        </Slide>
        <Slide key="teamMember2">
          <img src={teamMember2} />
          <strong>Sande Horio</strong>
          <span>Full Stack Developer</span>
        </Slide>
        <Slide key="teamMember3">
          <img src={teamMember3} />
          <strong>George Stittgen</strong>
          <span>Back-End Developer</span>
        </Slide>
        <Slide key="teamMember4">
          <img src={teamMember4} />
          <strong>John Lhuillier</strong>
          <span>Designer</span>
        </Slide>
      </Slider>
    </CarouselContainer>
  );
};
