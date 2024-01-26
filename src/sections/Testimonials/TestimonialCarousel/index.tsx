import { Swiper } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

// import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import testimonials1 from '@/assets/testimonials1.png';
import testimonials2 from '@/assets/testimonials2.png';
import testimonials3 from '@/assets/testimonials3.png';

import { Slide } from './styles';
import { Star } from 'phosphor-react';
import { Paragraph } from '@/components/Text';

interface slidesType {
  name: string;
  profession: string;
  img: string;
  testimonial: string;
  rating: number;
}

const slides: slidesType[] = [
  {
    name: 'Arthur',
    profession: 'Developer',
    img: testimonials3,
    testimonial: 'I have been using LearnU for a few months now, and I highly recommend it to anyone looking for a comprehensive and enriching learning experience',
    rating: 5
  },
  {
    name: 'Friederick',
    profession: 'UX Designer',
    img: testimonials2,
    testimonial: 'I can\'t say enough good things about LearnU. The platform has exceeded my expectations in every way.',
    rating: 4,
  },
  {
    name: 'Beatriz',
    profession: 'Developer',
    img: testimonials1,
    testimonial: 'The platform is user-friendly and intuitive, making it easy to navigate and access course materials.',
    rating: 4,
  },
];

export const TestimonialCarousel = () => {
  return (
    <Swiper
      slidesPerView={1}
      navigation={true}
      loop={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      mousewheel={true}
      modules={[Navigation, Autoplay]}
      className="mySwiper"
    >
      {
        slides.map(slide => (
          <Slide key={slide.name}>
            <div className="stars">
              {
                [...Array(slide.rating)].map((_, index) => (<Star key={`star-${slide.name}-${index}`} size={32} weight="fill" color="#FFAB00" />))
              }
            </div>

            <Paragraph text={slide.testimonial} />
            <img src={slide.img} />

            <div className="info">
              <strong>{slide.name}</strong>
              <span>{slide.profession}</span>
            </div>
          </Slide>
        ))
      }
    </Swiper>
  );
};
