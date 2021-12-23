import { Box } from "@mui/material";
import ChatIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import FavoriteIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { jsx } from "@emotion/react";

type TradeEventType = {
  chat?: number;
  interest?: number;
};
const TradeEvent = (props: TradeEventType): JSX.Element => {
  const { chat, interest } = props;
  return (
    <Box display="flex" alignItems="center" justifyContent="right">
      {chat && (
        <>
          <ChatIcon />
          {chat}
        </>
      )}
      {interest && (
        <>
          <FavoriteIcon />
          {interest}
        </>
      )}
    </Box>
  );
};
export default TradeEvent;
