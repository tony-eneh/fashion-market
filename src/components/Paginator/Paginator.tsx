import * as React from 'react';
import styled from 'styled-components';
import { CaretIcon } from '../../icons';
import { IComponentProps } from '../../models';

const small = { transform: 'scale(.6)' };
const faint = { opacity: '.5' };
const Circle = styled.div`
  padding: 0.2rem;
  border-radius: 50%;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
`;
export interface IPaginatorProps extends IComponentProps {}

export function Paginator(props: IPaginatorProps) {
  return (
    <div className={"flex justify-between text-xs mb-7" + props.className}>
      <div className="flex items-center space-x-4 text-gray-400 font-bold">
        <Circle className='bg-gray-200'>
          <CaretIcon style={{ ...small, ...faint }} direction="left" />
        </Circle>
        <span style={{color: '#4ca78d'}}>1</span>
        <span>2</span>
        <span>3</span>
        <span>...</span>
        <Circle>
          <CaretIcon style={{ ...small, ...faint }} direction="right" />
        </Circle>
      </div>
      <div className="font-bold text-[#4ca78d]">See more</div>
    </div>
  );
}
