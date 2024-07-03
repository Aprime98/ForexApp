import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/Banner2.jpg';

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px', mb: { lg: '212px', xs: '70px' } } }} position="relative" p="20px">
    <Typography color="#FF2625" fontWeight="600" fontSize="21px">Forex Pro Academy</Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '34px', xs: '30px' } }} mb="6px" mt="10px">
      Education is Power
    </Typography>
    <Typography fontSize="16px" fontFamily="Alegreya" lineHeight="35px">
      Check out the most effective Road-Map personalized to you!
    </Typography>
    {/* <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
    </Stack> */}
    <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      COURSES
    </Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '34px', xs: '30px' } }}>
    Develop your trading skills with Forex Pro Academy <br />
    Get started on the markets – to hone your skills.
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;