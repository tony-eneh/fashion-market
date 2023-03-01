import * as React from 'react';
import { ProductDetailTopNav } from '../components/ProductDetailTopNav/ProductDetailTopNav';

export interface IProductDetailProps {}

export function ProductDetail(props: IProductDetailProps) {
  return (
    <div>
      <ProductDetailTopNav />
      product detail page
    </div>
  );
}
