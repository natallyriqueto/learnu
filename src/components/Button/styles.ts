import { css, styled } from 'styled-components';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  variant: 'outlined' | 'contained';
  size: 'large' | 'medium' | 'small'
}

export const Button = styled.button<ButtonProps>`
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.7;
  padding: 8px 16px;
  border-radius: 8px;
  background: ${props => props.theme['gray-800']};
  color: ${props => props.theme.white};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${props => props.theme['gray-700']};
  }

  ${(props) =>
    props.variant === 'outlined' &&
    css`
      border: 1px solid var(--transparent-grey-24, rgba(145, 158, 171, 0.24));
      background: transparent;
      color: ${props => props.theme['gray-800']};

      &:hover {
        border: 1px solid #212B36;
        background: ${props => props.theme['gray-200']};
      }
    `};

  ${(props) =>
    props.size === 'large' &&
    css`
      height: 48px;
      min-width: 64px;
    `};

  ${(props) =>
    props.size === 'medium' &&
    css`
      padding: 6px 12px;
      font-size: 0.875rem;
    `};

  ${(props) =>
    props.size === 'small' &&
    css`
      padding: 4px 8px;
      font-size: 0.875rem;
    `};

  ${(props) =>
    props.color &&
    css`
      background: ${props.color};

      &:hover {
        background: ${props.color};
        filter: opacity(80%);
      }
    `};
`;