import * as React from 'react';
import { IconProps } from '../models';

export interface IHeartIconProps extends IconProps {
  fill?: boolean;
  onClick: React.MouseEventHandler<HTMLElement>;
}

export function HeartIcon({className, fill, ...restProps}: IHeartIconProps) {
  return (
    <div className={'icon ' + className} {...restProps}>
      <svg
        fill={fill ? 'red' : 'transparent'}
        version="1.1"
        id="Capa_1"
        viewBox="-20 -20 410 410"
        stroke={fill ? 'red' : 'black'}
        stroke-width="30"
        stroke-mode="inside"
      >
        <g>
          <g>
            <path d="m 184.743 357.351 c -3.478 0 -6.798 -1.449 -9.164 -3.998 l -147.67 -159.16 c -0.038 -0.041 -0.076 -0.082 -0.113 -0.123 C 9.871 174.223 0 147.921 0 120.008 c 0 -27.914 9.871 -54.215 27.796 -74.061 l 2.244 -2.484 c 18.246 -20.201 42.608 -31.327 68.599 -31.327 s 50.354 11.126 68.601 31.328 l 17.503 19.38 l 17.503 -19.379 c 18.246 -20.202 42.608 -31.328 68.6 -31.328 s 50.354 11.126 68.601 31.329 l 2.241 2.478 c 17.928 19.851 27.799 46.152 27.799 74.065 s -9.872 54.215 -27.796 74.061 c -0.037 0.043 -0.075 0.084 -0.113 0.125 l -147.671 159.16 C 191.541 355.901 188.221 357.351 184.743 357.351 z" />
          </g>
        </g>
      </svg>
    </div>
  );
}
