import { Caption, Heading } from '@/components/Text';
import {
  TestimonialsContainer,
  TestimonialsContent,
  TestimonialsDescription,
} from './styles';
import { TestimonialCarousel } from './TestimonialCarousel';



export function Testimonials() {
  return (
    <TestimonialsContainer>
      <TestimonialsDescription>
        <Caption text="Testimonials" />
        <Heading text="Who Love Our Work" />
      </TestimonialsDescription>

      <TestimonialsContent>
        <TestimonialCarousel />
      </TestimonialsContent>
    </TestimonialsContainer>
  );
}
