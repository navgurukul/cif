import "./App.css";
import "./index.css";
import Routing from "./Route";
import { ThemeProvider } from "@mui/material/styles";
// import theme from "../../theme/theme";

import theme from "./Theme/theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routing />
    </ThemeProvider>
  );
}

export default App;
