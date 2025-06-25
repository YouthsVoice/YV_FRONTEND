import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';


const Donor = () => {
    const [dtype, setDType] = useState<string>('')
    const [name,setName]= useState<string>('')
    const [email,setEmail]= useState<string>('')
    const [phone,setPhone]= useState<integer>()
    const [ammount,setAmmount]= useState<integer>()
    console.log(name,email,phone)


  const handleChange = (event: SelectChangeEvent) => {
    setDType(event.target.value);
  };

  return (
    <div className="px-4 py-4">
      
<Grid  container spacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} columns={{ xs: 1, sm: 1, md: 2 }}>
 <Grid size="auto">
    <form className=' w-[80vh] bg-blend-saturation bg-gray-100/70 px-5 py-5 rounded-lg flex items-center justify-center gap-3 flex-col'>
        <TextField className='w-[78vh]' onChange={(e)=>{setName(e.target.value)}} id="filled-basic" label="Name" variant="filled" />
        <TextField className='w-[78vh]' onChange={(e)=>{setEmail(e.target.value)}} id="filled-basic" label="Email" variant="filled" />
        <TextField className='w-[78vh]' onChange={(e)=>{setPhone(JSON.parse(e.target.value))}} id="filled-basic" type='number' label="Phone" variant="filled" />
         <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel  id="demo-simple-select-autowidth-label">Type</InputLabel>
        <Select className='w-[78vh]'
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={dtype}
          onChange={handleChange}
          autoWidth
          label="Type"
        >
          <MenuItem value={dtype}>
            <em>None</em>
          </MenuItem>
          <MenuItem onChange={()=>{setDType("Monthly")}} value="Monthly">Monthly</MenuItem>
          <MenuItem onChange={()=>{setDType("Weekly")}} value="Weekly">Weekly</MenuItem>
        </Select>
      </FormControl>
    </div>
    <div className='flex items-center flex-col justify-center gap-3'>
        <FormControl fullWidth className='gap-2' sx={{ m: 2 }}>
          <input className='w-[76vh]' type="number" value={ammount} onChange={(e)=>{setAmmount(JSON.parse(e.target.value))}} min={100} placeholder='Ammount in BDT' />
          
        </FormControl>
        <div className=' gap-3 w-[78vh] flex items-center justify-between'>
             <Button className='w-[24vh]' onClick={()=>{setAmmount(100)}} variant="outlined">100</Button>
             <Button className='w-[24vh]' onClick={()=>{setAmmount(200)}} variant="outlined">200</Button>
             <Button  className='w-[24vh]' onClick={()=>{setAmmount(500)}} variant="outlined">500</Button>

        </div>
        <Button className='w-[54vh]' color='secondary' variant="outlined">SUBMIT</Button>

    </div>
    </form>
 </Grid>
 <Grid size="auto">
    HELLP
 </Grid>
</Grid>
    </div>
  )
}

export default Donor
