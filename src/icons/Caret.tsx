import * as React from 'react';
import { getColor } from '../helpers';
import { IconProps } from '../models';

type Direction = 'up' | 'down' | 'left' | 'right';

const getRotationAngle = (direction: Direction) => {
  switch (direction) {
    case 'up':
      return '135deg';
    case 'right':
      return '225deg';
    case 'down':
      return '315deg';
    case 'left':
      return '45deg';
  }
};
export interface ICaretIconProps extends IconProps {
  direction: Direction;
}

export function CaretIcon({
  direction,
  className,
  variant,
  style,
  ...restProps
}: ICaretIconProps) {
  return (
    <div
      className={'icon ' + className}
      style={{
        margin: '5px',
        width: '1em',
        height: '1em',
        borderRadius: '0 0 0 3px',
        borderLeft: '3px solid ' + getColor(variant),
        borderBottom: '3px solid ' + getColor(variant),
        rotate: getRotationAngle(direction),
        ...style,
      }}
      {...restProps}
    ></div>
  );
}
