import { TextAlignJustify } from 'phosphor-react';

import { useHeadsObserver } from '@/hooks/useHeadsObserver';
import { HeaderContainer, Toggle, Nav, NavContent, NavItem } from './styles';

import logo from '@/assets/logo.svg';
import { Button } from '@/components/Button/styles';
import { useMediaQuery } from 'react-responsive';

type Heading = {
  id: string;
  title: string;
  headingId: string;
}

const headings: Heading[] = [
  { id: 'home', title: 'Home', headingId: 'homeHeading' },
  { id: 'courses', title: 'Courses', headingId: 'coursesHeading' },
  { id: 'about', title: 'About Us', headingId: 'aboutHeading' },
  { id: 'pricing', title: 'Pricing', headingId: 'pricingHeading' },
];

export function Header() {
  const { activeId } = useHeadsObserver();

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>, 
    heading: Heading
  ) => {
    e.preventDefault();
    const yOffset = -80;
    const headingElement = document.querySelector(`#${heading.id}`);
    const position = headingElement ? headingElement.getBoundingClientRect().top + window.scrollY + yOffset : 0;
    window.scrollTo({
      top: position,
      behavior: 'smooth'
    });
  };

  const isMobile = useMediaQuery({ query: '(max-width: 960px)' });

  return (
    <HeaderContainer>
      <Nav>
        <img src={logo} alt="white and blue logo of learn u" />
        <NavContent>
          {!isMobile &&
            <ul>
              {
                headings.map((heading) => (
                  <NavItem 
                    key={heading.id}
                    active={activeId === heading.headingId}
                    href={`#${heading.id}`} 
                    onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavigation(e, heading)}
                  >
                    <li>{heading.title}</li>
                  </NavItem>
                ))
              }
            </ul>
          }

          <div>
            <Button variant="outlined" size="medium">Login</Button>
            <Button variant="contained" size="medium">Sign Up</Button>
          </div>    

        </NavContent>

        <Toggle>
          <TextAlignJustify size={24} />
        </Toggle>
      </Nav>
    </HeaderContainer>
  );
}