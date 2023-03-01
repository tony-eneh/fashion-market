import * as React from 'react';
import { Carousel } from '../components/Carousel/Carousel';
import { Header } from '../components/Header/Header';

export interface IHomeProps {}

export function Home(props: IHomeProps) {
  return (
    <div>
      <div className="relative w-full">
        <Header className="absolute" />
        <Carousel />
      </div>
    </div>
  );
}
