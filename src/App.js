import "./App.css";
import Header from "./components/ui/header";
import { ThemeProvider } from "@mui/material";
import { theme } from "./components/ui/theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header></Header>
   </ThemeProvider>  
   
  );
}

export default App;
