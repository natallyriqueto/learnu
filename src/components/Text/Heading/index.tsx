import { HeadingContainer } from './styles';

interface HeadingProps extends React.HTMLAttributes<HTMLElement>{
  text: string;
}

export const Heading = ({ text, ...rest }: HeadingProps) => {
  return (
    <HeadingContainer {...rest}>{text}</HeadingContainer>
  );
};