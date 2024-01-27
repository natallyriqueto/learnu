import { AirplaneTakeoff, Check, PaperPlaneTilt, RocketLaunch } from 'phosphor-react';
import { 
  Card,
  CardsContainer, 
  PricingContainer,
  Price,
  BenefitsList,
  Description
} from './styles';
import { Button } from '@/components/Button/styles';
import { motion } from 'framer-motion';
import { Caption, Heading, Paragraph } from '@/components/Text';

export function Pricing() {
  return (
    <PricingContainer id="pricing">
      <motion.div
        key="CoursesDescription"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={{
          visible: { y: 0, opacity: 1, },
          hidden: { y: -100, opacity: 0, }
        }}
      >
        <Description>
          <Caption text="pricing" />
          <Heading id="pricingHeading" text="Check our Pricing" />
          <Paragraph text="Choose the perfect plan for your needs. Always flexible to grow." />
        </Description>
      </motion.div>
      
      <CardsContainer>

        <Card>
          <header>
            <Price>
              <h3>Basic</h3>
              <div>
                <h4>$29</h4><span>/mo</span>
              </div>
            </Price>
            <PaperPlaneTilt size={32} color='gray'/>
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
            <Button variant='outlined' size='large'>Choose Package</Button>
          </BenefitsList>
        </Card>

        <Card>
          <header>
            <Price>
              <h3>Starter</h3>
              <div>
                <h4>$59</h4><span>/mo</span>
              </div>
            </Price>
            <AirplaneTakeoff size={32} color='gray' />
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
            <Button variant='contained' size='large'>Choose Package</Button>
          </BenefitsList>
        </Card>

        <Card>
          <header>
            <Price>
              <h3>Premium</h3>
              <div>
                <h4>$99</h4><span>/mo</span>
              </div>
            </Price>
            <RocketLaunch size={32} color='gray' />
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
            <Button variant='contained' size='large' color='#3182CE'>Choose Package</Button>
          </BenefitsList>
        </Card>
      </CardsContainer>

    </PricingContainer>
  );
}