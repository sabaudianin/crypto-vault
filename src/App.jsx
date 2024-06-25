import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const App = () => {
  return (
      <div>
        <Typography variant="h3" component="h3">
          Hello, Vite with Material UI!
        </Typography>
        <Button variant="contained" color="secondary">
          Material UI Button
        </Button>
      </div>
  );
};

export default App;
