import { AppBar, Button, Grid, Toolbar, Typography } from "@mui/material";

const Header = () => {


  return (
    <AppBar position="static" id="head">
      <Toolbar variant="dense" className="container">

        <Grid sx={{ flexGrow: 1 }}>
          <Button size="small" className="pri-btn">Home</Button>
          <Button size="small" className="pri-btn">Tour</Button>
          <Button size="small" className="pri-btn">Blog</Button>
        </Grid>

        <Grid>
          <div className="logo"></div>

        </Grid>
        <Button size="small" className="sign-up-btn">Sign Up</Button>
        <Button size="small" className="log-in-btn">Log In</Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header;