import { AnimatePresence, motion } from 'framer-motion';
import * as React from 'react';
import { Carousel, Header, SubNav } from '../components';
import { MainNav } from '../components/MainNav/MainNav';
import { ProductsList } from '../components/ProductsList/ProductsList';

export interface IHomeProps {}

export function Home(props: IHomeProps) {
  const [opaqueHeader, setOpaqueHeader] = React.useState(false);
  const subNavRef = React.useRef(null);

  React.useEffect(() => {
    const handleScroll = () => {
      // @ts-ignore
      const subNavTop = subNavRef.current?.getBoundingClientRect().top;
      if (subNavTop <= 0) {
        setOpaqueHeader(true);
      } else {
        setOpaqueHeader(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    // scroll to top on mount
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: -window.innerWidth }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="relative w-full overflow-x-hidden">
          <Header className={opaqueHeader ? 'opaque' : ''} />
          <Carousel />
        </div>
        <div ref={subNavRef}>
          <SubNav />
        </div>

        <div className="p-2" style={{ marginBottom: '70px' }}>
          <div
            className="flex justify-between sticky bg-white py-2 z-10"
            style={{ top: '5rem' }}
          >
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
