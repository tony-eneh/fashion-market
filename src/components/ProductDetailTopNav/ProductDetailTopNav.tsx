import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CaretIcon, CartIcon, HeartIcon, ShareIcon } from '../../icons';
import { Badge } from '../Badge/Badge';

const Sticky = styled.div`
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  background-color: white;
  z-index: 10;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
`;
export interface IProductDetailTopNavProps {}

export function ProductDetailTopNav(props: IProductDetailTopNavProps) {
  return (
    <Sticky className="flex justify-between p-3">
      <Link to="/fashion-market">
        <CaretIcon direction="left" />
      </Link>
      <div className="flex justify-between space-x-3">
        <HeartIcon />
        <ShareIcon />
        <div className="relative">
          <CartIcon />
          <Badge>1</Badge>
        </div>
      </div>
    </Sticky>
  );
}
