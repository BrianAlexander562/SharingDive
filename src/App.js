import { ThemeProvider } from "@emotion/react";
import { Routes, Route } from "react-router-dom";
import theme from "../src/themes/theme"
import ButtomAppBar from "../src/componentes/ButtomAppBar"
import Home from "../src/pages/Home"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ButtomAppBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
