import * as React from 'react';
import { useParams } from 'react-router-dom';
import { getProductByID } from '../api';
import { ProductDetailTopNav } from '../components/ProductDetailTopNav/ProductDetailTopNav';
import { ProductImageViewer } from '../components/ProductImageViewer/ProductImageViewer';
import { IProduct } from '../models';

export interface IProductDetailProps {}

export function ProductDetail(props: IProductDetailProps) {
  const [product, setProduct] = React.useState({} as IProduct);
  const { id } = useParams();

  React.useEffect(() => {
    getProductByID(Number(id)).then((product) => setProduct(product));
  }, []);

  return (
    <div>
      <ProductDetailTopNav />
      <ProductImageViewer product={product} />
    </div>
  );
}
