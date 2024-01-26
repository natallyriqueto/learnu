import { styled } from 'styled-components';
import { SwiperSlide } from 'swiper/react';

export const Slide = styled(SwiperSlide)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    
    width: 12.5rem !important;

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