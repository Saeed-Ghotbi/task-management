import { createTheme } from '@mui/material/styles';
import Dashboard from "./Pages/Dashboard"


const theme = createTheme({
  direction: 'rtl',
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h2',
          h2: 'h2',
          h3: 'h2',
          h4: 'h2',
          h5: 'h2',
          h6: 'h2',
          subtitle1: 'h2',
          subtitle2: 'h2',
          body1: 'span',
          body2: 'span',
        },
      },
    },
  },
});


function App() {
  return (
    <div className="App">
      <header className="App-header">
    <Dashboard/>
        
      </header>
    </div>
  );
}

export default App;
