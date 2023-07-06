import styled from "styled-components";

export const HeaderContainer = styled.section`
    background: ${props => props.theme.background["default"]};
    height: 4.75rem;
`;

export const Nav = styled.nav`
    height: 100%;
    max-width: 1440px;
    margin: 0 auto;

    line-height: 1.375rem;
    padding: 0 5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
        padding: 0 1rem;
    }
`;

export const NavContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2.5rem;
    
    ul {
        display: flex;
        list-style: none;
        gap: 2.5rem;
    }

    div {
        display: flex;
        gap: 0.625rem;
    }

    @media (max-width: 1000px) {
        display: none;
    }
`;

export const LoginButton = styled.button`
    background: transparent;
    border-radius: 6px;
    border: 1px solid ${props => props.theme["gray-300"]};
    height: 2.25rem;
    width: 3.8rem;
`;

export const SignUpButton = styled.button`
    height: 2.25rem;
    width: 4.8rem;
    background: ${props => props.theme["gray-800"]};
    border-radius: 6px;
    color: ${props => props.theme.text["tertiary"]};
`;

export const Toggle = styled.div`
    display: none;

    @media (max-width: 1000px) {
        display: block;
    }
`;