import styled from 'styled-components';

export const ServiceContainer = styled.div`
    max-width: 1440px;
    margin: 10rem auto;
    padding: 0 5rem;
    text-align: center;

    @media (max-width: 1200px) {
        margin: 2rem auto;
    }
`;

export const ServiceDescription = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    max-width: 40rem;
    margin: 0 auto;
`;

export const ServiceGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 8rem;
    
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 0;
    }
`;

export const ServiceGridItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    margin-top: 5rem;
`;