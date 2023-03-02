import * as React from 'react';
import { useParams } from 'react-router-dom';
  ProductDetailTopNav,
  TabbedContent,
} from '../components';
import { shortenNumber } from '../helpers';
import { CaretIcon, CartIcon, StarIcon, StoreIcon } from '../icons';

const SellerImage = styled.div`
  height: 75px;
  width: 75px;
  border-radius: 50%;
  background-color: #e5e5e5;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 0.6rem;
  font-weight: 800;
  font-size: small;
  line-height: 0.9rem;
  position: relative;

  &::after {
    content: '';
    width: 15px;
    height: 15px;
    border: 2px solid white;
    border-radius: 50%;
    position: absolute;
    bottom: 0.3rem;
    right: 0.3rem;
    background-color: #ccc;
  }
`;

const ImageThumbnails = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
  padding-bottom: 1rem;
  img {
    height: 3.5rem;
    width: 3.5rem;
    border-radius: 5px;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.25);
    object-fit: cover;
  }
  .relative {
    img {
      filter: brightness(0.4);
    }
    span {
      right: 50%;
      top: 50%;
      transform: translate(50%, -50%);
    }
  }
`;
export interface IProductDetailProps {}

export function ProductDetail(props: IProductDetailProps) {
  const [product, setProduct] = React.useState({} as IProduct);
  const { id } = useParams();

  React.useEffect(() => {
    getProductByID(Number(id)).then((product) => {
      setProduct(product);
    });
  }, []);
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

        <div>
          <div className="font-bold my-3">Description:</div>
          <ul className="text-gray-400 text-sm list-disc pl-4">
            {product.details?.map((point) => (
              <li>{point}</li>
            ))}
          </ul>
        </div>

        <p className="text-sm text-gray-400 my-4">
          Chat us if there is anything you need to ask about the product :)
        </p>

        <div className="mb-5 flex items-center text-sm text-[#4ca78d]">
          <span className="font-bold">See less </span>
          <CaretIcon
            direction="up"
            className="opacity-25"
            style={{ transform: 'translateY(-4px) scale(.8)' }}
          />
        </div>
        <hr />
        <div className="my-7 text-sm text-gray-400 space-y-3">
          <p className="font-bold text-[#313449]">Shipping Information:</p>
          <div>
            Delivery:{' '}
            <span className="font-bold text-[#313449]">
              Shipping from {product.shippedFrom}
            </span>
          </div>
          <div>
            Shipping:{' '}
            <span className="font-bold text-[#313449]">
              {product.shipping == 0
                ? 'FREE International Shipping'
                : `$${product.shipping?.toFixed(2)}`}
            </span>
          </div>
          <div>
            Arrive:{' '}
            <span className="font-bold text-[#313449]">
              Estimated arrival on {product.estimatedArrivalDate}
            </span>
          </div>
        </div>
        <hr />

        <div className="my-7 text-sm">
          <p className="font-bold">Seller Information: </p>
          <div className="flex mt-5 mb-7">
            <SellerImage>Thrifting Store</SellerImage>
            <div className="flex-grow ml-2 space-y-1">
              <div className="font-bold text-lg">Thrifting_Store</div>
              <div className="flex text-gray-400" style={{ fontSize: '.6rem' }}>
                <span className="flex-grow">Active 5 Min ago</span>
                <span className="flex-grow mx-1">|</span>
                <span className="flex-grow">96.7% Positive Feedback</span>
              </div>
              <button className="rounded-md border-[#4ca78d] border border-solid flex items-center space-x-2 px-2 py-1">
                <StoreIcon
                  variant="active"
                  strokeWidth={5}
                  style={{ width: '1rem' }}
                />
                <span className="font-bold text-small text-[#4ca78d]">
                  Visit Store
                </span>
              </button>
            </div>
          </div>
        </div>
        <hr />
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
