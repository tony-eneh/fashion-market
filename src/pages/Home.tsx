import { AnimatePresence, motion } from 'framer-motion';
import * as React from 'react';
import { Carousel, Header, SubNav } from '../components';
import { MainNav } from '../components/MainNav/MainNav';
import { ProductsList } from '../components/ProductsList/ProductsList';

export interface IHomeProps {}

export function Home(props: IHomeProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: -window.innerWidth }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="relative w-full overflow-x-hidden">
          <Header className="absolute" />
          <Carousel />
        </div>
        <SubNav />

        <div className="p-2" style={{ marginBottom: '70px' }}>
          <div className="flex justify-between">
            <h3 className="font-bold text-2xl" style={{ color: '#2C2D3F' }}>
              Best Sale Product
            </h3>
            <span className="font-bold text-[#4ca78d]">See more</span>
          </div>
          <ProductsList />
        </div>

        <MainNav />
      </motion.div>
    </AnimatePresence>
  );
}
