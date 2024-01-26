import { motion } from 'framer-motion';

import { 
  AboutContainer,
  AboutIntroduction,
  AboutText,
  AboutContent,
  AboutStats,
  AboutStatsItem,
  AboutImage
} from './styles';

import aboutImage from '@/assets/aboutCover.jpg';
import { Caption, Heading, Paragraph } from '@/components/Text';

export function About() {
  return (
    <AboutContainer id="about">
      <AboutContent>
        <AboutImage>
          <img src={aboutImage} />
        </AboutImage>

        <AboutText>
          <motion.div
            key="CoursesDescription"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
              visible: { x: 0, opacity: 1, },
              hidden: { x: -100, opacity: 0, }
            }}
          >
            <AboutIntroduction>
              <Caption text="about us" />
              <Heading id="aboutHeading" text="Who we are" />
              <Paragraph text="At LearnU, we are passionate about empowering learners worldwide and transforming the way education is accessed and experienced." />
            </AboutIntroduction>
          </motion.div>
          
          <AboutStats>
            <AboutStatsItem>
              <div>
                <h5>14k<strong>+</strong></h5>
                <strong>learners</strong>
              </div>
              <div><p>We are dedicated to providing each learner with the tools and resources they need to succeed.</p></div>
            </AboutStatsItem>

            <AboutStatsItem>
              <div>
                <h5>2k<strong>+</strong></h5>
                <strong>courses</strong>
              </div>
              <div><p>From academic subjects to professional development, learners can choose from an extensive array of courses.</p></div>
            </AboutStatsItem>

            <AboutStatsItem>
              <div>
                <h5>20k<strong>+</strong></h5>
                <strong>graduates</strong>
              </div>  
              <div><p>Our graduates are making a positive impact in various industries through their expertise and accomplishments.</p></div>
            </AboutStatsItem>
          </AboutStats>

        </AboutText>
      </AboutContent>
    </AboutContainer>
  );
}