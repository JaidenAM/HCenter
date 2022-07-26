import React from "react";
import { Box, Card, CardActions, CardContent} from "@mui/material";
import Button from '@mui/material/Button';
import ButtonTheme from './Theme'
import { ThemeProvider } from '@mui/material';

function App() {
    return (
      <ThemeProvider  theme={ButtonTheme}>
      <div>
        <header className="App-header">
        <img src="https://hopecenters.net/wp-content/uploads/2018/10/Hope-Center-Logo.png" height={180} width={255} alt="HopeCenter"/>
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
        <Button
         size="large"
         variant="contained"
         margin= "0 10px"
         href=""
         target="_blank"
         rel="noopener noreferrer"
         >Organization Donor</Button>
        <Button
          size="large"
          variant="contained"
          href=""
          target="_blank"
          rel="noopener noreferrer"
          margin= "0 10px"
          >Hope Center Employee</Button>
        </header>
      </div>
      </ThemeProvider>
    );
  }
  export default App;