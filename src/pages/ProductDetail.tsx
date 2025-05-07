import { AnimatePresence, motion } from 'framer-motion';
import * as React from 'react';
import { RoutesProps, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getProductByID, getReviews } from '../api';
import {
  Paginator,
  ProductDetailTopNav,
  ProductImageViewer,
  ProductsList,
  Rating,
  RatingsCount,
  Review,
  TabbedContent,
} from '../components';
import { shortenNumber } from '../helpers';
import { CaretIcon, CartIcon, StarIcon, StoreIcon } from '../icons';
import { IProduct, IReview } from '../models';

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
export interface IProductDetailProps extends RoutesProps {}

export function ProductDetail({ location }: IProductDetailProps) {
  const [product, setProduct] = React.useState({} as IProduct);
  // TODO remove hardcoded seller data. Fetch from an api and set in state
  const [reviews, setReviews] = React.useState([] as IReview[]);
  const { id } = useParams();

  React.useEffect(() => {
    getProductByID(Number(id)).then((product) => {
      setProduct(product);
    });
  }, [id]);

  React.useEffect(() => {
    getReviews().then((reviews) => setReviews(reviews));
  }, [reviews]);

  React.useEffect(() => {
    // scroll to top on mount
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  return (
    <AnimatePresence>
      <motion.div
        className="px-2"
        initial={{ opacity: 0, y: window.innerHeight, x: 0 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.7 }}
        exit={{ x: window.innerWidth }}
      >
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
            <span>{(product.rating || 0).toFixed(1)} Ratings</span>
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
                <li key={point}>{point}</li>
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
                {!product.shipping
                  ? 'FREE International Shipping'
                  : `$${product.shipping.toFixed(2)}`}
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
                <div
                  className="flex text-gray-400"
                  style={{ fontSize: '.6rem' }}
                >
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
          <div className="my-7 text-sm text-gray-400">
            <div className="font-bold text-[#313449]">Reviews & Ratings</div>
            <div className="flex space-x-2">
              <div className="flex flex-col">
                <div className="flex items-end space-x-1">
                  <div className="text-4xl font-bold text-[#313449]">
                    {(product.rating || 0).toFixed(1)}
                  </div>
                  <div>/ 5.0</div>
                </div>
                <Rating rating={product.rating} />
                <div className="mt-auto text-xs">
                  {shortenNumber(product.reviews)} Reviews
                </div>
              </div>
              <RatingsCount
                className="flex-grow"
                ratingsCount={{ 1: 4, 2: 10, 3: 140, 4: 710, 5: 1500 }}
              />
            </div>
          </div>

          <div className="my-5">
            <p className="font-bold text-sm">Reviews with images & videos</p>
            <ImageThumbnails>
              <img src={product.image} alt="" />
              <img
                src={`${process.env.REACT_APP_API_URL}/images/shirt-3.webp`}
                alt=""
              />
              <img
                src={`${process.env.REACT_APP_API_URL}/images/shirt-11.jpeg`}
                alt=""
              />
              <div className="relative">
                <img
                  src={`${process.env.REACT_APP_API_URL}/images/shirt-12.jpeg`}
                  alt=""
                />
                <span className="absolute text-xs text-white font-bold">
                  132+
                </span>
              </div>
            </ImageThumbnails>
          </div>

          <hr />

          <div className="my-7">
            <div className="flex items-end justify-between">
              <div>
                <p className="font-bold">Top Reviews</p>
                <p className="text-sm text-gray-400">
                  Showing 2 of {shortenNumber(product.reviews)} Reviews
                </p>
              </div>
              <button
                style={{ border: '1px solid rgba(0, 0, 0, 0.25' }}
                className="flex items-center text-xs space-x-2 bg-gray-100 rounded px-2 py-1"
              >
                <span className="font-bold mr-3">Popular</span>
                <CaretIcon
                  style={{
                    transform: 'translateY(-2px) scale(.6)',
                    opacity: 0.5,
                  }}
                  direction="down"
                />
              </button>
            </div>
          </div>

          {reviews.map((review, index) => (
            <Review review={review} key={index} />
          ))}

          <Paginator />

          <div className="my-7">
            <div className="text-sm flex justify-between font-bold">
              <div>Recommendation</div>
              <div className="text-[#4ca78d] text-xs">See more</div>
            </div>

            <ProductsList viewCount={2} />
          </div>
        </div>
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
      </motion.div>
    </AnimatePresence>
  );
}
