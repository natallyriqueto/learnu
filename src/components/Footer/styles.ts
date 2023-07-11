import styled from 'styled-components';

export const FooterContainer = styled.footer`
    max-width: 1440px;
    margin: 0 auto;
    padding: 2.5rem 5rem;
`;

export const FooterContent = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    p {    
        color: ${props => props.theme.text['primary']};
        font-size: 0.875rem;
        flex: 0 1 270px;
        flex-wrap: wrap;
    }
    
    @media (max-width: 1000px) {
        gap: 3rem;

        p {
            flex: 0 1 100%;
        }
    }
`;

export const FooterGrid = styled.div`
    flex: 0 1 564px;

    display: grid;
    gap: 2em;
    grid-template-columns: repeat(auto-fit, minmax(161px, 1fr));

    font-size: 0.75rem;

    strong {
        color: ${props => props.theme.text['primary']};
    }

    @media (max-width: 1000px) {
        flex: 0 1 100%;
    }
`;

export const FooterGridItem = styled.div`
    line-height: 3rem;
`;