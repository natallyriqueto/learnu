import { styled } from 'styled-components';

export const CaptionContainer = styled.span`
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  color: ${props => props.theme.text['secondary']};
`;