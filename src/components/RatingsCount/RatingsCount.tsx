import * as React from 'react';
import { shortenNumber } from '../../helpers';
import { StarIcon } from '../../icons';
import { IComponentProps, IRatingsCount } from '../../models';
import { ProgressBar } from '../ProgressBar/ProgressBar';

const smallIcon = { width: '1rem' };

export interface IRatingsCountProps extends IComponentProps {
  ratingsCount: IRatingsCount;
}

export function RatingsCount({
  ratingsCount,
  ...restProps
}: IRatingsCountProps) {
  const total =
    ratingsCount[1] +
    ratingsCount[2] +
    ratingsCount[3] +
    ratingsCount[4] +
    ratingsCount[5];
  return (
    <div {...restProps}>
      {/* @ts-ignore */}
      {[5, 4, 3, 2, 1].map((num: IRatingsIndex) => (
        <div className="flex items-center space-x-2">
          <StarIcon style={smallIcon} />
          <span className='w-3'>{num}</span>
          <ProgressBar
            className="flex-grow overflow-hidden"
            percent={(ratingsCount[num] / total) * 100}
          />
          <span className="font-bold text-[#313449] w-8">
            {shortenNumber(ratingsCount[num])}
          </span>
        </div>
      ))}
    </div>
  );
}

type IRatingsIndex = 5 | 4 | 3 | 2 | 1;
