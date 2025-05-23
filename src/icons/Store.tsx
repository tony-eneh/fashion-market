import * as React from 'react';
import { IconProps } from '../models';

export interface IStoreIconProps extends IconProps {}

export function StoreIcon({
  className,
  style,
  variant,
  strokeWidth,
}: IStoreIconProps) {
  return (
    <div className={'icon ' + className} style={{ width: '1.5rem', ...style }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 256 256"
      >
        <defs></defs>
        <g
          style={{
            stroke: variant == 'active' ? '#4ca78d' : 'black',
            strokeWidth: strokeWidth,
            strokeDasharray: '',
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            strokeMiterlimit: '10',
            fill: variant == 'active' ? '#4ca78d' : '',
            fillRule: 'nonzero',
            opacity: 1,
          }}
          transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
        >
          <path
            d="M 70.877 82.59 h -18.55 c -0.553 0 -1 -0.447 -1 -1 V 52.767 c 0 -4.767 3.878 -8.644 8.644 -8.644 h 3.262 c 4.767 0 8.645 3.877 8.645 8.644 V 81.59 C 71.877 82.143 71.43 82.59 70.877 82.59 z M 53.327 80.59 h 16.55 V 52.767 c 0 -3.663 -2.98 -6.645 -6.645 -6.645 h -3.262 c -3.663 0 -6.644 2.981 -6.644 6.645 V 80.59 z"
            // style={{
            //   stroke: '',
            //   strokeWidth: '5',
            //   strokeDasharray: '',
            //   strokeLinecap: 'butt',
            //   strokeLinejoin: 'miter',
            //   strokeMiterlimit: 10,
            //   fill: 'rgb(0,0,0)',
            //   fillRule: 'nonzero',
            //   opacity: 1,
            // }}
            transform=" matrix(1 0 0 1 0 0) "
            strokeLinecap="round"
          />
          <path
            d="M 43.468 71.467 H 19.123 c -0.552 0 -1 -0.447 -1 -1 V 46.121 c 0 -0.552 0.448 -1 1 -1 h 24.345 c 0.552 0 1 0.448 1 1 v 24.346 C 44.468 71.02 44.021 71.467 43.468 71.467 z M 20.123 69.467 h 22.345 V 47.121 H 20.123 V 69.467 z"
            // style={{
            //   stroke: '',
            //   strokeWidth: 1,
            //   strokeDasharray: '',
            //   strokeLinecap: 'butt',
            //   strokeLinejoin: 'miter',
            //   strokeMiterlimit: 10,
            //   fill: 'rgb(0,0,0)',
            //   fillRule: 'nonzero',
            //   opacity: 1,
            // }}
            transform=" matrix(1 0 0 1 0 0) "
            strokeLinecap="round"
          />
          <path
            d="M 89.991 21.92 c -0.005 -0.115 -0.024 -0.228 -0.068 -0.336 c -0.002 -0.004 -0.002 -0.008 -0.003 -0.012 c -0.037 -0.087 -0.086 -0.169 -0.148 -0.244 L 78.633 7.775 C 78.443 7.544 78.159 7.41 77.86 7.41 H 66.291 H 53.8 H 36.2 h -0.28 H 23.709 H 12.14 c -0.299 0 -0.583 0.134 -0.772 0.365 L 0.228 21.329 c -0.062 0.075 -0.111 0.157 -0.148 0.244 c -0.002 0.004 -0.002 0.009 -0.004 0.014 c -0.043 0.107 -0.062 0.219 -0.067 0.333 C 0.008 21.935 0 21.948 0 21.963 v 2.791 c 0 5.066 3.864 9.247 8.8 9.749 V 81.59 c 0 0.553 0.448 1 1 1 h 70.4 c 0.553 0 1 -0.447 1 -1 V 34.504 c 4.935 -0.503 8.8 -4.683 8.8 -9.749 v -2.791 C 90 21.948 89.992 21.935 89.991 21.92 z M 86.884 20.963 H 72.092 L 67.736 9.41 h 9.651 L 86.884 20.963 z M 70.4 24.754 c 0 4.301 -3.499 7.8 -7.801 7.8 c -4.301 0 -7.8 -3.499 -7.8 -7.8 v -1.791 H 70.4 V 24.754 z M 52.8 24.754 c 0 4.301 -3.499 7.8 -7.8 7.8 s -7.8 -3.499 -7.8 -7.8 v -1.791 h 15.6 V 24.754 z M 34.92 20.963 H 20.046 L 24.401 9.41 H 34.92 V 20.963 z M 19.6 22.963 h 15.6 v 1.791 c 0 4.301 -3.499 7.8 -7.8 7.8 c -4.301 0 -7.8 -3.499 -7.8 -7.8 V 22.963 z M 54.8 9.41 h 10.8 l 4.355 11.553 H 54.8 V 9.41 z M 52.8 20.963 H 37.2 V 9.41 h 15.6 V 20.963 z M 12.612 9.41 h 9.651 l -4.355 11.553 H 3.116 L 12.612 9.41 z M 2 24.754 v -1.791 h 15.6 v 1.791 c 0 4.301 -3.499 7.8 -7.8 7.8 C 5.499 32.554 2 29.055 2 24.754 z M 10.8 80.59 V 34.504 c 3.438 -0.35 6.346 -2.49 7.8 -5.464 c 1.594 3.259 4.934 5.515 8.8 5.515 s 7.206 -2.256 8.8 -5.515 c 1.594 3.259 4.934 5.515 8.8 5.515 c 3.866 0 7.206 -2.256 8.8 -5.515 c 1.594 3.259 4.934 5.515 8.8 5.515 c 3.866 0 7.207 -2.256 8.801 -5.515 c 1.455 2.975 4.362 5.114 7.8 5.464 V 80.59 H 10.8 z M 88 24.754 c 0 4.301 -3.499 7.8 -7.8 7.8 s -7.8 -3.499 -7.8 -7.8 v -1.791 H 88 V 24.754 z"
            // style={{
            //   stroke: '',
            //   strokeWidth: 1,
            //   strokeDasharray: '',
            //   strokeLinecap: 'butt',
            //   strokeLinejoin: 'miter',
            //   strokeMiterlimit: 10,
            //   fill: 'rgb(0,0,0)',
            //   fillRule: 'nonzero',
            //   opacity: 1,
            // }}
            transform=" matrix(1 0 0 1 0 0) "
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
}
