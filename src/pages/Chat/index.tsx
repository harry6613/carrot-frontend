import { Box, Grid, Toolbar, Button, Avatar, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";

const Chat = (): JSX.Element => {
  return (
    <main>
      <AppBar sx={{ backgroundColor: "#ffffff", color: "#000000" }}>
        <Toolbar>
          <Grid container>
            <Grid item xs={1}>
              <Avatar variant="rounded" />
            </Grid>
            <Grid item xs={9}>
              <Grid container>
                <Grid item xs={12}>
                  <Typography variant="h6">사가세요....</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle1">16000원</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2}>
              <Button color="secondary" variant="outlined">
                거래후기남기기
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </main>
  );
};
export default Chat;
