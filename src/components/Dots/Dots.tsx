import * as React from 'react';
import { IComponentProps } from '../../models';
import './Dots.scss';

const POSITIONS = {
  start: 1,
  middle: 3,
  end: 5,
};
export interface IDotsProps extends IComponentProps {
  position: 'start' | 'middle' | 'end';
}

export function Dots({ className, position, ...restProps }: IDotsProps) {
  return (
    <div className={'carousel-position-indicator ' + className} {...restProps}>
      <div className="dash" style={{ order: POSITIONS[position] }}></div>
      <div className="dot" style={{ order: 2 }}></div>
      <div className="dot" style={{ order: 4 }}></div>
    </div>
  );
}
