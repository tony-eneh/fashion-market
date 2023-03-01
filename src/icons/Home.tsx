import * as React from 'react';
import { getColor } from '../helpers';
import { IconProps } from '../models';
import './icons.scss';

export interface IHomeIconProps extends IconProps {}

export function HomeIcon(props: IHomeIconProps) {
  return (
    <div className={'icon ' + props.className}>
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={getColor(props.variant)}
      >
        <path d="M21.8,6.78,13.68,1.49a3.1,3.1,0,0,0-3.36,0L2.2,6.78A2.46,2.46,0,0,0,1,8.84V23h9V17.43h4V23h9V8.84A2.46,2.46,0,0,0,21.8,6.78ZM21,21H16V15.43H8V21H3V8.84a.49.49,0,0,1,.26-.39l8.12-5.29a1.14,1.14,0,0,1,1.18,0l8.12,5.29a.49.49,0,0,1,.26.39Z" />
      </svg>
    </div>
  );
}
