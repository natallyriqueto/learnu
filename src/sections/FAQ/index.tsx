import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

import { 
  FrequentlyAskedContainer, 
  QuestionsContainer, 
  Questions, 
  Title, 
  Divider,
  Description
} from './styles';

import askedImg from '@/assets/askedImg.png';
import { Caption, Heading, Paragraph } from '@/components/Text';

export function FrequentlyAsked() {
  const isMd = useMediaQuery({ query: '(max-width: 1280px)' });
  
  return (
    <FrequentlyAskedContainer>
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
          <Caption text="faqs" />
          <Heading text="Frequently Asked Questions" />
        </Description>
      </motion.div>
      <QuestionsContainer>

        <div>
          <Questions>
            <Divider />
            <Title>How do I enroll in a course?</Title>
            <Paragraph
              text="Enrolling in a course is simple! Just browse our course catalog, select the 
              course you're interested in, and click the 'Enroll' button or choose between one of our plans." 
            />
            <Divider />
          </Questions>

          <Questions>
            <Title>Can I access the course materials on multiple devices?</Title>
            <Paragraph
              text="Absolutely! Our platform is designed to be flexible and accessible. You can 
              access the course materials, including videos, lectures, and resources, from any device with an internet connection." 
            />
            <Divider />
          </Questions>

          <Questions>
            <Title>Are there any prerequisites for the courses?</Title>
            <Paragraph
              text="The prerequisites vary for each course and are mentioned in the course description. 
              Some courses may have recommended prerequisites to ensure you have a foundational understanding of the subject matter."
            />
            <Divider />
          </Questions>

          <Questions>
            <Title>Can I get a refund if I'm not satisfied with a course?</Title>
            <Paragraph
              text="We want you to be fully satisfied with your learning experience. If, within the 
              first 7 days of enrollment, you find that the course does not meet your expectations, you can request a refund."
            />
            <Divider />
          </Questions>
        </div>

        {!isMd && <img src={askedImg} alt="woman with a blue question mark" />}
      </QuestionsContainer>
    </FrequentlyAskedContainer>
  );
}