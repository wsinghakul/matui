import "./App.css";
import Header from "./components/ui/header";
import { ThemeProvider } from "@mui/material";
import { theme } from "./components/ui/theme";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<div>Home</div>} />
          <Route path="services" element={<div>Services</div>} />
          <Route path="therevolution" element={<div>The Revolution</div>} />
          <Route path="aboutus" element={<div>about us</div>} />
          <Route path="contactus" element={<div>contact us</div>} />
          
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
