import { 
  TeamContainer, 
  TeamContent,
  TeamDescription
} from './styles';
import { Carousel } from './Carousel';


export function Team() {
      
  return (
    <TeamContainer>
      <TeamContent>

        <TeamDescription>
          <strong>Team</strong>
          <h1>Meet Our Team</h1>
          <p>Our team is composed of educators, technologists and designers, who share a common commitment to delivering a remarkable learning experience.</p>
        </TeamDescription>

        <Carousel />
      </TeamContent>
    </TeamContainer>
  );
}