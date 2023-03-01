import * as React from 'react';
import { Carousel, Header, SubNav } from '../components';

export interface IHomeProps {}

export function Home(props: IHomeProps) {
  return (
    <div>
      <div className="relative w-full">
        <Header className="absolute" />
        <Carousel />
      </div>
      <SubNav />
    </div>
  );
}
