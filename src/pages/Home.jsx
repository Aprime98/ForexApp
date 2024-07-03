import React from 'react';
import { Box } from '@mui/material';

import HeroBanner from '../components/HeroBanner';
import Courses from '../components/Courses';
// import FXFetch from '../components/ForexDataFetcher';


const Home = () => {
  return (
    <Box>
      <HeroBanner /> 
    
      <Courses />
      {/* <FXFetch /> */}
    </Box>
  )
}

export default Home