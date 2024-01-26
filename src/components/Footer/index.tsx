import { FooterContainer, FooterContent, FooterLinks, FooterItem, Description } from './styles';
import logo from '@/assets/logo.svg';

export function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <Description>
          <img src={logo} alt="white and blue logo of learn u" />
          <p>Join our vibrant learning community, where collaboration and support thrive. Engage with fellow learners, participate in discussions, and gain valuable insights from our dedicated instructors and mentors.</p>
        </Description>
        <FooterLinks>
          <FooterItem>
            <strong>LearnU</strong>
            <p>About us</p>
            <p>Contact us</p>
            <p>FAQ</p>
          </FooterItem>
          <FooterItem>
            <strong>Legal</strong>
            <p>Terms and Conditions</p>
            <p>Privacy Policy</p>
          </FooterItem>
          <FooterItem>
            <strong>Contact</strong>
            <p>suppor@email.com</p>
          </FooterItem>
        </FooterLinks>
      </FooterContent>
    </FooterContainer>
  );
}