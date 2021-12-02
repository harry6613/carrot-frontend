import { Box, Grid, Toolbar, Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ChatIcon from "@mui/icons-material/Chat";
import PersonIcon from "@mui/icons-material/Person";
type MenuType = {
  title: string;
  icon: JSX.Element;
};
const MenuStyle: React.CSSProperties = {
  backgroundColor: "transparent",
  display: "flex",
  alignItems: "center",
  alignContent: "center",
  flexDirection: "column",
  padding: "10px 5px",
};
const BottomAppBar = (): JSX.Element => {
  const menuItems: MenuType[] = [
    {
      title: "홈",
      icon: <HomeIcon />,
    },
    {
      title: "동네생활",
      icon: <ArticleIcon />,
    },
    {
      title: "내근처",
      icon: <LocationOnIcon />,
    },
    {
      title: "채팅",
      icon: <ChatIcon />,
    },
    {
      title: "나의 당근",
      icon: <PersonIcon />,
    },
  ];
  return (
    <AppBar position="fixed" sx={{ top: "auto", bottom: 0 }}>
      <Toolbar>
        <Grid container>
          {menuItems.map((item: MenuType): JSX.Element => {
            return (
              <Grid item xs key={item.title}>
                <Box display="flex" justifyContent="center">
                  <Button
                    variant="contained"
                    size="large"
                    disableElevation
                    style={MenuStyle}
                  >
                    {item.icon}
                    {item.title}
                  </Button>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
export default BottomAppBar;
