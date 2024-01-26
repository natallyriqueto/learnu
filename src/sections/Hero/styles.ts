import styled from 'styled-components';

import heroBg from '@/assets/heroBackground.png';
import { responsiveFontSizes } from '@/utils/css';

export const HeroContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 4.75rem);
    background-image: url(${heroBg});
    background-repeat: no-repeat;
    background-size: cover;
`;

export const HeroContent = styled.div`
    max-width: 1200px;
    width: 100%;
    padding: 0 1.5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    @media(max-width: 1000px) {
        justify-content: center;

        img {
            display: none;
        }
    }
`;

export const HeroFooter = styled.div`
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    max-width: 100vw;
    width: 100%;

    img {
        max-width: 100%;
    }

    @media(max-width: 1280px) {
        display: none;
    }
`;

export const TextContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    max-width: 30rem;

    & > div {
        display: flex;
        align-items: center;
        gap: 1.5rem;
    }

    h1 {
        ${responsiveFontSizes({ sm: 32, md: 64, lg: 64 })}
        font-weight: 800;

        .animated {
            --bg-size: 400%;
            --color-one: #63B3ED;
            --color-two: #3182CE;

            font-family: Barlow, Public Sans, sans-serif;
            /* font-size: 6rem; */
            font-size: 4rem;
            ${responsiveFontSizes({ sm: 64, md: 96, lg: 96 })}
            font-weight: 700;
            letter-spacing: 2px;

            background: linear-gradient(
                45deg,
                var(--color-one),
                var(--color-two),
                var(--color-one)
              ) 0 0 / var(--bg-size) 100%;
            
            color: transparent;
            -webkit-background-clip: text;
            background-clip: text;
            animation: move-bg 8s infinite linear;
        }
    }

    @media (prefers-reduced-motion: no-preference) {
        .animated {
            animation: move-bg 8s linear infinite;
        }
        @keyframes move-bg {
            to {
                background-position: var(--bg-size) 0;
            }
        }
    }
`;

export const PlayContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    
    & > div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 100%;
        background: ${props => props.theme.primary['main']};
        color: ${props => props.theme.white};
        filter: drop-shadow(0px 8px 16px rgba(49, 130, 206, 0.24));
        cursor: pointer;

        span {
            font-size: 0.875rem;
            font-weight: 600;
        }
    }
`;