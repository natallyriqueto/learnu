import { Swiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import teamMember1 from '@/assets/teamMember1.png';
import teamMember2 from '@/assets/teamMember2.png';
import teamMember3 from '@/assets/teamMember3.png';
import teamMember4 from '@/assets/teamMember4.png';
import { Slide } from './styles';
import { useMediaQuery } from 'react-responsive';

export const Carousel = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 960px)' });
  const slidesView = isMobile ? 1 : 3;
  
  return (
    <>
      <Swiper
        slidesPerView={slidesView}
        spaceBetween={24}
        navigation={true}
        mousewheel={true}
        modules={[Navigation]}
        className="mySwiper"
      >
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
      </Swiper>
    </>
  );
};
