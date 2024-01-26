import styled from 'styled-components';

import { responsiveFontSizes, pxToRem } from '@/utils/css';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 20.75rem;
  height: 37.5rem;

  border-radius: 1rem;
  box-shadow: 0px 20px 40px -4px rgba(145, 158, 171, 0.16);
  overflow: hidden;
`;

export const CardImage = styled.img`
  width: 20.75rem;
  height: 20.75rem;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;

  & > span {
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    color: ${props => props.theme.primary['main']};
  }

  & > h5 {
    height: 1.5rem;
    overflow-y: hidden;
    text-overflow: ellipsis;
    font-size: ${pxToRem(17)};
    ${responsiveFontSizes({ sm: 17, md: 20, lg: 20 })}
    font-weight: 700;
    color: ${props => props.theme.text['primary']};
    text-transform: capitalize;
  }
`;

export const Divider = styled.div`
  width: 1px;
  height: 100%;
  background: rgba(145, 158, 171, 0.20);
`;

export const CardInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  strong {
    font-size: ${pxToRem(17)};
    font-weight: 600;
  }

  span {
    font-size: 0.875rem;
    font-weight: 500;
    color: ${props => props.theme.text['secondary']};
  }
`;

export const CardTeacher = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  strong {
    font-size: 0.875rem;
    font-weight: 500;
    color: ${props => props.theme.text['primary']};
  }

  span {
    font-size: 0.875rem;
    color: ${props => props.theme.text['secondary']};
    text-decoration: underline;
  }
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-top: 1rem;
  margin: 0 1.5rem;
  border-top: 1px solid rgba(145, 158, 171, 0.20);

  div {
    display: flex;
    align-items: inherit;
    gap: 0.5rem;

    font-size: 0.875rem;
    color: ${props => props.theme.text['secondary']};
  }
`;

export const Avatar = styled.img`
  border-radius: 999px;
  width: 2.5rem;
  height: 2.5rem;
`;