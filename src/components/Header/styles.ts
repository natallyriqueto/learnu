import styled, { css } from 'styled-components';

export const HeaderContainer = styled.section`
    position: sticky;
    top: 0;
    z-index: 999;
    height: 4.75rem;

    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(5px);
`;

export const Nav = styled.nav`
    height: 100%;
    max-width: 1400px;
    margin: 0 auto;

    line-height: 1.375rem;
    padding: 0 2rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const NavContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3rem;
    height: 100%;

    ul {
        display: flex;
        gap: 3rem;

        height: 100%;
        list-style: none;
    }

    div {
        display: flex;
        gap: 0.625rem;
    }
`;

interface NavItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>{
    active: boolean;
}

export const NavItem = styled.a<NavItemProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1.6;
    color: ${props => props.theme.text['primary']};
    cursor: pointer;

    ${(props) =>
    props.active &&
        css`
            position: relative;
            font-weight: 600;

            &::before {
                content: "";
                position: absolute;
                top: calc(50% - 4px);
                left: -14px;
                height: 8px;
                width: 8px;
                background: #3182CE;
                border-radius: 100%;
            }
        `};
`;

export const Toggle = styled.div`
    display: none;
`;