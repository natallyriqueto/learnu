import { Newspaper } from 'phosphor-react';
import { SignNewsContainer, NewsForm, NewsInput, SignNewsContent, Description } from './styles';
import { Button } from '@/components/Button/styles';

export function SignUpNews() {
  return (
    <SignNewsContainer>
      <SignNewsContent>
        <Description>
          <Newspaper size={70} weight="duotone" color="#3182CE" />
          <div>
            <h2>Sign Up For NewsLetter</h2>
            <p>Receive 50% discount of first project</p>
          </div>
        </Description>

        <NewsForm>
          <NewsInput type="text" placeholder="Enter your email" />
          <Button variant='contained' size='large'>Sign Up</Button>
        </NewsForm>
      </SignNewsContent>

    </ SignNewsContainer>
  );
}