import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import TradeInformation from "./components/TradeInformation";
import ListItemText from "@mui/material/ListItemText";
import { tradeItems } from "./data";
import TradeEvent from "./components/TradeEvent";
const ImageTheme = {
  width: "150px",
  height: "150px",
};
const Home = (): JSX.Element => {
  return (
    <Box>
      <List>
        {tradeItems.map((item): JSX.Element => {
          return (
            <ListItem key={item.id}>
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar
                    variant="rounded"
                    src={item.imageUrl}
                    sx={ImageTheme}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <TradeInformation
                      title={item.title}
                      location={item.location}
                      price={item.price}
                      createdAt={new Date()}
                    />
                  }
                  secondary={
                    <TradeEvent chat={item.chat} interest={item.interest} />
                  }
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};
export default Home;
