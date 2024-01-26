import { Button } from '@/components/Button/styles';
import {
  AccountForm, 
  AccountInput, 
  SignUpTrialContainer, 
  SignUpTrialContent 
} from './styles';
import { Heading } from '@/components/Text';

export function SignUpTrialAccount() {
  return (
    <SignUpTrialContainer>
      <SignUpTrialContent>
        <div>
          <Heading text="Get a Trial Account" style={{color:'#3182CE'}} />
          <div>
            <p>ulearn@hotmail.com</p>
            <p>123 Avenue, Somerville, NJ</p>
          </div>
        </div>
        <AccountForm>
          <AccountInput type='text' placeholder='Name' />
          <AccountInput type='text' placeholder='Email' />
          <AccountInput type='text' placeholder='Phone' />
          <Button variant='contained' size='large' color='#3182CE'>Send</Button>
        </AccountForm>
      </SignUpTrialContent>
    </SignUpTrialContainer>
  );
}