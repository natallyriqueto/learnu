import styled from 'styled-components';

export const SignNewsContainer = styled.section`
    background-color: ${props => props.theme['gray-100']};
`;

export const SignNewsContent = styled.section`
    max-width: 1400px;
    margin: 0 auto;
    padding: 5rem 1.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;

    @media(max-width: 960px) {
        justify-content: center;
    }
`;

export const Description = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    div {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    @media(max-width: 960px) {
        flex-direction: column;
        text-align: center;
    }
`;

export const NewsInput = styled.input`
    background: rgb(145, 158, 171, 0.08);
    border-radius: 6px;
    border: 1px solid #C4CDD5;
    padding: 1rem 0.75rem;
    width: calc(100% - 8rem);
`;

export const NewsButton = styled.button`
    background: ${props => props.theme['gray-900']};
    color: ${props => props.theme.text['tertiary']};
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    width: 8rem;
`;

export const NewsForm = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    gap: 1rem;
    width: 30rem;
`;