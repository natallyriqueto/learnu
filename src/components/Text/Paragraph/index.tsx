import { ParagraphContainer } from './styles';

interface ParagraphProps extends React.HTMLAttributes<HTMLElement> {
  text: string;
}

export const Paragraph = ({ text, ...rest }: ParagraphProps) => {
  return (
    <ParagraphContainer {...rest}>{text}</ParagraphContainer>
  );
};