import { Book, Calendar, RocketLaunch } from 'phosphor-react';
import { 
  ServiceContainer, 
  ServiceDescription, 
  ServiceGrid, 
  ServiceGridItem 
} from './styles';


export function Services() {
  return (
    <ServiceContainer>

      <ServiceDescription>
        <strong>our services</strong>
        <h1>We Provide</h1>
        <p>With our comprehensive suite of offerings, we strive to ensure that learners of all backgrounds and interests can find the support and resources they need to succeed</p>
      </ServiceDescription>
  
      <ServiceGrid>
        <ServiceGridItem>
          <Book size={32} color='blue'/>
          <h4>Course Catalog</h4>
          <p>Discover a vast array of courses spanning diverse subjects and disciplines.</p>
        </ServiceGridItem>

        <ServiceGridItem>
          <Calendar size={32} color='red'/>
          <h4>Personalized Learning</h4>
          <p>With customizable learning paths, you can learn at your own pace.</p>
        </ServiceGridItem>

        <ServiceGridItem>
          <RocketLaunch size={32} color='blue'/>
          <h4>Career Boost</h4>
          <p>We go beyond academic instruction to offer career guidance and job placement assistance.</p>
        </ServiceGridItem>
      </ServiceGrid>

    </ServiceContainer>
  );
}