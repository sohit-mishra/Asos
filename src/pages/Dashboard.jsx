import React from 'react'
import Header from '../component/Account/Header';
import { Heading, Box } from '@chakra-ui/react';
import Footer from '../component/Account/Footer';

export default function Dashboard() {
  return (
    <>
      <Box width={'1000px'} m={'0 auto'}>
        <Header />
        <Footer/>
      </Box>

    </>
  )
}
