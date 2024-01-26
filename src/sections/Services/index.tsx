import { 
  ServiceContainer, 
  ServiceDescription, 
  ServiceCards,
  Card,
  ServiceContent
} from './styles';

import { Caption, Heading, Paragraph } from '@/components/Text';

import bookIcon from '@/assets/book.svg';
import calendarIcon from '@/assets/calendar.svg';
import rocketIcon from '@/assets/rocket.svg';

export function Services() {
  return (
    <ServiceContainer>
      <ServiceContent>
        <ServiceDescription>
          <Caption text="our services" />
          <Heading text="We Provide" />
          <Paragraph text="With our comprehensive suite of offerings, we strive to ensure that learners of all backgrounds and interests can find the support and resources they need to succeed." />
        </ServiceDescription>
  
        <ServiceCards>
          <Card>
            <img src={bookIcon}/>
            <h4>Course Catalog</h4>
            <p>Discover a vast array of courses spanning diverse subjects and disciplines.</p>
          </Card>

          <Card>
            <img src={calendarIcon}/>
            <h4>Personalized Learning</h4>
            <p>With customizable learning paths, you can learn at your own pace.</p>
          </Card>

          <Card>
            <img src={rocketIcon}/>
            <h4>Career Boost</h4>
            <p>We go beyond academic instruction to offer career guidance and job placement assistance.</p>
          </Card>
        </ServiceCards>
      </ServiceContent>
    </ServiceContainer>
  );
}