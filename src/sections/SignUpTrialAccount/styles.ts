import styled from 'styled-components';

export const SignUpTrialContainer = styled.section`
    background: ${props => props.theme['gray-900']};
`;

export const SignUpTrialContent = styled.section`
    max-width: 1400px;
    margin: 0 auto;
    padding: 5rem 1.5rem;

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

    p {
        font-size: 1rem;
        font-weight: 500;
        color: ${props => props.theme['gray-400']};
    }

    @media(max-width: 960px) {
        flex-direction: column;
        gap: 5rem;
    }
`;

export const AccountForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
    max-width: 30rem;
`;

export const AccountInput = styled.input`
    width: 100%;
    padding: 1rem 0.75rem;
    border-radius: 8px;
    border: none;
    background: ${props => props.theme['gray-800']};
    color: ${props => props.theme.white};
`;