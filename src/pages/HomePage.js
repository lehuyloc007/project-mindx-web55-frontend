import { NavLink } from "react-router-dom";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';
import "./HomePage.css"
const HomePage = () => {
    const color = grey[900];
    return (<Box className="Welcome" sx={{ textAlign: 'center', display: 'flex', justifyContent: 'center',alignItems: 'center',flexDirection: 'column' }}>
        <NavLink className="Welcome__Logo" to="/" ></NavLink>
        <Typography variant="h2" color="white" sx={{my:2}}>Tìm nguồn cảm hứng của bạn</Typography>
        <Typography variant="h5" color="white" sx={{my:2}}>Hãy tham gia cộng đồng Cooking Holics, ngôi nhà chung của những tâm hồn ăn uống.</Typography>
        <NavLink  className="Welcome__btn" to="/login-register"><Typography variant="h6" bgcolor="white" color={color} sx={{px:3, py:1, mt:4}}>Bắt đầu ngay</Typography></NavLink>
    </Box>)
}
export default HomePage;

