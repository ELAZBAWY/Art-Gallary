import "./App.css";
import Hero from "./Hero";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import Featured from "./Featured";
import Sales from "./Sales";
import TrendArtists from "./TrendArtists";
import Footer from "./Footer";
import Sales2 from "./Sales2";
import ReadMore from "./ReadMore";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Hero />
        <Featured />
        <Sales />
        <TrendArtists />
        <ReadMore />
        <Sales2 />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
