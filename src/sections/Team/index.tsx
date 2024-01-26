import { 
  TeamContainer, 
  TeamContent,
  TeamDescription
} from './styles';
import { Carousel } from './Carousel';
import { Caption, Heading, Paragraph } from '@/components/Text';


export function Team() {
      
  return (
    <TeamContainer>
      <TeamContent>

        <TeamDescription>
          <Caption text="Team" />
          <Heading text="Meet Our Team" style={{color:'#3182CE'}} />
          <Paragraph
            style={{color: '#C4CDD5'}}
            text="Our team is composed of educators, technologists and designers, who share a common commitment to delivering a remarkable learning experience." 
          />
        </TeamDescription>

        <Carousel />
      </TeamContent>
    </TeamContainer>
  );
}