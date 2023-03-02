import * as React from 'react';
import { useParams } from 'react-router-dom';
import { getProductByID } from '../api';
import { ProductDetailTopNav } from '../components/ProductDetailTopNav/ProductDetailTopNav';
import { ProductImageViewer } from '../components/ProductImageViewer/ProductImageViewer';
import { shortenNumber } from '../helpers';
import { CartIcon, StarIcon, StoreIcon } from '../icons';
import { IProduct } from '../models';

export interface IProductDetailProps {}

export function ProductDetail(props: IProductDetailProps) {
  const [product, setProduct] = React.useState({} as IProduct);
  const { id } = useParams();

  React.useEffect(() => {
    getProductByID(Number(id)).then((product) => setProduct(product));
  }, []);

  return (
    <div className="px-2">
      <ProductDetailTopNav />
      <ProductImageViewer product={product} />
      <div className="px-1 mb-20">
        <div className="flex items-center">
          <StoreIcon />
          <span className="text-gray-400 text-lg ml-2">Thrifting_Store</span>
        </div>
        <p className="font-bold text-2xl text-[#313449]">
          {product.description}
        </p>
        <div className="flex text-gray-400 items-center my-2">
          <StarIcon style={{ width: '1.2em' }} />
          <span>{product.rating} Ratings</span>
          <span className="mx-auto">&bull;</span>
          <span>{shortenNumber(product.reviews)} Reviews</span>
          <span className="mx-auto">&bull;</span>
          <span>{shortenNumber(product.sold)} Sold</span>
        </div>

        <TabbedContent product={product} />

      {/* footer section with CTA button */}
      <div
        className="flex justify-between fixed bottom-0 w-full h-16 bg-white left-0 p-2"
        style={{ boxShadow: '0px -2px 5px rgba(0, 0, 0, .1)' }}
      >
        <div>
          <span className="text-gray-400">Total Price</span>
          <div className="text-2xl font-bold text-[#4ca78d]">
            ${product.price?.toFixed(2)}
          </div>
        </div>
        <div className="flex text-white font-bold rounded-lg overflow-hidden">
          <div className="flex items-center px-3 py-2 bg-[#4ca78d]">
            <CartIcon variant="white" />
            <span>1</span>
          </div>
          <button className="px-3 py-2 bg-[#313449]">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
