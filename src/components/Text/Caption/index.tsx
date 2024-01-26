import { CaptionContainer } from './styles';

interface CaptionProps {
  text: string;
}

export const Caption = ({ text }: CaptionProps) => {
  return (
    <CaptionContainer>{text}</CaptionContainer>
  );
};