import { styled } from 'styled-components';

export const Slide = styled.div`
    display: flex !important;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    strong {
        font-size: 1rem;
        font-weight: 600;
        color: ${props => props.theme.white};
    }

    span {
        font-size: 0.875rem;
        font-weight: 500;
        color: ${props => props.theme['gray-500']};
    }
`;

export const CarouselContainer = styled.div`
  max-width: 30rem;
  padding: 2rem;
  margin: 0 auto;

  @media (max-width: 600px) {
    max-width: 20rem;
  }
`;