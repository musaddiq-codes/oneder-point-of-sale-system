import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';

export default function DropDown() {
  const [age, setAge] = React.useState('');

  const dropDownFromDB = {
    value1: 'Ten',
    value2: 'Twenty',
    value3: 'Thirty',
    value4: 'Thirty',
  }
  
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10} sx={{ color: 'darkgray' }}>{dropDownFromDB.value1}</MenuItem>
          <MenuItem value={20} sx={{ color: 'darkgray' }}>{dropDownFromDB.value2}</MenuItem>
          <MenuItem value={30} sx={{ color: 'darkgray' }}>{dropDownFromDB.value3}</MenuItem>
          <MenuItem value={30} sx={{ color: 'darkgray' }}>{dropDownFromDB.value4}</MenuItem>
        </Select>
      </FormControl>

    </div>
  );
}