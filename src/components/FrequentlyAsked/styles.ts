import { styled } from 'styled-components';

export const FrequentlyAskedContainer = styled.section`
    max-width: 1440px;
    margin: 0 auto;
    padding: 5rem;
`;

export const Title = styled.p`
    color: ${props => props.theme.text['primary']};
    font-weight: 700;
`;

export const QuestionsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5rem;
    margin-top: 5rem;

    img {
        width: 50%;
    }

    @media (max-width: 1200px) {
        flex-direction: column-reverse;

        img { 
            display: none;
        }
    }

    /* @media (max-width: 768px) {
        img { 
            width: 80%;
        }
    } */
`;

export const QuestionsContent = styled.div`
`;

export const Questions = styled.div`
    padding-bottom: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const Divider = styled.div`
    height: 1px;
    background-color: ${props => props.theme['divider']};;
`;