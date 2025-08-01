'use client'; // if using app directory in Next.js
import { useState} from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import DonationPage from '@/components/donation/DonationPage';
import Donor from '@/components/donation/Donor';

const Page = () => {
    const [value, setValue] = useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
<Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Normal donation" value="1" />
            <Tab label="Donnor" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1"><DonationPage/></TabPanel>
        <TabPanel value="2"><Donor/></TabPanel>
      </TabContext>
    </Box>
  )
}

export default Page
