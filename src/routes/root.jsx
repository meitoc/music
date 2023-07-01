import { Outlet } from "react-router-dom";
import Container from '@mui/material/Container';
export default function Root() {
    return (
      <Container maxWidth="sm" disableGutters={true} sx={{display: "flex", flexDirection:"column", alignItems:"center"}}>
        <div id="header">
          <h1>Meitoc Music Player</h1>
        </div>
        <div id="detail"><Outlet /></div>
      </Container>
    );
  }