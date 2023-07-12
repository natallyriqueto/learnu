import { styled } from 'styled-components';

export const TeamContent = styled.div`
    max-width: 1140px;
    margin: 0 auto;
    padding: 5rem;

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    button {
        background: transparent;
        border: none;
        cursor: pointer;
    }
`;

export const SliderContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SlideImage = styled.img`
    width: 5rem;
    height: 5rem;
`;

export const TestimonialContent = styled.div`
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 29.5rem;
    gap: 2rem;

    p {
        text-align: center;
    }
`;

export const TestimonialName = styled.p`
    color: ${props => props.theme.text['primary']};
    font-weight: 700;
`;
