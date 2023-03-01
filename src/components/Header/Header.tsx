import * as React from 'react';
import './Header.scss';
import { SearchIcon, CartIcon, InboxIcon } from '../../icons';
import { Badge } from '../Badge/Badge';
export interface IHeaderProps {
  className?: string;
}

export function Header(props: IHeaderProps) {
  return (
    <div className={'header-wrapper ' + (props.className || '')}>
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
    </div>
  );
}
