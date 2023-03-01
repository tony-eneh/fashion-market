import * as React from 'react';
import { Link } from 'react-router-dom';
import { CaretIcon, CartIcon, HeartIcon, ShareIcon } from '../../icons';
import { Badge } from '../Badge/Badge';

export interface IProductDetailTopNavProps {}

export function ProductDetailTopNav(props: IProductDetailTopNavProps) {
  return (
    <div className="flex justify-between p-3">
      <Link to="/home">
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
    </div>
  );
}
