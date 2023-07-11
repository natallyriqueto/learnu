import styled from 'styled-components';

export const SignNewsContainer = styled.section`
    background-color: ${props => props.theme['gray-100']};
`;

export const SignNewsContent = styled.section`
    max-width: 1440px;
    margin: 0 auto;
    padding: 5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;

    div:first-child {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
    }
`;

export const NewsInput = styled.input`
    background: rgb(145, 158, 171, 0.08);
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    border: none;
    padding: 1rem 0.75rem;
    width: 20rem;

    @media (max-width: 768px) {
        width: 15rem; 
    }
`;

export const NewsButton = styled.button`
    background: ${props => props.theme['gray-900']};
    color: ${props => props.theme.text['tertiary']};
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    width: 6rem;

    @media (max-width: 768px) {
        width: 5rem;
    }
`;

export const NewsForm = styled.form`
    display: flex;
    flex-wrap: nowrap;
`;