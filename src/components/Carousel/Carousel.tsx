import * as React from 'react';
import './Carousel.scss';
export interface ICarouselProps {}

export function Carousel(props: ICarouselProps) {
  return (
    <div className='carousel-wrapper'>
      <div className="slide">
        <div className="text-xs font-bold">#BEAUTYSALE</div>
        <p className="text-3xl font-semibold">DISCOVER OUR BEAUTY SELECTION</p>
        <button>Check this out</button>
      </div>
      <div className="slide">
        <div className="text-xs font-bold">#FASHION DAY</div>
        <div className="text-4xl font-bold">80% OFF</div>
        <p className="text-xs">Discover fashion that suits to your style</p>
        <button>Check this out</button>
      </div>
      <div className="slide">
        <div className="text-xs font-bold">#KICKASS</div>
        <div className="text-4xl font-bold">70% OFF</div>
        <p className="text-xs">Discover classic shoes like crazy</p>
        <button>Check this out</button>
      </div>
    </div>
  );
}
