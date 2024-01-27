import { styled } from 'styled-components';

export const TeamContainer = styled.section`
  background: ${props => props.theme['gray-900']};
`;

export const TeamContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 1.5rem;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 5rem;
  
  @media(min-width: 960px) {
    padding: 7rem 1.5rem;
    flex-wrap: nowrap;
  } 
`;

export const TeamDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 30rem;
  line-height: 1.6;
`;