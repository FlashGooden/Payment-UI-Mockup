
import './App.css';
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import theme from './theme'
import AppWrapper from './AppWrapper'

function App() {
  return (
    <div >
      <ThemeProvider >
          <CSSReset theme={theme}/>
          <AppWrapper />
      </ThemeProvider>
    </div>
  );
}

export default App;
