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
          <Route path="customsoftware" element={<div>Custom Software</div>} />
          <Route path="mobileapps" element={<div>Mobile Apps</div>} />
          <Route path="revolution" element={<div>The Revolution</div>} />
          <Route path="about" element={<div>about us</div>} />
          <Route path="contact" element={<div>contact us</div>} />
          <Route path="estimate" element={<div>free estimate</div>} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
