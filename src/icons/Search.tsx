import * as React from 'react';
import { getColor } from '../helpers';
import { IconProps } from '../models';
import './icons.scss';

export interface ISearchIconProps extends IconProps {}

export function SearchIcon(props: ISearchIconProps) {
  return (
    <div className={'icon ' + props.className}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
        <g id="Layer_63" data-name="Layer 63">
          <path
            stroke={getColor(props.variant)}
            d="M53.08,51l-9.84-9.84c10.24-11.82,1.63-30.7-14.15-30.64a18.63,18.63,0,0,0-18.61,18.6c-.06,15.79,18.82,24.4,30.64,14.16L51,53.08A1.5,1.5,0,0,0,53.08,51ZM13.48,29.08a15.62,15.62,0,0,1,15.61-15.6c20.69.86,20.69,30.35,0,31.21A15.62,15.62,0,0,1,13.48,29.08Z"
          />
        </g>
      </svg>
    </div>
  );
}
