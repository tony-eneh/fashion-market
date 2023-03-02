import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { HeartIcon, StarIcon } from '../../icons';
import { IComponentProps, IProduct } from '../../models';

const ProductsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.07);
`;

const Image = styled.img`
  src: ${(props) => props.src};
  height: 120px;
  width: 100%;
  object-fit: cover;
  object-position: center top;
`;

const Description = styled.p`
  font-weight: bold;
  font-size: small;
  display: -webkit-box;
  max-width: 400px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Reviews = styled.span`
  font-weight: bold;
  display: block;
`;
export interface IProductProps extends IComponentProps {
  product: IProduct;
}

export function Product({ product }: IProductProps) {
  const [liked, setLiked] = React.useState(product.liked);
  const toggleLike = (e: any) => {
    setLiked(!liked);
  };
  return (
    <ProductsWrapper>
      <div className="p-2 absolute right-0 top-0">
        <HeartIcon
          onClick={toggleLike}
          fill={liked}
          style={{
            width: '1.5em',
          }}
        />
      </div>
      <Link className="flex flex-col flex-grow" to={'/products/' + product.id}>
        <Image src={product.image} />
        <div className="p-2 bg-gray-100 flex-grow flex flex-col">
          <div className="text-gray-400 font-bold">{product.type}</div>
          <Description>{product.description}</Description>
          <div className="flex justify-between mb-0 mt-auto">
            <div className="flex items-center font-bold text-gray-400">
              <StarIcon style={{ width: '1.2em' }} />
              <span className="block text-sm mx-1">{product.rating}</span>
              <span>|</span>
              <span className="block text-sm mx-1">{product.reviews}</span>
            </div>
            <div className="font-bold text-2xl text-[#4ca78d]">
              ${product.price.toFixed(2)}
            </div>
          </div>
        </div>
      </Link>
    </ProductsWrapper>
  );
}
