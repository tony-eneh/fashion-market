import * as React from 'react';
import styled from 'styled-components';
import { LikeIcon, StarIcon } from '../../icons';
import { IComponentProps, IReview } from '../../models';

const AuthorIcon = styled.img`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
`;
const ThreeDots = styled.div`
  display: flex;
  div {
    height: 4px;
    width: 4px;
    borderradius: 50%;
    border: 1px solid #313449;
    margin-right: 3px;
  }
`;

const Pill = styled.span`
  border: 1px solid #4ca78d;
  border-radius: 0.75rem;
  background-color: #ecf2f1;
  font-size: x-small;
  padding: 0.25rem;
  color: #4ca78d;
  font-weight: bold;
  margin-right: 0.5rem;
  white-space: nowrap;
`;
export interface IReviewProps extends IComponentProps {
  review: IReview;
}

export function Review({ review }: IReviewProps) {
  return (
    <div className=" py-5">
      <div className="flex justify-between mb-2">
        <div className="flex space-x-2 items-center">
          <AuthorIcon src={review.authorImage} alt="" />
          <span className="text-xs font-bold">{review.authorName}</span>
        </div>
        <div className="flex items-center space-x-2">
          <StarIcon style={{ width: '1rem' }} />
          <span className="font-bold text-sm">{review.rating?.toFixed(1)}</span>
          <ThreeDots>
            <div></div>
            <div></div>
            <div></div>
          </ThreeDots>
        </div>
      </div>

      <div className="overflow-x-hidden pb-1">
        {review?.tags?.map((tag) => (
          <Pill key={tag}>{tag}</Pill>
        ))}
      </div>

      <div className="my-3 font-semibold text-xs">{review.text}</div>

      <div className="flex justify-between text-xs mb-7">
        <div className="flex items-center space-x-1">
          <LikeIcon style={{ width: '1rem' }} variant="active" />
          <span className="text-[#3f9e83] font-bold">Helpful ?</span>
        </div>
        <div className="text-gray-400">{review.date}</div>
      </div>
      <hr />
    </div>
  );
}
