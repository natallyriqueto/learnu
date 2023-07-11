import { FooterContainer, FooterGridItem, FooterGrid, FooterContent } from './styles';

export function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <p>The starting point for your next project with Minimal UI Kit, built on the newest version of Material-UI, ready to be customized to your style.</p>
        <FooterGrid>
          <FooterGridItem>
            <strong>minimal</strong>
            <p>About us</p>
            <p>Contact us</p>
            <p>FAQ</p>
          </FooterGridItem>
          <FooterGridItem>
            <strong>legal</strong>
            <p>Terms and Conditions</p>
            <p>Privacy Policy</p>
          </FooterGridItem>
          <FooterGridItem>
            <strong>contact</strong>
            <p>suppor@email.com</p>
          </FooterGridItem>
        </FooterGrid>
      </FooterContent>
    </FooterContainer>
  );
}