import { 
  FrequentlyAskedContainer, 
  QuestionsContainer, 
  Questions, 
  Title, 
  QuestionsContent, 
  Divider
} from './styles';
import askedImg from '../../assets/askedImg.png';

export function FrequentlyAsked() {
  return (
    <FrequentlyAskedContainer>
      <strong>faqs</strong>
      <h1>Frequently Asked Questions</h1>
      
      <QuestionsContainer>

        <QuestionsContent>
          <Questions>
            <Divider />
            <Title>How do I enroll in a course?</Title>
            <p>Enrolling in a course is simple! Just browse our course catalog, select the course you're interested in, and click the "Enroll" button or choose between one of our plans.</p>
            <Divider />
          </Questions>

          <Questions>
            <Title>Can I access the course materials on multiple devices?</Title>
            <p>Absolutely! Our platform is designed to be flexible and accessible. You can access the course materials, including videos, lectures, and resources, from any device with an internet connection. </p>
            <Divider />
          </Questions>

          <Questions>
            <Title>Are there any prerequisites for the courses?</Title>
            <p>The prerequisites vary for each course and are mentioned in the course description. Some courses may have recommended prerequisites to ensure you have a foundational understanding of the subject matter.</p>
            <Divider />
          </Questions>

          <Questions>
            <Title>Can I get a refund if I'm not satisfied with a course?</Title>
            <p>We want you to be fully satisfied with your learning experience. If, within the first 7 days of enrollment, you find that the course does not meet your expectations, you can request a refund.</p>
            <Divider />
          </Questions>
        </QuestionsContent>

        <img src={askedImg} alt="woman with a blue question mark" />
      </QuestionsContainer>
    </FrequentlyAskedContainer>
  );
}