import styled from 'styled-components';
import codeBackground from '../../assets/codeBackground.png';

export const SignUpTrialContainer = styled.section`
    background: url(${codeBackground});
    background-repeat: no-repeat;
    background-size: cover;
`;

export const SignUpTrialContent = styled.section`
    max-width: 1440px;
    margin: 0 auto;
    padding: 5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    div:first-child {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    div:nth-child(2) {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    h1 {
        color: ${props => props.theme.primary['main']};
    }

    p {
        color: ${props => props.theme.text['tertiary']};
    }

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const AccountForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

export const AccountInput = styled.input`
    width: 20rem;
    padding: 1rem 0.75rem;
    border-radius: 8px;
    border: none;
    background: ${props => props.theme['gray-800']};
`;

export const AccountButton = styled.button`
    color: ${props => props.theme.text['tertiary']};
    background: ${props => props.theme.primary['main']};
    border: none;
    padding: 1rem 0.;
`;