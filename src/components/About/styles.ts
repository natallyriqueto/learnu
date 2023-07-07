import styled from 'styled-components';

export const AboutContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    max-width: 1440px;
    margin: 0 auto;
    padding: 0 5rem;
`;

export const VideoContent = styled.div`
    padding: 10rem;
`;

export const AboutContent = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 2rem;

    @media (max-width: 1200px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const AboutIntroduction = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    flex-wrap: wrap;

    text-align: right;
    flex: 0 1 40%; 

    p:first-child {
        font-weight: 700;
        text-transform: uppercase;
    }

    @media (max-width: 1200px) {
        text-align: left;
        gap: 1rem;
    }
`;

export const GridContainer = styled.div`
    flex: 0 1 30rem; 
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 1rem;
`;

export const GridItem = styled.div`
   
`;

export const Number = styled.div`
    display: flex;
    align-items: center;
`;
