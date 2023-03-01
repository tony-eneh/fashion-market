import * as React from 'react';
import { IconProps } from '../models';
import './icons.scss';

export interface IFlightIconProps extends IconProps {}

export function FlightIcon(props: IFlightIconProps) {
  return (
    <div className={"icon " + props.className}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <title>Airport</title>
        <g id="Airport">
          <path d="M9.384,29a2.126,2.126,0,0,1-.251-.015,2.012,2.012,0,0,1-1.49-.968L6.27,25.729,3.984,24.357a2.026,2.026,0,0,1-.391-3.169l.238-.238a2.011,2.011,0,0,1,1.361-.591l1.979-.073,6.158-6.656L6.112,9.118a2.027,2.027,0,0,1-.36-3.15L6.52,5.2a2.034,2.034,0,0,1,2.254-.419L17.8,8.8,21.4,4.9a5.082,5.082,0,0,1,2.509-1.486l1.295-.324a3.052,3.052,0,0,1,3.7,3.7l-.324,1.3A5.089,5.089,0,0,1,27.1,10.6l-3.892,3.6,4.011,9.026h0a2.037,2.037,0,0,1-.42,2.255l-.765.766a2.027,2.027,0,0,1-3.152-.358l-4.51-7.217L11.713,24.83l-.072,1.982a2.019,2.019,0,0,1-.592,1.358l-.237.237A2.009,2.009,0,0,1,9.384,29ZM7.962,6.61l-.795.772,8.247,5.192a1,1,0,0,1,.2,1.527L8.356,21.949a1,1,0,0,1-.7.321l-2.4.087-.255.246,2.507,1.541a1,1,0,0,1,.342.342l1.5,2.5.278-.232.1-2.414a1,1,0,0,1,.32-.7L17.9,16.383a1,1,0,0,1,1.528.2l5.151,8.241.812-.791-4.3-9.68a1,1,0,0,1,.235-1.14L25.739,9.13a3.09,3.09,0,0,0,.9-1.526l.324-1.294a1.054,1.054,0,0,0-1.276-1.277L24.4,5.357a3.092,3.092,0,0,0-1.526.9l-4.087,4.417a1,1,0,0,1-1.14.235Z" />
        </g>
      </svg>
    </div>
  );
}
