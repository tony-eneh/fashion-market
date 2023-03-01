import * as React from 'react';
import './Inbox.scss';
import './icons.scss';
import { IconProps } from '../models';

export interface IInboxIconProps extends IconProps {}

export function InboxIcon(props: IInboxIconProps) {
  return (
    <div className={'icon ' + props.className}>
      <svg
        version="1.1"
        id="Icons"
        x="0px"
        y="0px"
        viewBox="0 0 32 32"
        // style={{ 'enable-background': 'new 0 0 32 32' }}
        // xml:space="preserve"
      >
        <line className="st0" x1="12" y1="14" x2="12" y2="14" />
        <line className="st0" x1="16" y1="14" x2="16" y2="14" />
        <line className="st0" x1="20" y1="14" x2="20" y2="14" />
        <path
          className="st0"
          d="M11,4c-4.4,0-8,3.6-8,8v12v5l0,0c3.7-3.2,8.4-5,13.3-5H21c4.4,0,8-3.6,8-8v-4c0-4.4-3.6-8-8-8H11z"
        />
      </svg>
    </div>
  );
}
