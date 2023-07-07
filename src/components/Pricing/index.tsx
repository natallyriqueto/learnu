import { AirplaneTakeoff, Check, PaperPlaneTilt, RocketLaunch } from 'phosphor-react';
import { 
  Card, 
  Button, 
  BlackButton, 
  CardsContainer, 
  PricingContainer, 
  BlueButton,
  Price,
  BenefitsList,
  Description
} from './styles';

export function Pricing() {
  return (
    <PricingContainer>

      <Description>
        <strong>pricing</strong>
        <h1>Check our Pricing</h1>
        <p>Choose the perfect plan for your needs. Always flexible to grow.</p>
      </Description>

      <CardsContainer>

        <Card>
          <header>
            <Price>
              <h2>Basic</h2>
              <h3>$29 /mo</h3>
            </Price>
            <PaperPlaneTilt size={60} color='gray'/>
          </header>
          <p>Our Basic Plan is designed to provide an affordable entry point for learners of all backgrounds.</p>
          <BenefitsList>
            <ul>
              <li>
                <Check size={20} />
                <span>Affordable and Accessible</span>
              </li>
              <li>
                <Check size={20} />
                <span>Core Course Access</span>
              </li>
              <li>
                <Check size={20} />
                <span>Email Support</span>
              </li>
            </ul>
            <Button type='button'>Choose package</Button>
          </BenefitsList>
        </Card>

        <Card>
          <header>
            <Price>
              <h2>Starter</h2>
              <h3>$59 /mo</h3>
            </Price>
            <AirplaneTakeoff size={60} color='gray' />
          </header>
          <p>Unlock a wider range of courses, giving you more opportunities to expand your learning horizons.</p>
          <BenefitsList>
            <ul>
              <li>
                <Check size={20} />
                <span>Expanded Course Library</span>
              </li>
              <li>
                <Check size={20} />
                <span>Enhanced Support</span>
              </li>
              <li>
                <Check size={20} />
                <span>Interactive Resources</span>
              </li>
            </ul>
            <BlackButton type='button'>Choose package</BlackButton>
          </BenefitsList>
        </Card>

        <Card>
          <header>
            <Price>
              <h2>Premium</h2>
              <h3>$99 /mo</h3>
            </Price>
            <RocketLaunch size={60} color='gray' />
          </header>
          <p>Receive personalized mentorship from our experienced instructors and subject matter experts.</p>
          <BenefitsList>
            <ul>
              <li>
                <Check size={20} />
                <span>Dedicated Mentorship</span>
              </li>
              <li>
                <Check size={20} />
                <span>Live Webinars</span>
              </li>
              <li>
                <Check size={20} />
                <span>Job Placement</span>
              </li>
            </ul>
            <BlueButton type='button'>Choose package</BlueButton>
          </BenefitsList>
        </Card>
      </CardsContainer>

    </PricingContainer>
  );
}