import * as React from 'react';
import styled from 'styled-components';
import { IComponentProps, IProduct } from '../../models';

const Header = styled.div`
  display: flex;

  span {
    flex-grow: 1;
    text-align: center;
    padding: 1rem;
    border-bottom: 2px solid rgba(0, 0, 0, 0.02);
    &.active {
      border-bottom-color: #4ca78d;
      color: #4ca78d;
    }
  }
`;
const Content = styled.div`
  padding-top: 1rem;
  width: 200%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 1fr;
  transition: transform 0.5s;

  > * {
    flex: 1;
  }
`;

const styles = {
  moveRight: {
    transform: 'translate(-50%)',
  },
};
export interface ITabbedContentProps extends IComponentProps {
  product: IProduct;
}

export function TabbedContent({ product }: ITabbedContentProps) {
  const [currentTab, setCurrentTab] = React.useState(1);
  return (
    <div
      className="text-gray-400 overflow-hidden text-sm pb-3"
      style={{ borderBottom: '1px solid rgba(0, 0, 0, .07)' }}
    >
      <Header>
        <span
          onClick={() => setCurrentTab(1)}
          className={currentTab == 1 ? 'active' : ''}
        >
          About Item
        </span>
        <span
          onClick={() => setCurrentTab(2)}
          className={currentTab == 2 ? 'active' : ''}
        >
          Reviews
        </span>
      </Header>
      <Content style={currentTab == 2 ? styles.moveRight : {}}>
        <div className="grid grid-cols-2 gap-3">
          <div>
            Brand:{' '}
            <span className="font-bold text-[#313449]">{product.brand}</span>
          </div>
          <div>
            Color:{' '}
            <span className="font-bold text-[#313449]">{product.color}</span>
          </div>
          <div>
            Category:{' '}
            <span className="font-bold text-[#313449]">{product.category}</span>
          </div>
          <div>
            Material:{' '}
            <span className="font-bold text-[#313449]">{product.material}</span>
          </div>
          <div>
            Condition:{' '}
            <span className="font-bold text-[#313449]">
              {product.condition}
            </span>
          </div>
          <div>
            Heavy:{' '}
            <span className="font-bold text-[#313449]">{product.weight}</span>
          </div>
        </div>
        <div>Some reviews</div>
      </Content>
    </div>
  );
}
