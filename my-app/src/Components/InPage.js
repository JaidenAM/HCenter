import React from "react";
import { Box, Card, CardActions, CardContent} from "@mui/material";
import Button from '@mui/material/Button';
import ButtonTheme from './Theme'
import { ThemeProvider } from '@mui/material';

// const styles = {
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   height: '100vh',
// };
function App() {
  return (
    <ThemeProvider  theme={ButtonTheme}>
      <Box sx={{ '& button': { m: 2 } }}>
    <div>
      <header className="App-header">
      <Card style={{backgroundColor: '#D7D1B3'}} sx={{margin:1}}>
      <CardContent theme={ButtonTheme}>
      Welcome to the Hope Center
      </CardContent>
      <CardActions>
      </CardActions>
      </Card>
      <Button
       size="large"
       variant="contained"
       href=""
       target="_blank"
       rel="noopener noreferrer"
       margin= "0 10px"
       >Individual Donor</Button>
      <img src="https://hopecenters.net/wp-content/uploads/2018/10/Hope-Center-Logo.png" height={180} width={255} alt="HopeCenter"/>
      </header>
    </div>
    </Box>
    </ThemeProvider>
  );
}
export default App;