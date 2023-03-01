import * as React from 'react';
import { getColor } from '../helpers';
import { IconProps } from '../models';
import './icons.scss';

export interface IWalletIconProps extends IconProps {}

export function WalletIcon(props: IWalletIconProps) {
  return (
    <div className={'icon ' + props.className}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke={getColor(props.variant)}
        stroke-width=".5"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16.2323 1.19818C18.1356 0.694378 20 2.12948 20 4.0983V5C21.6569 5 23 6.34315 23 8V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V7.53948C1 6.17828 1.91645 4.98768 3.23232 4.63936L16.2323 1.19818ZM9.6856 5.00002L16.7441 3.13159C17.3785 2.96366 18 3.44203 18 4.0983V5.00005L9.6856 5.00002ZM20 7H4C3.44772 7 3 7.44772 3 8V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V17.0001H18C16.3431 17.0001 15 15.6569 15 14.0001C15 12.3432 16.3431 11.0001 18 11.0001H21V8C21 7.44773 20.5523 7.00002 20 7ZM21 13.0001H18C17.4477 13.0001 17 13.4478 17 14.0001C17 14.5523 17.4477 15.0001 18 15.0001H21V13.0001Z"
          fill="#293644"
        />
      </svg>
    </div>
  );
}
