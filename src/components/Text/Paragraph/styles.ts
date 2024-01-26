import styled from 'styled-components';

import { responsiveFontSizes } from '@/utils/css';

export const ParagraphContainer = styled.p`
  font-weight: 400;
  color: ${props => props.theme.text['secondary']};
  ${responsiveFontSizes({ sm: 14, md: 16, lg: 16 })}
`;