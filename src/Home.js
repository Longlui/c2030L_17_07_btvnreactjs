import { Link } from "react-router-dom";
import { Typography, Button } from "@mui/material";

function Home() {
  return (
    <div>
      <Typography variant="h4">Home Page</Typography>

      <Typography variant="body1">Chào mừng bạn đến với cửa hàng</Typography>
      <br />

      <Button component={Link} to="/products" variant="contained" color="primary"> Danh sách sản phẩm</Button>
    </div>
  );
}

export default Home;