import { ThemeProvider } from 'styled-components';

import { defaultTheme } from '@/styles/themes/defaultTheme';
import { Home } from '@/pages/Home';
import { GlobalStyle } from '@/styles/global';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Home />
      <Footer/>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
