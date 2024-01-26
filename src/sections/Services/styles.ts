import styled from 'styled-components';


export const ServiceContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 70vh;
`;

export const ServiceContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5rem;
    max-width: 1400px;
`;

export const ServiceDescription = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 2rem;

    max-width: 31rem;
    padding: 0 1.5rem;
`;

export const ServiceCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 5rem;

    & > :nth-child(2) {
        box-shadow: -40px 40px 80px 0px rgba(145, 158, 171, 0.16);
    }
    
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 2.5rem;

    width: 15rem;
    height: 22.5rem;

    padding: 5rem 2.5rem;
    border-radius: 8px;

    h4 {
        font-size: 1.25rem;
        font-weight: 700;
        color: ${props => props.theme.text['primary']};
    }

    p {
        font-size: 0.875rem;
        font-weight: 400;
        color: ${props => props.theme.text['secondary']};
    }
`;