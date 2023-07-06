import styled from "styled-components";
import heroBg from "../../assets/heroBackground.png";

export const HeroContainer = styled.section`
    background-image: url(${heroBg});
    background-repeat: no-repeat;
    background-size: cover;
`;

export const HeroContent = styled.div`
    max-width: 1440px;
    height: 50rem;

    margin: 0 auto;
    padding: 0 5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    img { 
        width: 50%;
    }
  
    @media (max-width: 1200px) {
        height: 70rem;

        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 5rem;

        img { 
            width: 60%;
        }
    }

    @media (max-width: 768px) {
        img { 
            width: 100%;
        }
    }
`;

export const HeroFooter = styled.div`
    display: flex;
    justify-content: space-between;

    img {
        width: 50%;
        height: 50%;
    }
`;

export const TextContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 30.6rem;

    div {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    button {
        font-weight: bold;
        padding: 0.5rem 0.6875rem;
        border-radius: 6px;
        background: ${props => props.theme["gray-800"]};
        color: ${props => props.theme.text["tertiary"]};
    }

    h1 {
        font-size: 4rem;
    }
    
    p {
        color: ${props => props.theme.text["secondary"]};
        line-height: 1.5;
    }

    p:first-child {
        font-weight: 700;
    }
`;

