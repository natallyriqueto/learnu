import { AccountButton, AccountForm, AccountInput, SignUpTrialContainer, SignUpTrialContent } from './styles';

export function SignUpTrialAccount() {
  return (
    <SignUpTrialContainer>
      <SignUpTrialContent>
        <div>
          <h1>Get a Trial Account</h1>
          <div>
            <p>ulearn@hotmail.com</p>
            <p>123 Avenue, Somerville, NJ</p>
          </div>
        </div>
        <AccountForm>
          <AccountInput type='text' placeholder='Name' />
          <AccountInput type='text' placeholder='Email' />
          <AccountInput type='text' placeholder='Phone' />
          <AccountButton type='button'>Send</AccountButton>
        </AccountForm>
      </SignUpTrialContent>
    </SignUpTrialContainer>
  );
}