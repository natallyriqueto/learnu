import { styled } from 'styled-components';

export const TeamContainer = styled.section`
    background: ${props => props.theme['gray-900']};
    min-height: 32rem;
`;

export const TeamContent = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    padding: 5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5rem;

    @media (max-width: 1100px) {
        flex-direction: column;
    }
`;

export const TeamDescription = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    h1 {
        color: ${props => props.theme.primary['main']};
    }

    p {
        color: ${props => props.theme.text['tertiary']};
    }
`;