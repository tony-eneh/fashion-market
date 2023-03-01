import * as React from 'react';
import styled from 'styled-components';
import { IComponentProps, IProduct } from '../../models';

const ThumbNailsWrapper = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  width: 3.5rem;

  > div {
    width: 100%;
    height: 3.5rem;
    border-radius: 5px;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.5);
    margin-bottom: 1rem;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    > img {
      //   width: 200px;
      max-width: 100px;
      rotate: 45deg;
    }

    &.active {
      border: 3px solid #4ca78d;
    }
  }
`;
export interface IProductImageViewerProps extends IComponentProps {
  product: IProduct;
}

export function ProductImageViewer({ product }: IProductImageViewerProps) {
  const [currentImage, setCurrentImage] = React.useState(product.image);

  React.useEffect(() => console.log('product changed to: ', product));
  return (
    <div className="relative">
      <img
        style={{
          maxHeight: '700px',
        }}
        src={currentImage || product.image}
        alt="product image"
      />
      {Array.isArray(product.moreImages) ? (
        <ThumbNailsWrapper>
          <div
            className={
              currentImage == product.image || !currentImage ? 'active' : ''
            }
            onClick={() => setCurrentImage(product.image)}
          >
            <img src={product.image} alt="" />
          </div>
          {product.moreImages[0] ? (
            <div
              className={currentImage == product.moreImages[0] ? 'active' : ''}
              // @ts-ignore
              onClick={() => setCurrentImage(product.moreImages[0])}
            >
              <img src={product.moreImages[0]} alt="" />
            </div>
          ) : null}
          {product.moreImages[1] ? (
            <div
              className={currentImage == product.moreImages[1] ? 'active' : ''}
              // @ts-ignore
              onClick={() => setCurrentImage(product.moreImages[1])}
            >
              <img src={product.moreImages[1]} alt="" />
            </div>
          ) : null}
          {product.moreImages[2] ? (
            <div
              className={currentImage == product.moreImages[2] ? 'active' : ''}
              // @ts-ignore
              onClick={() => setCurrentImage(product.moreImages[2])}
            >
              <img src={product.moreImages[2]} alt="" />
            </div>
          ) : null}
        </ThumbNailsWrapper>
      ) : null}
    </div>
  );
}
