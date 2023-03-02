import * as React from 'react';
import { IComponentProps } from '../../models';

export interface IProgressBarProps extends IComponentProps {
  percent: number;
}

export function ProgressBar({
  percent,
  style,
  ...restProps
}: IProgressBarProps) {
  return (
    <div
      style={{
        width: '3rem',
        height: '.5rem',
        backgroundColor: '#ddd',
        borderRadius: '1.5rem',
        ...style,
      }}
      {...restProps}
    >
      <div
        style={{
          width: `${percent}%`,
          borderRadius: '1.5rem',
          backgroundColor: '#4ca78d',
          height: '.5rem',
        }}
      ></div>
    </div>
  );
}
