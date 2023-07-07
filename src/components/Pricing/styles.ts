import styled from 'styled-components';

export const PricingContainer = styled.section`
    max-width: 1440px;
    margin: 0 auto;
    padding: 5rem;
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media (max-width: 1200px) {
        gap: 1rem;
    }
`;

export const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 5rem;
`;

export const Card = styled.div`
    border-radius: 16px;
    box-shadow: 0px 8px 16px 0px rgba(145, 158, 171, 0.16);
    padding: 2.5rem;

    display: flex;
    flex-direction: column;
    gap: 2rem;

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        h2 {
            color: ${props => props.theme.primary['main']};
        }
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

            gap: 1rem;
            line-height: 2rem;
        }
    }

`;

export const Price = styled.div`
    line-height: 3rem;
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
