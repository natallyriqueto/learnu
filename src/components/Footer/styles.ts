import styled from 'styled-components';

export const FooterContainer = styled.footer`
    display: flex;
    align-items: center;
    max-width: 1400px;
    height: 18rem;
    margin: 0 auto;
    padding: 1.5rem;
`;

export const FooterContent = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;

    @media(max-width: 960px) {
        justify-content: center;
    }
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 270px;

    img {
        width: 6rem;
    }

    p {    
        color: ${props => props.theme.text['primary']};
        font-size: 0.875rem;
        line-height: 1.6;
    }
`;

export const FooterLinks = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5rem;

    @media(max-width: 960px) {
        display: none;
    }
`;

export const FooterItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    strong {
        font-size: 0.75rem;
        font-weight: 700;
        text-transform: uppercase;
        color: ${props => props.theme.text['primary']};
        margin-bottom: 0.5rem;
    }

    p {
        font-size: 0.875rem;
        font-weight: 500;
    }
`;