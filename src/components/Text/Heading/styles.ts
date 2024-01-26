import { styled } from 'styled-components';

import { responsiveFontSizes } from '@/utils/css';

export const HeadingContainer = styled.h2`
  color: ${props => props.theme.text['primary']};
  font-weight: 800;
  ${responsiveFontSizes({ sm: 32, md: 48, lg: 48 })}
`;