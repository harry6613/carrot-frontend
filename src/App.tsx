import { Box, Grid, Toolbar, Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import BottomAppBar from "./components/BottomAppBar";

const App = (): JSX.Element => {
  return (
    <main>
      <AppBar position="fixed">
        <Toolbar></Toolbar>
      </AppBar>
      <Toolbar />
      text
      <BottomAppBar />
    </main>
  );
};
export default App;
