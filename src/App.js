import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import Info from '@material-ui/icons/Info';

function App() {
  return (
    <div>
      <Button variant="contained" color="secondary">
        <Info /> Test
      </Button>
    </div>
  );
}
export default App;
