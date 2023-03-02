import * as React from 'react';
import './Header.scss';
import { SearchIcon, CartIcon, InboxIcon } from '../../icons';
import { Badge } from '../Badge/Badge';
import styled from 'styled-components';
import { IComponentProps } from '../../models';
export interface IHeaderProps extends IComponentProps {
  className?: string;
}

const StickyHeader = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
  transition: all 0.5s;

  &.opaque {
    background-color: white;
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  }
`;

export function Header(props: IHeaderProps) {
  return (
    <StickyHeader className={'header-wrapper ' + (props.className || '')}>
      <div className="search">
        <SearchIcon variant="muted" className="opacity-50" />
        <input type="text" placeholder="Search.." />
      </div>
      <div className="relative">
        <CartIcon className="mx-2" />
        <Badge>1</Badge>
      </div>
      <div className="relative">
        <InboxIcon className="mx-2" />
        <Badge>9+</Badge>
      </div>
    </StickyHeader>
  );
}
