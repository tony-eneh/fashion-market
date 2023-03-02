import * as React from 'react';
import { StarIcon } from '../../icons';
import { IComponentProps } from '../../models';

const small = {
  width: '1rem',
};
export interface IRatingProps extends IComponentProps {
  rating: number;
}

export function Rating({ rating }: IRatingProps) {
  return (
    <div className="flex">
      <StarIcon style={small} silver={rating < 1} />
      <StarIcon style={small} silver={rating < 2} />
      <StarIcon style={small} silver={rating < 3} />
      <StarIcon style={small} silver={rating < 4} />
      <StarIcon style={small} silver={rating < 5} />
    </div>
  );
}
