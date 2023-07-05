import { HeaderContainer, Toggle, Nav, NavContent, SignUpButton, LoginButton } from "./styles";
import logo from "../../assets/logo.svg";
import { TextAlignJustify } from "phosphor-react";

export function Header() {
    return (
        <HeaderContainer>
            <Nav>
                <img src={logo} alt="white and blue logo of learn u" />
                <NavContent>
                    <ul>
                        <li>Home</li>
                        <li>Components</li>
                        <li>Pages</li>
                        <li>Docs</li>
                    </ul>

                    <div>
                        <LoginButton>Login</LoginButton>
                        <SignUpButton>Sign Up</SignUpButton>
                    </div>    

                </NavContent>

                <Toggle>
                    <TextAlignJustify size={24} />
                </Toggle>
            </Nav>
        </HeaderContainer>
    );
}