import Slider from 'react-slick';
import teamMember1 from '../../../assets/teamMember1.png';
import teamMember2 from '../../../assets/teamMember2.png';
import teamMember3 from '../../../assets/teamMember3.png';
import teamMember4 from '../../../assets/teamMember4.png';
import { SliderContainer } from './styles';
import { useEffect, useState } from 'react';

export function Carousel() {

  const [settings, setSettings] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  });

  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);

    if (screenSize.width <= 768) {
      setSettings(prevState => ({
        ...prevState,
        slidesToShow: 1
      }));
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [screenSize]);


  return (
    <SliderContainer>
      <Slider {...settings}>
        <div>
          <img src={teamMember1} alt="Image 1" />
        </div>
        <div>
          <img src={teamMember2} alt="Image 2" />
        </div>
        <div>
          <img src={teamMember3} alt="Image 3" />
        </div>
        <div>
          <img src={teamMember4} alt="Image 4" />
        </div>
      </Slider>
    </SliderContainer>
    
  );
}
