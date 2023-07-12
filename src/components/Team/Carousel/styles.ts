import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const SliderContainer = styled.section`
    max-width: 40rem;

    @media (max-width: 768px) {
        max-width: 20rem;
    }

    img {
        height: 15rem;
    }
`;