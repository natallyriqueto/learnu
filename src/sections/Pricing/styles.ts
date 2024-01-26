import styled from 'styled-components';

export const PricingContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2.5rem;

    max-width: 1400px;
    min-height: 70vh;
    margin: 0 auto;
    padding: 5rem 0;

`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0 1.5rem;
    
    p {
        font-size: 1rem;
        font-weight: 500;
        color: ${props => props.theme.text['secondary']};
    }
`;

export const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2.5rem;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    width: 18.75rem;
    height: 28.75rem;

    padding: 2.5rem;
    border-radius: 16px;
    box-shadow: 0px 8px 16px 0px rgba(145, 158, 171, 0.16);


    header {
        display: flex;
        justify-content: center;
        justify-content: space-between;
    }
`;

export const BenefitsList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;

    ul {
        list-style: none;
    
        li {
            display: flex;
            align-items: center;

            gap: 0.5rem;
            line-height: 2rem;

            font-size: 0.875rem;
            font-weight: 500;
            color: ${props => props.theme.text['primary']};

        }
    }

`;

export const Price = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    div {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    h3 {
        font-size: 1.5rem;
        font-weight: 700;
        color: ${props => props.theme.primary['main']};
    }

    h4 {
        font-size: 1.5rem;
        font-weight: 700;
        color: ${props => props.theme.text['primary']};
    }

    span {
        font-size: 1rem;
        font-weight: 500;
        color: ${props => props.theme.text['secondary']};
    }
`;

export const Button = styled.button`
    background: transparent;
    border: 2px solid ${props => props.theme['gray-200']};
`;

export const BlackButton = styled.button`
    background: ${props => props.theme['gray-800']};
    border: none;
    color: ${props => props.theme.text['tertiary']};
`;

export const BlueButton = styled.button`
    background: ${props => props.theme.primary['main']};
    border: none;
    color: ${props => props.theme.text['tertiary']};
`;
