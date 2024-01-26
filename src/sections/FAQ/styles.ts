import { styled } from 'styled-components';

export const FrequentlyAskedContainer = styled.section`
  max-width: 1400px;
  min-height: 70vh;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 2.5rem;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Title = styled.h5`
    font-size: 1rem;
    font-weight: 600;
    color: ${props => props.theme.text['primary']};
`;

export const QuestionsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5rem;
`;

export const Questions = styled.div`
    padding-bottom: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    p {
        line-height: 1.6;
    }
`;

export const Divider = styled.div`
    height: 1px;
    background-color: ${props => props.theme['divider']};
    margin: 0.5rem 0;
`;