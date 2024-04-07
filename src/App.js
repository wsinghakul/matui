import "./App.css";
import Header from "./components/ui/header";
import { ThemeProvider } from "@mui/material";
import { themes } from "./components/ui/theme";
function App() {
  return (
    <ThemeProvider theme={themes}>
      <Header></Header>
   </ThemeProvider>  
   
  );
}

export default App;
