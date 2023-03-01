import * as React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getProducts } from '../../api';
import { IProduct } from '../../models';
import { Product } from '../Product/Product';

const Wrapper = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 1fr;
  grid-gap: 20px;
`;
export interface IProductsListProps {}

export function ProductsList(props: IProductsListProps) {
  const [products, setProducts] = useState([] as IProduct[]);

  useEffect(() => {
    getProducts().then((products) => setProducts(products));
  }, []);

  return (
    <Wrapper>
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </Wrapper>
  );
}
