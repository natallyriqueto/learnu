import { styled } from 'styled-components';

export const TestimonialsContainer = styled.div`
  max-width: 1400px;
  min-height: 50vh;
  margin: 0 auto;
  padding: 0rem 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem;

  @media(max-width: 960px) {
    padding: 5rem 1.5rem;
  }
`;
export const TestimonialsDescription = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
`;

export const TestimonialsContent = styled.div`
    max-width: 80vw;
    width: 37.5rem;
    height: 30rem;
`;

export const TestimonialContent = styled.div`
    width: 37.5rem;
    height: 30rem;
`;

