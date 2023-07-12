import { useState } from 'react';
import testimonials1 from '../../assets/testimonials1.png';
import testimonials2 from '../../assets/testimonials2.png';
import testimonials3 from '../../assets/testimonials3.png';
import { CaretLeft, CaretRight, Star } from 'phosphor-react';
import { 
  SliderContent, 
  SlideImage, 
  TeamContent, 
  TestimonialContent, 
  TestimonialName 
} from './styles';

interface slidesType {
    name: string;
    profession: string;
    imgName: string;
    testimonial: string;
    rating: number;
}

export function Testimonials() {

  const slides: slidesType[] = [
    {
      name: 'Friederick',
      profession: 'UX Designer',
      imgName: testimonials2,
      testimonial: 'I highly recommend it to anyone looking for a learning experience',
      rating: 4,
    },
    {
      name: 'Beatriz',
      profession: 'Developer',
      imgName: testimonials1,
      testimonial: 'I just love this platform, but I have had some issues!',
      rating: 3,
    },
    {
      name: 'Arthur',
      profession: 'Developer',
      imgName: testimonials3,
      testimonial: 'I have been using LearnU for a few months now, and I highly recommend it to anyone looking for a comprehensive and enriching learning experience',
      rating: 5
    }
  ];

  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const previousSlide = () => {
    if (currentSlide != 0) {
      setCurrentSlide((prevSlide) => (prevSlide - 1) % slides.length);
    }
    else {
      setCurrentSlide(slides.length - 1);
    }
  };

  return (
    <section>
      <TeamContent>
        <strong>Testimonials</strong>
        <h1>Who Love Our Work</h1>

        <TestimonialContent>
          <div>
            {
              [...Array(5)].map((_, index) => {
                const starValue = index + 1;

                const starColor =
                    starValue <= slides[currentSlide].rating ? '#FFAB00' : 'lightgray';
        
                return  <Star key={index} size={32} weight="fill" color={starColor} />;
              })
            }
          </div>
      
          <p>{slides[currentSlide].testimonial}</p>

          <SliderContent>
            <button onClick={previousSlide}>
              <CaretLeft size={32} />
            </button>

            <div>
              <SlideImage src={slides[currentSlide].imgName} alt="picture of a person that wrote the testimonial" />
              <div>
                <TestimonialName>{slides[currentSlide].name}</TestimonialName>
                <p>{slides[currentSlide].profession}</p>
              </div>
            </div>

            <button onClick={nextSlide}>
              <CaretRight size={32} />
            </button>
          </SliderContent>
      
        </TestimonialContent>

      </TeamContent>
    </section>
  );
}
