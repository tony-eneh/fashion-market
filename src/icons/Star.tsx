import * as React from 'react';
import { IconProps } from '../models';
import './icons.scss';

export interface IStarIconProps extends IconProps {
  filled?: boolean;
  silver?: boolean;
}

export function StarIcon({ className, silver, ...restProps }: IStarIconProps) {
  return (
    <div className={'icon ' + className} {...restProps}>
      <svg viewBox="0 0 24 24" fill={silver ? '#ccc' : '#F0B05A'}>
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
    </div>
  );
}
