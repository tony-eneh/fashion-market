import * as React from 'react';
import { IComponentProps } from '../../models';

export interface IBadgeProps extends IComponentProps {}

export function Badge(props: IBadgeProps) {
  return (
    <div
      style={{
        position: 'absolute',
        top: '-5px',
        right: '-5px',
        display: 'block',
        width: '1.8em',
        borderRadius: '4px',
        textAlign: 'center',
        fontSize: 'small',
        backgroundColor: '#D66284',
        color: 'white',
      }}
    >
      {props.children}
    </div>
  );
}
