/* eslint-disable react/jsx-no-undef */
import {
  Box,
  Grid,
  Toolbar,
  Button,
  Avatar,
  Typography,
  TextField,
  IconButton,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import BottomAppBar from "./components/BottomAppBar";
import Home from "./pages/Home";
import TradeDetail from "./pages/TradeDetail";
import Chat from "./pages/Chat";
import TradeAppBar from "./pages/TradeDetail/components/TradeAppBar";
import SendIcon from "@mui/icons-material/Send";
import moment from "moment";
import { messages } from "./pages/Chat/data";
const App = (): JSX.Element => {
  return (
    <main>
      <Chat />
      <Box>
        <Grid container>
          {messages.mao((messages): JSX.Element => {
            return (
              <Grid item xs={12} key={message.id}>
                {message.sender !== myId && (
                  <Box display="flex" justifyContent="left" alignItems="end">
                    <Chip label={message.message} />
                    <Typography variant="caption">
                      {moment(message.sendedAt).format("YYYY-MM-DD HH:mm:ss")}
                    </Typography>
                  </Box>
                )}
                {messages.sender === myId && (
                  <Box display="flex" justifyContent="right" alignItems="end">
                    <Typography variant="caption">
                      {moment(message.sendedAt).format("YYYY-MM-DD HH:mm:ss")}
                    </Typography>
                    <Chip label={messages.message} />
                  </Box>
                )}
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <AppBar
        position="fixed"
        color="primary"
        sx={{ top: "auto", bottom: 0, backgroundColor: "#ffffff" }}
      >
        <Toolbar>
          <Grid container>
            <Grid item xs={11}>
              <TextField size="small" fullWidth />
            </Grid>
            <Grid item xs={1}>
              <Box display="flex" justifyContent="center">
                <IconButton>
                  <SendIcon />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </main>
  );
};
export default App;
