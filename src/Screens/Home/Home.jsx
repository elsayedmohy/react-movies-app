import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../../components/Hero/Hero';
import Navbar from '../../components/Navbar/Navbar';
import RowsConainter from '../../components/RowsContainer/RowsConainter';

export default function Home() {
  return <motion.div exit={{opacity:0,  duration:3}}>
        <Navbar/>
        <Hero/>
        <RowsConainter/>
  </motion.div>;
}
