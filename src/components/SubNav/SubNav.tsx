import * as React from 'react';
import styled from 'styled-components';
import {
  BillIcon,
  CategoryIcon,
  FlightIcon,
  TopUpIcon,
  WebIcon,
} from '../../icons';
import { IComponentProps } from '../../models';
import { Dots } from '../Dots/Dots';

const NavButtons = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;

  > * {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    color: #999;

    .nav-icon {
      padding: 0.5em;
      width: 2.5em;
      background-color: #f6f6f6;
      border-radius: 5px;

      svg {
        opacity: 0.8;
      }

      & + * {
        font-size: smaller;
        margin-top: 1ex;
      }
    }
  }
`;
export interface ISubNavProps extends IComponentProps {}

export const SubNav = React.forwardRef(function (props: ISubNavProps, ref) {
  return (
    <div>
      <NavButtons>
        <div>
          <CategoryIcon className="nav-icon" />
          <span>Category</span>
        </div>
        <div>
          <FlightIcon className="nav-icon" />
          <span>Flight</span>
        </div>
        <div>
          <BillIcon className="nav-icon" />
          <span>Bill</span>
        </div>
        <div>
          <WebIcon className="nav-icon" />
          <span>Data plan</span>
        </div>
        <div>
          <TopUpIcon className="nav-icon" />
          <span>Top Up</span>
        </div>
      </NavButtons>
      <Dots position="start" className="mt-3" />
    </div>
  );
});
