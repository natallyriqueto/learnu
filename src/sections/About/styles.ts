import styled from 'styled-components';

import { responsiveFontSizes } from '@/utils/css';

export const AboutContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 80vh;

    padding: 5rem 0;
`;

export const AboutImage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    max-height: 40rem;
    overflow: hidden;
    border-radius: 8px;

    img {
        border-radius: 8px;
        width: 100%;
        object-fit: contain;
    }
`;

export const AboutText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6.75rem;
    padding: 0 1.5rem;

    @media(max-width: 960px) {
        flex-direction: column;
    }
`;

export const AboutContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5rem;
    max-width: 1400px;
`;

export const AboutIntroduction = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    flex-wrap: wrap;
    max-width: 25rem;

    text-align: right;
    flex: 0 1 40%; 

    @media(max-width: 960px) {
        text-align: left;
    }
`;

export const AboutStats = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 29rem;
`;

export const AboutStatsItem = styled.div`
    display: flex;
    gap: 2rem;
    justify-content: center;

    div:first-child { 
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-width: 7.5rem;
        border-right: 2px solid rgba(145, 158, 171, 0.20);
    }

    div:last-child {
        display: flex;
        align-items: center;
    }

    h5 {
        font-size: 2rem;
        ${responsiveFontSizes({ sm: 32, md: 48, lg: 48 })}
        color: ${props => props.theme.text['primary']};
        font-weight: 800;
        text-justify: center;

        strong {
            font-size: 2rem;
            color: #3182CE;
            font-weight: 800;
        }
    }

    strong {
        font-size: 0.75rem;
        color: ${props => props.theme.text['secondary']};
        font-weight: 700;
        text-transform: uppercase;
    }

    p {
        font-size: 0.875rem;
        font-weight: 400;
        color: ${props => props.theme.text['secondary']};
    }
`;
