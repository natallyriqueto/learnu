import { SignNewsContainer, NewsForm, NewsButton, NewsInput, SignNewsContent } from './styles';

export function SignUpNews() {
  return (
    <SignNewsContainer>

      <SignNewsContent>
        <div>
          <h2>Sign Up For NewsLetter</h2>
          <p>Receive 50% discount of first project</p>
        </div>

        <NewsForm>
          <NewsInput type="text" placeholder="Enter your email" />
          <NewsButton type="button">Sign Up</NewsButton>
        </NewsForm>
      </SignNewsContent>

    </ SignNewsContainer>
  );
}