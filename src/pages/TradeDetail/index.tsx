/* eslint-disable react/jsx-no-undef */
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  Avatar,
  Box,
  Grid,
  Typography,
  LinearProgress,
  AppBar,
  Toolbar,
} from "@mui/material";
import SentimentSatisfiedicon from "@mui/icons-material/SentimentSatisfied";
const TradeDetail = (): JSX.Element => {
  return (
    <Box paddingTop="20px">
      <Grid container>
        <Grid item xs={1}>
          <Avatar src="이미지 주소" sx={{ width: 80, height: 80 }} />
        </Grid>
        <Grid item xs={9}>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="subtitle1">신무겸</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1">남양주시</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2}>
          <Grid container>
            <Grid item xs={8}>
              <Typography variant="h6" color="primary">
                36.6C
              </Typography>
              <LinearProgress
                variant="determinate"
                value={70}
                sx={{ height: 10, borderRadius: 5 }}
              />
            </Grid>
            <Grid item xs={4}>
              <SentimentSatisfiedicon fontSize="large" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <hr />
      <Typography variant="h3">스투시 맨투맨</Typography>
      <Box>
        물건 팔아요
        <br />
        아주 싸게 팔아여
      </Box>
      <AppBar
        position="fixed"
        color="primary"
        sx={{ top: "auto", bottom: 0, backgroundColor: "#ffffff " }}
      >
        <Toolbar>
          <Grid container>
            <Grid
              item
              xs={1}
              sx={{
                display: "flex",
                alignItems: "center",
                alignContent: "center",
              }}
            >
              <FavoriteIcon color="primary" fontSize="large" />
            </Grid>
          </Grid>
        </Toolbar>
        <Grid item xs={8}>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h5" color="#2b2b2b">
                <strong>가격제안불가</strong>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </AppBar>
    </Box>
  );
};
export default TradeDetail;
