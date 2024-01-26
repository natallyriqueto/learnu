import { styled } from 'styled-components';
import { SwiperSlide } from 'swiper/react';

export const Slide = styled(SwiperSlide)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;

    .stars {
        display: flex;
        gap: 0.5rem;
    }

    .info {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
    }

    strong {
        font-size: 1rem;
        font-weight: 600;
        color: ${props => props.theme.text['primary']};
    }

    span {
        font-size: 0.875rem;
        font-weight: 500;
        color: ${props => props.theme.text['secondary']};
    }

    p {
        max-width: 80%;
        width: 30rem;
        text-align: center;
        line-height: 1.4;
    }
`;