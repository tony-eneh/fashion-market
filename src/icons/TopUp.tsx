import * as React from 'react';
import { getColor } from '../helpers';
import { IconProps } from '../models';
import './icons.scss';

export interface ITopUpIconProps extends IconProps {}

export function TopUpIcon(props: ITopUpIconProps) {
  return (
    <div className={'icon ' + props.className}>
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        stroke={getColor(props.variant)}
        stroke-width="10px"
      >
        <title>Coins</title>
        <path d="M256,21.333C126.6,21.333,21.333,126.6,21.333,256S126.6,490.667,256,490.667,490.667,385.4,490.667,256,385.4,21.333,256,21.333Zm0,448c-117.63,0-213.333-95.7-213.333-213.333S138.37,42.667,256,42.667,469.333,138.367,469.333,256,373.63,469.333,256,469.333Z" />
        <path d="M256,74.667C156.01,74.667,74.667,156.013,74.667,256S156.01,437.333,256,437.333,437.333,355.99,437.333,256,355.99,74.667,256,74.667ZM256,416c-88.224,0-160-71.776-160-160S167.776,96,256,96s160,71.776,160,160S344.224,416,256,416Z" />
        <path d="M267.276,249.018c-2.542-.969-4.917-1.87-6.969-2.776s-4.531-1.854-7.255-2.888c-15.9-6.036-29.052-12.081-29.052-25,0-6.622,5.839-14.026,14.521-18.419,15.839-8.01,35.953-4.948,53.828,8.188a10.666,10.666,0,1,0,12.635-17.187c-12.173-8.95-25.323-14.37-38.318-16.126V154.667a10.667,10.667,0,1,0-21.333,0v20.68a62,62,0,0,0-16.443,5.551c-16.177,8.185-26.224,22.536-26.224,37.456,0,28.688,27.849,39.263,42.813,44.943,2.333.885,4.453,1.682,6.214,2.464,2.349,1.036,5.063,2.078,7.969,3.188,16.594,6.339,28.339,11.823,28.339,24.7,0,6.625-5.839,14.026-14.521,18.422-15.844,7.995-35.953,4.948-53.828-8.193a10.666,10.666,0,1,0-12.635,17.188c12.173,8.954,25.322,14.317,38.318,16.073V358.4a10.667,10.667,0,0,0,21.333,0V336.6a61.935,61.935,0,0,0,16.443-5.494c16.177-8.187,26.224-22.536,26.224-37.458C309.333,265.089,283.005,255.029,267.276,249.018Z" />
      </svg>
    </div>
  );
}
