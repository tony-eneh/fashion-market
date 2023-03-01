import * as React from 'react';
import { Dots } from '../Dots/Dots';
import './Carousel.scss';
export interface ICarouselProps {}

export function Carousel(props: ICarouselProps) {
  return (
    <div className="carousel-wrapper">
      <div className="slide">
        <div className="flex justify-between">
          <div className="text-xs font-bold">#BEAUTYSALE</div>
          <Dots position="start" />
        </div>
        <p className="text-3xl font-semibold">DISCOVER OUR BEAUTY SELECTION</p>
        <button>Check this out</button>
      </div>
      <div className="slide">
        <div className="flex justify-between">
          <div className="text-xs font-bold">#FASHION DAY</div>
          <Dots position="middle" />{' '}
        </div>
        <div className="text-4xl font-bold">80% OFF</div>
        <p className="text-xs">Discover fashion that suits to your style</p>
        <button>Check this out</button>
      </div>
      <div className="slide">
        <div className="flex justify-between">
          <div className="text-xs font-bold">#KICKASS</div>
          <Dots position="end" />
        </div>
        <div className="text-4xl font-bold">70% OFF</div>
        <p className="text-xs">Discover classic shoes like crazy</p>
        <button>Check this out</button>
      </div>
    </div>
  );
}
